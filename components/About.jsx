"use client";

import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import { HiAcademicCap, HiHeart } from "react-icons/hi2";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#6d28d9" },
  { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
  { icon: SiExpress, name: "Express", color: "#6d28d9" },
  { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
];

const cardMeta = [
  { key: "journey", icon: HiCode, color: "#8b5cf6", from: "left" },
  { key: "mindset", icon: HiAcademicCap, color: "#22d3ee", from: "bottom" },
  { key: "beyond", icon: HiHeart, color: "#f472b6", from: "right" },
];

const dv = {
  left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  bottom: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  top: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  fadeUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
};

export default function About() {
  const { t } = useLang();

  const stats = [
    { label: t.about.stats.universityLabel, value: t.about.stats.university },
    { label: t.about.stats.degreeLabel, value: t.about.stats.degree },
    { label: t.about.stats.stackLabel, value: t.about.stats.stack },
    { label: t.about.stats.statusLabel, value: t.about.stats.status },
  ];

  return (
    <section id="about" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", width: "100%" }}>
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
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px",
              color: "#8b5cf6",
            }}
          >
            {t.about.eyebrow}
          </span>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-base)",
            }}
          >
            {t.about.heading}{" "}
            <span className="gradient-text">{t.about.headingHighlight}</span>
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

        {/* Bio */}
        <motion.div
          variants={dv.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            maxWidth: "750px",
            margin: "0 auto 56px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              marginBottom: "18px",
              color: "var(--text-muted)",
              lineHeight: "1.8",
            }}
          >
            {t.about.bio1}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: "1.8",
            }}
          >
            {t.about.bio2}
          </p>
        </motion.div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "16px", marginBottom: "56px" }}
        >
          {stats.map(({ label, value }, i) => (
            <motion.div
              key={label}
              variants={dv.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="glass-card"
              style={{
                borderRadius: "16px",
                padding: "20px 16px",
                textAlign: "center",
                border: "1px solid var(--glass-border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  color: "var(--text-muted)",
                }}
              >
                {label}
              </p>
              <p
                className="font-semibold"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-base)",
                }}
              >
                {value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "24px", marginBottom: "56px" }}
        >
          {cardMeta.map(({ key, icon: Icon, color, from }, i) => {
            const card = t.about.cards[key];
            return (
              <motion.div
                key={key}
                variants={dv[from]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                className="glass-card group relative overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: "24px",
                  padding: "28px",
                  border: "1px solid var(--glass-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}18, transparent 70%)`,
                    borderRadius: "24px",
                  }}
                />
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${color}20`,
                    border: `1px solid ${color}35`,
                    marginBottom: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon style={{ color, fontSize: "1.3rem" }} />
                </div>
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    marginBottom: "12px",
                    color: "var(--text-base)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    lineHeight: "1.7",
                  }}
                >
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech stack */}
        <motion.div
          variants={dv.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
              color: "var(--text-muted)",
            }}
          >
            {t.about.coreStack}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            {techStack.map(({ icon: Icon, name, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
                whileHover={{
                  scale: 1.12,
                  y: -3,
                  transition: { duration: 0.15 },
                }}
                className="glass-card transition-all duration-200"
                style={{
                  borderRadius: "9999px",
                  padding: "10px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid var(--glass-border)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                }}
              >
                <Icon style={{ color, fontSize: "1.1rem" }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--text-subtle)",
                  }}
                >
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
