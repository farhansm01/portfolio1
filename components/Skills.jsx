"use client";

import { useLang } from "@/context/LanguageContext";
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

const skillData = [
  {
    key: "frontend",
    accent: "#8b5cf6",
    from: "left",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#6d28d9" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    key: "backend",
    accent: "#34d399",
    from: "bottom",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Express", icon: SiExpress, color: "#6d28d9" },
      { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    key: "tools",
    accent: "#fb7185",
    from: "right",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#6d28d9" },
      { name: "Vercel", icon: SiVercel, color: "#6d28d9" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const dv = {
  left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  bottom: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  top: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
};

function SkillPill({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.15 } }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${skill.color}18`;
        e.currentTarget.style.borderColor = `${skill.color}60`;
        e.currentTarget.style.boxShadow = `0 0 16px ${skill.color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--glass-bg)";
        e.currentTarget.style.borderColor = "var(--glass-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 15px",
        borderRadius: "999px",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        cursor: "default",
        userSelect: "none",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <skill.icon
        style={{ color: skill.color, fontSize: "1.1rem", flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          fontWeight: "500",
          color: "var(--text-subtle)",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          variants={dv.top}
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
              color: "#8b5cf6",
              display: "block",
              marginBottom: "10px",
            }}
          >
            {t.skills.eyebrow}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: "700",
              color: "var(--text-base)",
              margin: 0,
            }}
          >
            {t.skills.heading}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.skills.headingHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {skillData.map(({ key, accent, from, skills }, catIndex) => {
            const cat = t.skills.categories[key];
            return (
              <motion.div
                key={key}
                variants={dv[from]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: catIndex * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${accent}60`;
                  e.currentTarget.style.boxShadow = `0 16px 40px ${accent}20, 0 0 20px ${accent}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                }}
                style={{
                  borderRadius: "20px",
                  padding: "28px",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "var(--glass-shadow)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Accent orb */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: accent,
                    opacity: 0.08,
                    pointerEvents: "none",
                  }}
                />

                {/* Card header */}
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
                    {cat.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      color: "var(--text-base)",
                      margin: 0,
                    }}
                  >
                    {cat.title}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
