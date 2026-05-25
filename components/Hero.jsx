"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { HiArrowDown, HiEnvelope } from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/farhansm01", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/farhan-sadiq19/",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/farhan_sadiq22", label: "X" },
  { icon: FaWhatsapp, href: "https://wa.me/8801888295969", label: "WhatsApp" },
  {
    icon: HiEnvelope,
    href: "mailto:farhansadiq2021@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass-card border border-violet-500/20"
              style={{ padding: "8px 16px", marginBottom: "24px" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-sm text-white/60"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                marginBottom: "16px",
                display: "block",
              }}
            >
              Hi, I&apos;m <span className="gradient-text">Farhan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                marginBottom: "24px",
                height: "40px",
              }}
            >
              <span
                style={{ color: "rgba(255,255,255,0.4)", marginRight: "8px" }}
              >
                &gt;
              </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Programmer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-body)", marginBottom: "32px" }}
            >
              CSE student at AIUB, Bangladesh — building full stack web apps
              with the MERN stack and Next.js. Passionate about clean code, good
              UX, and turning ideas into real products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start"
              style={{ gap: "16px", marginBottom: "32px" }}
            >
              <a
                href="/resume.pdf"
                download
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
                  fontFamily: "var(--font-body)",
                  padding: "12px 28px",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                <HiDownload className="w-4 h-4" />
                Download CV
              </a>

              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontFamily: "var(--font-body)",
                  padding: "12px 28px",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  color: "rgba(255,255,255,0.8)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                }}
              >
                <HiEnvelope className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start"
              style={{ gap: "12px" }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card border border-white/10 text-white/60 hover:text-white hover:border-violet-500/40 transition-colors duration-200"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(34,211,238,0.6))",
                  transform: "scale(1.1)",
                }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "clamp(240px, 30vw, 320px)",
                  height: "clamp(240px, 30vw, 320px)",
                  border: "3px solid transparent",
                  background:
                    "linear-gradient(#050510, #050510) padding-box, linear-gradient(135deg, #8b5cf6, #22d3ee) border-box",
                }}
              >
                <Image
                  src="/photo.jpeg"
                  alt="Farhan Sadiq"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-white/30 text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
