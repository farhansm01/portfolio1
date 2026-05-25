"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { FaGithub } from "react-icons/fa6";
import {
  HiArrowLeft,
  HiArrowTopRightOnSquare,
  HiCheckCircle,
  HiLightBulb,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { projectsData } from "../data";

function CircuitBorder({ color, duration = 5 }) {
  const id = color.replace("#", "");
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <defs>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Comet gradient — bright head, long fading tail */}
        <linearGradient id={`comet-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="0.2" />
          <stop offset="80%" stopColor={color} stopOpacity="0.7" />
          <stop offset="95%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* faint full border */}
      <rect
        x="1"
        y="1"
        rx="20"
        ry="20"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.1"
        style={{ width: "calc(100% - 2px)", height: "calc(100% - 2px)" }}
      />

      {/* comet — long fading tail, bright head, travels around border */}
      <rect
        x="1"
        y="1"
        rx="20"
        ry="20"
        fill="none"
        stroke={`url(#comet-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="180 9999"
        filter={`url(#glow-${id})`}
        style={{
          width: "calc(100% - 2px)",
          height: "calc(100% - 2px)",
          animation: `comet-${id} ${duration}s linear infinite`,
        }}
      />

      <style>{`
        @keyframes comet-${id} {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -2000; }
        }
      `}</style>
    </svg>
  );
}

function AnimatedCard({
  color,
  duration,
  delay = 0,
  children,
  extraStyle = {},
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="glass-card border border-white/10"
      style={{
        borderRadius: "20px",
        padding: "32px",
        marginBottom: "24px",
        position: "relative",
        overflow: "hidden",
        ...extraStyle,
      }}
    >
      <CircuitBorder color={color} duration={duration} />
      {children}
    </motion.div>
  );
}

function SectionHeading({ icon: Icon, color, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <Icon style={{ color, fontSize: "1.2rem" }} />
      <h2
        className="text-white font-bold"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}
      >
        {label}
      </h2>
    </div>
  );
}

export default function ProjectDetail({ params }) {
  const { id } = use(params);
  const project = projectsData.find((p) => p.slug === id);
  if (!project) notFound();

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 20px 80px",
        background: "var(--bg, #05050f)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "40px" }}
        >
          <Link
            href="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
            }
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "40px", textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: project.color,
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            {project.number} / 04
          </motion.div>
          <h1
            className="text-white font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginBottom: "12px",
              lineHeight: 1.1,
            }}
          >
            {project.name}
          </h1>
          <p
            className="text-white/50"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              marginBottom: "24px",
            }}
          >
            {project.tagline}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card border border-white/10 overflow-hidden"
          style={{ borderRadius: "24px", marginBottom: "40px" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              overflow: "hidden",
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="900px"
              className="object-cover object-top"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to bottom, transparent 50%, ${project.color}20, rgba(5,5,16,0.6))`,
              }}
            />
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "48px",
            justifyContent: "center",
          }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
              color: "white",
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            <HiArrowTopRightOnSquare /> Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            <FaGithub /> GitHub
          </a>
        </motion.div>

        {/* About */}
        <AnimatedCard color={project.color} duration={5} delay={0.2}>
          <SectionHeading
            icon={HiWrenchScrewdriver}
            color={project.color}
            label="About the Project"
          />
          <p
            className="text-white/60 leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            {project.description}
          </p>
        </AnimatedCard>

        {/* Challenges */}
        <AnimatedCard color="#f472b6" duration={6} delay={0.3}>
          <SectionHeading
            icon={HiWrenchScrewdriver}
            color="#f472b6"
            label="Challenges Faced"
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {project.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "rgba(244,114,182,0.15)",
                    border: "1px solid rgba(244,114,182,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "#f472b6",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <p
                  className="text-white/60 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    flex: 1,
                  }}
                >
                  {challenge}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>

        {/* Future Plans */}
        <AnimatedCard
          color="#4ade80"
          duration={7}
          delay={0.4}
          extraStyle={{ marginBottom: 0 }}
        >
          <SectionHeading
            icon={HiLightBulb}
            color="#4ade80"
            label="Future Plans"
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {project.future.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <HiCheckCircle
                  style={{
                    color: "#4ade80",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                />
                <p
                  className="text-white/60 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    flex: 1,
                  }}
                >
                  {plan}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </main>
  );
}
