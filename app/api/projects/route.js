import { getProjectsCollection } from "@/lib/db";
import { getAllProjects, saveAllProjects } from "@/lib/projectsStore";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const sortFn = (a, b) => {
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return timeB - timeA;
  };

  try {
    const col = await getProjectsCollection();
    const docs = await col.find({}).toArray();
    // Clean _id from docs
    const projects = docs.map(({ _id, ...rest }) => rest);
    projects.sort(sortFn);
    return NextResponse.json(projects);
  } catch {
    const projects = getAllProjects();
    projects.sort(sortFn);
    return NextResponse.json(projects);
  }
}

export async function POST(request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_pass_session");
  if (session?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const newProject = await request.json();
    if (!newProject.slug || !newProject.name) {
      return NextResponse.json({ error: "Slug and Name are required" }, { status: 400 });
    }

    if (!newProject.createdAt) {
      newProject.createdAt = new Date().toISOString();
    }

    try {
      const col = await getProjectsCollection();
      const existing = await col.findOne({ slug: newProject.slug });
      if (existing) {
        return NextResponse.json({ error: "Project with this slug already exists" }, { status: 400 });
      }

      const count = await col.countDocuments();
      if (!newProject.number) {
        const num = count + 1;
        newProject.number = num < 10 ? `0${num}` : `${num}`;
      }

      await col.insertOne(newProject);
    } catch {
      // Fallback to local JSON store
      const projects = getAllProjects();
      if (projects.some((p) => p.slug === newProject.slug)) {
        return NextResponse.json({ error: "Project with this slug already exists" }, { status: 400 });
      }
      if (!newProject.number) {
        const num = projects.length + 1;
        newProject.number = num < 10 ? `0${num}` : `${num}`;
      }
      projects.push(newProject);
      saveAllProjects(projects);
    }

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
