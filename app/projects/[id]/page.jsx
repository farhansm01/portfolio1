import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/projectsStore";
import { projectsData } from "../data";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  let allProjects = [];
  try {
    allProjects = getAllProjects();
  } catch {
    allProjects = projectsData;
  }

  const project = allProjects.find((p) => p.slug === id) || projectsData.find((p) => p.slug === id);

  if (!project) {
    return {
      title: "Project Not Found | Farhan Sadiq",
    };
  }

  const title = `${project.name} — ${project.en?.tagline || project.tagline} | Farhan Sadiq`;
  const description = project.en?.description || project.description;
  const url = `https://farhansadiq.dev/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.name,
      ...(project.stack || []),
      "Farhan Sadiq",
      "Full Stack Developer",
      "Portfolio Project",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Farhan Sadiq Portfolio",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }) {
  return <ProjectDetailClient params={params} />;
}
