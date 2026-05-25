"use client";

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
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
  { icon: SiExpress, name: "Express", color: "#ffffff" },
  { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
];

const stats = [
  { label: "University", value: "AIUB, Bangladesh" },
  { label: "Degree", value: "B.Sc. in Computer Science" },
  { label: "Stack", value: "MERN + Next.js" },
  { label: "Status", value: "Open to Opportunities" },
];

const cards = [
  {
    icon: HiCode,
    title: "The Journey",
    color: "#8b5cf6",
    from: "left",
    text: "Started in 2020 with HTML and CSS. Kept pushing — JavaScript, React, now full MERN stack. The path was not straight but every restart taught me something the first attempt could not.",
  },
  {
    icon: HiAcademicCap,
    title: "The Mindset",
    color: "#22d3ee",
    from: "bottom",
    text: "I am drawn to problems worth solving. I consume business content, study how products grow, and think about impact before implementation. Code is the tool — the idea is the real work.",
  },
  {
    icon: HiHeart,
    title: "Beyond Code",
    color: "#f472b6",
    from: "right",
    text: "History documentaries, business rabbit holes, and asking why did this succeed? I am fascinated by how things — companies, ideas, movements — go from zero to something real.",
  },
];

const directionVariants = {
  left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  bottom: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  top: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  fadeUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
};

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", width: "100%" }}>
        {/* Heading — drops from top */}
        <motion.div
          variants={directionVariants.top}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "56px" }}
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
            Get to know me
          </span>
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            About <span className="gradient-text">Me</span>
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

        {/* Bio — fades up */}
        <motion.div
          variants={directionVariants.fadeUp}
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
            className="text-white/70 leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              marginBottom: "18px",
            }}
          >
            I&apos;m{" "}
            <span className="text-white font-semibold">Farhan Sadiq</span> — a
            Full Stack Developer and CSE student at{" "}
            <span className="text-violet-400 font-medium">
              AIUB, Bangladesh
            </span>
            . I build web applications with the MERN stack and Next.js, with a
            focus on clean architecture, real usability, and solutions that
            create actual value.
          </p>
          <p
            className="text-white/70 leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem" }}
          >
            I am interested in how technology and ideas come together to build
            products people rely on — and I enjoy creating visually polished
            interfaces that turn concepts into real interactive experiences.
          </p>
        </motion.div>

        {/* Stats — each tile slides from bottom with stagger */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "16px", marginBottom: "56px" }}
        >
          {stats.map(({ label, value }, i) => (
            <motion.div
              key={label}
              variants={directionVariants.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="glass-card border border-white/10"
              style={{
                borderRadius: "16px",
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <p
                className="text-white/40"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {label}
              </p>
              <p
                className="text-white font-semibold"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                {value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 Cards — left / bottom / right */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "24px", marginBottom: "56px" }}
        >
          {cards.map(({ icon: Icon, title, color, from, text }, i) => (
            <motion.div
              key={title}
              variants={directionVariants[from]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="glass-card border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
              style={{ borderRadius: "24px", padding: "28px" }}
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
                className="text-white font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  marginBottom: "12px",
                }}
              >
                {title}
              </h3>
              <p
                className="text-white/55 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack strip — fades up */}
        <motion.div
          variants={directionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center" }}
        >
          <p
            className="text-white/40"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Core Stack
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
                className="glass-card border border-white/10 hover:border-violet-500/30 transition-all duration-200"
                style={{
                  borderRadius: "9999px",
                  padding: "10px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Icon style={{ color, fontSize: "1.1rem" }} />
                <span
                  className="text-white/60"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
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
