"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiArrowRight, HiArrowTopRightOnSquare } from "react-icons/hi2";

const projects = [
  {
    id: 1,
    number: "01",
    name: "OpenShelf",
    tagline: "Online Book Borrowing Platform",
    description:
      "A full stack book borrowing platform where users can browse, borrow, and manage books online. Features Google OAuth, protected routes, and a clean library management system.",
    stack: ["Next.js", "BetterAuth", "MongoDB", "Tailwind", "DaisyUI"],
    live: "https://open-shelf-ten.vercel.app/",
    github: "https://github.com/farhansm01/OpenShelf",
    image: "/projects/openshelf.png",
    color: "#8b5cf6",
  },
  {
    id: 2,
    number: "02",
    name: "Dragon News",
    tagline: "Category-Based News Platform",
    description:
      "A news portal with category-based browsing, private routes, and OAuth login. Features a React Marquee ticker, dynamic category sidebar, and smooth authentication flow.",
    stack: ["Next.js", "BetterAuth", "Tailwind", "React Marquee"],
    live: "https://dragon-news-omega-lemon.vercel.app/",
    github: "https://github.com/farhansm01/Dragon-News",
    image: "/projects/dragon-news.png",
    color: "#22d3ee",
  },
  {
    id: 3,
    number: "03",
    name: "Book Vibe",
    tagline: "Smart Book Library App",
    description:
      "A book library app with Read List and Wishlist functionality powered by localStorage. Built with React 19, React Router v7, and Recharts for reading analytics.",
    stack: ["React 19", "React Router v7", "Tailwind", "DaisyUI", "Recharts"],
    live: "https://book-vibe-fsm.netlify.app/",
    github: "https://github.com/farhansm01/Book-Vibe",
    image: "/projects/book-vibe.png",
    color: "#f472b6",
  },
  {
    id: 4,
    number: "04",
    name: "KeenKeeper",
    tagline: "Relationship Management App",
    description:
      "A personal relationship tracker with interaction timeline, analytics dashboard, and friend management. Uses Context API for state and Recharts for visual analytics.",
    stack: ["React", "React Router", "Context API", "Tailwind", "Recharts"],
    live: "https://keen-keeper-fsm.netlify.app/",
    github: "https://github.com/farhansm01/Keen-Keeper",
    image: "/projects/keen-keeper.png",
    color: "#fb923c",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const sectionHeight = rect.height / projects.length;
      const index = Math.min(
        Math.max(Math.floor(scrolled / sectionHeight), 0),
        projects.length - 1,
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = projects[activeIndex];

  return (
    <section id="projects" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", width: "100%" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <span
            className="text-violet-400"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px",
            }}
          >
            What I have built
          </span>
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div
            style={{
              width: "64px",
              height: "4px",
              margin: "16px auto 0",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
            }}
          />
        </motion.div>

        {/* Desktop layout */}
        {isDesktop && (
          <div
            ref={containerRef}
            style={{
              position: "relative",
              height: `${projects.length * 100}vh`,
            }}
          >
            {/* Sticky UI */}
            <div
              style={{
                position: "sticky",
                top: "80px",
                height: "calc(100vh - 160px)",
                display: "flex",
                gap: "48px",
                alignItems: "flex-start",
                paddingTop: "40px",
                zIndex: 1,
              }}
            >
              {/* LEFT — image card */}
              <div style={{ width: "460px", flexShrink: 0 }}>
                <div
                  className="glass-card border border-white/10 overflow-hidden"
                  style={{ borderRadius: "24px" }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16/10",
                      overflow: "hidden",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        style={{ position: "absolute", inset: 0 }}
                      >
                        <Image
                          src={active.image}
                          alt={active.name}
                          fill
                          sizes="460px"
                          className="object-cover object-top"
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(to bottom, transparent 40%, ${active.color}30, rgba(5,5,16,0.8))`,
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.5)",
                        background: "rgba(0,0,0,0.4)",
                        backdropFilter: "blur(8px)",
                        padding: "4px 10px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {active.number} / 04
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "6px",
                          }}
                        >
                          <h3
                            className="text-white font-bold"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "1.1rem",
                            }}
                          >
                            {active.name}
                          </h3>
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: active.color,
                              boxShadow: `0 0 8px ${active.color}`,
                            }}
                          />
                        </div>
                        <p
                          className="text-white/50"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                          }}
                        >
                          {active.tagline}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Progress dots */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "16px",
                  }}
                >
                  {projects.map((p, i) => (
                    <div
                      key={p.id}
                      style={{
                        height: "4px",
                        borderRadius: "9999px",
                        background:
                          i === activeIndex
                            ? active.color
                            : "rgba(255,255,255,0.15)",
                        width: i === activeIndex ? "24px" : "8px",
                        transition: "all 0.3s ease",
                        boxShadow:
                          i === activeIndex
                            ? `0 0 8px ${active.color}`
                            : "none",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT — info panel */}
              <div style={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: active.color,
                        letterSpacing: "0.1em",
                        marginBottom: "16px",
                      }}
                    >
                      {active.number}
                    </div>
                    <h3
                      className="text-white font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2rem, 3vw, 2.8rem)",
                        marginBottom: "16px",
                        lineHeight: 1.1,
                      }}
                    >
                      {active.name}
                    </h3>
                    <p
                      className="text-white/60 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        marginBottom: "24px",
                      }}
                    >
                      {active.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "32px",
                      }}
                    >
                      {active.stack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            padding: "4px 12px",
                            borderRadius: "9999px",
                            background: `${active.color}15`,
                            border: `1px solid ${active.color}30`,
                            color: active.color,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                    >
                      <a
                        href={active.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 20px",
                          borderRadius: "9999px",
                          background:
                            "linear-gradient(135deg, #8b5cf6, #22d3ee)",
                          color: "white",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        <HiArrowTopRightOnSquare style={{ fontSize: "1rem" }} />
                        Live Demo
                      </a>

                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 20px",
                          borderRadius: "9999px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        <FaGithub style={{ fontSize: "1rem" }} />
                        GitHub
                      </a>
                      <Link
                        href={`/projects/${active.name.toLowerCase().replace(/\s+/g, "-")}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 20px",
                          borderRadius: "9999px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        View Details
                        <HiArrowRight style={{ fontSize: "1rem" }} />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Mobile layout */}
        {!isDesktop && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card border border-white/10 overflow-hidden"
                style={{ borderRadius: "24px" }}
              >
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
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(5,5,16,0.9))",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.5)",
                      background: "rgba(0,0,0,0.4)",
                      backdropFilter: "blur(8px)",
                      padding: "3px 8px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {project.number}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3
                    className="text-white font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3rem",
                      marginBottom: "8px",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-white/55 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      marginBottom: "16px",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "20px",
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
                  <div
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
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
                      }}
                    >
                      <HiArrowTopRightOnSquare /> Live
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
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.8)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      <FaGithub /> GitHub
                    </a>
                    <Link
                      href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.8)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      Details <HiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
