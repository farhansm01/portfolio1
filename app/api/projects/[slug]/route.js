import { getProjectsCollection } from "@/lib/db";
import { getAllProjects, saveAllProjects } from "@/lib/projectsStore";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;
  try {
    const col = await getProjectsCollection();
    const doc = await col.findOne({ slug });
    if (!doc) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    const { _id, ...project } = doc;
    return NextResponse.json(project);
  } catch {
    const projects = getAllProjects();
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project);
  }
}

export async function PUT(request, { params }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_pass_session");
  if (session?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  try {
    const updatedData = await request.json();

    try {
      const col = await getProjectsCollection();
      const res = await col.updateOne({ slug }, { $set: updatedData });
      if (res.matchedCount === 0) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }
    } catch {
      let projects = getAllProjects();
      const index = projects.findIndex((p) => p.slug === slug);
      if (index === -1) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }
      projects[index] = { ...projects[index], ...updatedData };
      saveAllProjects(projects);
    }

    return NextResponse.json({ success: true, slug });
  } catch {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_pass_session");
  if (session?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  try {
    try {
      const col = await getProjectsCollection();
      const res = await col.deleteOne({ slug });
      if (res.deletedCount === 0) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }

      // Reindex numbers
      const docs = await col.find({}).toArray();
      for (let i = 0; i < docs.length; i++) {
        const numStr = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
        await col.updateOne({ _id: docs[i]._id }, { $set: { number: numStr } });
      }
    } catch {
      let projects = getAllProjects();
      const filtered = projects.filter((p) => p.slug !== slug);
      if (filtered.length === projects.length) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }
      const reindexed = filtered.map((p, idx) => ({
        ...p,
        number: idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`,
      }));
      saveAllProjects(reindexed);
    }

    return NextResponse.json({ success: true, message: "Project deleted" });
  } catch {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
