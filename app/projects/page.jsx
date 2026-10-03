"use client";

import Navbar from "@/components/Navbar";
import { useLang } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiCog6Tooth,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { projectsData as initialProjects } from "./data";

const categories = ["All", "Next.js", "React", "Full Stack", "AI / Gemini"];

export default function AllProjectsPage() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectsList, setProjectsList] = useState(initialProjects);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjectsList(data);
        }
      })
      .catch(() => {});
  }, []);

  const projectsToDisplay = projectsList.map((p) => {
    const projectKey = p.key || p.slug?.replace("-", "");
    const localized = t.projects?.items?.[projectKey] || t.projects?.items?.[p.slug];
    const tagline = p[lang]?.tagline || localized?.tagline || p.tagline;
    const description = p[lang]?.description || localized?.description || p.description;
    return {
      ...p,
      tagline,
      description,
    };
  });

  const filteredProjects = projectsToDisplay.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      (project.tagline || "").toLowerCase().includes(search.toLowerCase()) ||
      (project.description || "").toLowerCase().includes(search.toLowerCase()) ||
      (project.stack || []).some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase()),
      );

    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;
    if (activeFilter === "Next.js")
      return (project.stack || []).some((tech) => tech.includes("Next.js"));
    if (activeFilter === "React")
      return (project.stack || []).some((tech) => tech.includes("React"));
    if (activeFilter === "Full Stack")
      return (
        (project.stack || []).includes("MongoDB") || (project.stack || []).includes("Express")
      );
    if (activeFilter === "AI / Gemini")
      return (project.stack || []).some((tech) => tech.includes("Gemini"));

    return true;
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 20px 80px",
        background: "var(--bg-page)",
      }}
    >
      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "32px" }}
        >
          <Link
            href="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "9999px",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-subtle)",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: "500",
              textDecoration: "none",
              backdropFilter: "blur(12px)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
              e.currentTarget.style.color = "var(--text-base)";
              e.currentTarget.style.transform = "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--glass-border)";
              e.currentTarget.style.color = "var(--text-subtle)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <HiArrowLeft />
            Back to Home
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px",
              color: "#8b5cf6",
            }}
          >
            {t.projects?.allProjectsEyebrow || "Portfolio Showcase"}
          </span>
          <h1
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
              color: "var(--text-base)",
              marginBottom: "16px",
            }}
          >
            {t.projects?.allProjectsHeading || "All"}{" "}
            <span className="gradient-text">
              {t.projects?.allProjectsHeadingHighlight || "Projects"}
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Explore my complete collection of full-stack platforms, AI-powered applications, dynamic web apps, and developer tools.
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginBottom: "56px",
          }}
        >
          {/* Search bar */}
          <div
            style={{
              position: "relative",
              maxWidth: "460px",
              width: "100%",
            }}
          >
            <HiMagnifyingGlass
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.2rem",
                color: "var(--text-muted)",
              }}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by project name, tech, or feature..."
              style={{
                width: "100%",
                padding: "14px 18px 14px 48px",
                borderRadius: "9999px",
                background: "var(--input-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-base)",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                outline: "none",
                backdropFilter: "blur(16px)",
                boxSizing: "border-box",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(139,92,246,0.6)";
                e.target.style.boxShadow = "0 0 24px rgba(139,92,246,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--glass-border)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Category filter pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: isActive
                      ? "linear-gradient(135deg, #8b5cf6, #22d3ee)"
                      : "var(--glass-bg)",
                    border: isActive
                      ? "1px solid transparent"
                      : "1px solid var(--glass-border)",
                    color: isActive ? "white" : "var(--text-subtle)",
                    boxShadow: isActive
                      ? "0 4px 16px rgba(139,92,246,0.3)"
                      : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "var(--text-muted)",
              }}
            >
              <p style={{ fontSize: "1.2rem", fontFamily: "var(--font-body)" }}>
                No projects found matching &quot;{search}&quot;.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: "28px" }}
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-card group flex flex-col justify-between overflow-hidden"
                  style={{
                    borderRadius: "24px",
                    border: "1px solid var(--glass-border)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${project.color}60`;
                    e.currentTarget.style.boxShadow = `0 16px 40px ${project.color}20, 0 0 20px ${project.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                  }}
                >
                  <div>
                    {/* Image Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/10",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(to bottom, transparent 30%, ${project.color}20, var(--bg-page))`,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          left: "14px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                          background: "var(--glass-bg)",
                          backdropFilter: "blur(8px)",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          border: "1px solid var(--glass-border)",
                        }}
                      >
                        {project.number}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: "24px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "8px",
                        }}
                      >
                        <h3
                          className="font-bold"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.35rem",
                            color: "var(--text-base)",
                          }}
                        >
                          {project.name}
                        </h3>
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: project.color,
                            boxShadow: `0 0 10px ${project.color}`,
                          }}
                        />
                      </div>

                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: project.color,
                          marginBottom: "12px",
                        }}
                      >
                        {project.tagline}
                      </p>

                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "var(--text-muted)",
                          lineHeight: "1.65",
                          marginBottom: "20px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "6px",
                          marginBottom: "24px",
                        }}
                      >
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              padding: "3px 10px",
                              borderRadius: "9999px",
                              background: `${project.color}15`,
                              border: `1px solid ${project.color}30`,
                              color: project.color,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div
                    style={{
                      padding: "0 24px 24px",
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
                        color: "white",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.88";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <HiArrowTopRightOnSquare /> Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--text-subtle)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        backdropFilter: "blur(12px)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                        e.currentTarget.style.color = "var(--text-base)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--glass-border)";
                        e.currentTarget.style.color = "var(--text-subtle)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <FaGithub /> Code
                    </a>

                    <Link
                      href={`/projects/${project.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--text-subtle)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        backdropFilter: "blur(12px)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                        e.currentTarget.style.color = "var(--text-base)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--glass-border)";
                        e.currentTarget.style.color = "var(--text-subtle)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      Details <HiArrowRight />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--glass-border)",
          padding: "24px 20px",
          marginTop: "80px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Farhan Sadiq. All rights reserved.
        </p>

        <Link
          href="/admin"
          title="Admin Dashboard"
          aria-label="Admin Dashboard"
          style={{
            position: "absolute",
            right: "20px",
            opacity: 0.2,
            transition: "all 0.3s ease",
            color: "var(--text-muted)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            borderRadius: "50%",
            fontSize: "1rem",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.color = "#8b5cf6";
            e.currentTarget.style.transform = "scale(1.15) rotate(45deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.2";
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          }}
        >
          <HiCog6Tooth />
        </Link>
      </footer>
    </main>
  );
}
