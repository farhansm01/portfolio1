"use client";

import { motion } from "framer-motion";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    accent: "#a78bfa",
    tag: "UI & Interaction",
    from: "left",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    accent: "#34d399",
    tag: "Server & Data",
    from: "bottom",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools",
    accent: "#fb7185",
    tag: "Workflow & Deployment",
    from: "right",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const directionVariants = {
  left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  bottom: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  top: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading — drops in from top */}
        <motion.div
          variants={directionVariants.top}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#a78bfa",
              display: "block",
              marginBottom: "10px",
            }}
          >
            What I work with
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: "700",
              color: "#fff",
              margin: 0,
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {skillCategories.map(
            ({ title, accent, tag, from, skills }, catIndex) => (
              <motion.div
                key={title}
                variants={directionVariants[from]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: catIndex * 0.08,
                  ease: "easeOut",
                }}
                style={{
                  borderRadius: "20px",
                  padding: "28px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: accent,
                    opacity: 0.07,
                    pointerEvents: "none",
                  }}
                />

                {/* Header */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: "0.65rem",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: accent,
                      background: `${accent}18`,
                      border: `1px solid ${accent}35`,
                      borderRadius: "6px",
                      padding: "3px 10px",
                      marginBottom: "10px",
                    }}
                  >
                    {tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {title}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: `linear-gradient(90deg, ${accent}60, transparent)`,
                    marginBottom: "18px",
                  }}
                />

                {/* Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {skills.map((skill, i) => (
                    <SkillPill
                      key={skill.name}
                      skill={skill}
                      delay={catIndex * 0.08 + i * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function SkillPill({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.12,
        y: -3,
        background: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.25)",
        transition: { duration: 0.15 },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        padding: "7px 13px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        cursor: "default",
        userSelect: "none",
      }}
    >
      <skill.icon
        style={{ color: skill.color, fontSize: "1rem", flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          fontWeight: "500",
          color: "rgba(255,255,255,0.85)",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}
