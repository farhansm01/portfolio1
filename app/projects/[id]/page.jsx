import { notFound } from "next/navigation";
import { projectsData } from "../data";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.slug === id);

  if (!project) {
    return {
      title: "Project Not Found | Farhan Sadiq",
    };
  }

  const title = `${project.name} — ${project.tagline} | Farhan Sadiq`;
  const description = project.description;
  const url = `https://farhansadiq.dev/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.name,
      ...project.stack,
      "Farhan Sadiq",
      "Full Stack Developer",
      "Portfolio Project",
      "Software Engineer Bangladesh",
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
      creator: "@farhan_sadiq22",
    },
  };
}

export default function ProjectPage({ params }) {
  return <ProjectDetailClient params={params} />;
}
