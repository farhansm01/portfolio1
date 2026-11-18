"use client";

import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import { HiAcademicCap, HiHeart, HiPlay } from "react-icons/hi2";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#6d28d9" },
  { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
  { icon: SiExpress, name: "Express", color: "#6d28d9" },
  { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
];

const cardMeta = [
  { key: "journey", icon: HiCode, color: "#8b5cf6" },
  { key: "mindset", icon: HiAcademicCap, color: "#22d3ee" },
  { key: "beyond", icon: HiHeart, color: "#f472b6" },
];

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
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

        {/* Introduction Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          style={{
            maxWidth: "820px",
            margin: "0 auto 56px",
            width: "100%",
          }}
        >
          <div
            className="glass-card group relative overflow-hidden transition-all duration-300"
            style={{
              borderRadius: "24px",
              padding: "20px",
              border: "1px solid var(--glass-border)",
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.12)",
            }}
          >
            {/* Ambient top light on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.18), transparent 70%)",
                borderRadius: "24px",
              }}
            />

            {/* Video Card Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
                padding: "2px 6px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "rgba(139, 92, 246, 0.15)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8b5cf6",
                  }}
                >
                  <HiPlay style={{ fontSize: "1.1rem", marginLeft: "2px" }} />
                </div>
                <div>
                  <h3
                    className="font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      color: "var(--text-base)",
                      lineHeight: "1.2",
                    }}
                  >
                    {t.about.videoTitle}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t.about.videoSubtitle}
                  </p>
                </div>
              </div>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  background: "rgba(139, 92, 246, 0.1)",
                  color: "#8b5cf6",
                  border: "1px solid rgba(139, 92, 246, 0.25)",
                }}
              >
                1080p HD
              </span>
            </div>

            {/* 16:9 Video Player */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "16px",
                aspectRatio: "16 / 9",
                background: "#050510",
                boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <video
                controls
                preload="metadata"
                playsInline
                poster="/photo.jpeg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                  display: "block",
                }}
              >
                <source src="/intro.mp4" type="video/mp4" />
                <source src="/IMG_6554.mp4" type="video/mp4" />
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "16px", marginBottom: "56px" }}
        >
          {stats.map(({ label, value }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
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
          {cardMeta.map(({ key, icon: Icon, color }, idx) => {
            const card = t.about.cards[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card group relative overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: "24px",
                  padding: "28px",
                  border: "1px solid var(--glass-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}60`;
                  e.currentTarget.style.boxShadow = `0 16px 35px ${color}22, 0 0 15px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}25, transparent 70%)`,
                    borderRadius: "24px",
                  }}
                />
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: `${color}20`,
                    border: `1px solid ${color}40`,
                    marginBottom: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 4px 14px ${color}25`,
                  }}
                >
                  <Icon style={{ color, fontSize: "1.4rem" }} />
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
            {techStack.map(({ icon: Icon, name, color }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.12,
                  y: -4,
                  transition: { duration: 0.15 },
                }}
                className="glass-card transition-all duration-300"
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
                  e.currentTarget.style.borderColor = `${color}60`;
                  e.currentTarget.style.background = `${color}15`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}35`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.background = "var(--glass-bg)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon style={{ color, fontSize: "1.2rem" }} />
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
