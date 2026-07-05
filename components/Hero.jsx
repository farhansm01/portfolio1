"use client";

import { useLang } from "@/context/LanguageContext";
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
  const { t } = useLang();
  const sequence = t.hero.roles.flatMap((role) => [role, 2000]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass-card"
              style={{
                padding: "8px 16px",
                marginBottom: "24px",
                border: "1px solid rgba(139,92,246,0.25)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                {t.hero.available}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                marginBottom: "16px",
                color: "var(--text-base)",
              }}
            >
              {t.hero.greeting} <span className="gradient-text">Farhan</span>
            </motion.h1>

            {/* Typewriter */}
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
              <span style={{ color: "var(--text-muted)", marginRight: "8px" }}>
                &gt;
              </span>
              <TypeAnimation
                key={sequence.join("")}
                sequence={sequence}
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

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{
                fontFamily: "var(--font-body)",
                marginBottom: "32px",
                color: "var(--text-muted)",
              }}
            >
              {t.hero.bio}
            </motion.p>

            {/* Buttons */}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(139,92,246,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
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
                  transition: "all 0.2s ease",
                }}
              >
                <HiDownload className="w-4 h-4" />
                {t.hero.downloadCV}
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(139,92,246,0.15)";
                  e.currentTarget.style.color = "var(--text-base)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.color = "var(--text-subtle)";
                }}
                style={{
                  fontFamily: "var(--font-body)",
                  padding: "12px 28px",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  color: "var(--text-subtle)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  cursor: "pointer",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  transition: "all 0.2s ease",
                }}
              >
                <HiEnvelope className="w-4 h-4" />
                {t.hero.contactMe}
              </button>
            </motion.div>

            {/* Social links */}
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
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-muted)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                    e.currentTarget.style.color = "var(--text-base)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.color = "var(--text-muted)";
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
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(34,211,238,0.6))",
                  transform: "scale(1.15)",
                }}
              />
              {/* Photo */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "clamp(240px, 30vw, 320px)",
                  height: "clamp(240px, 30vw, 320px)",
                  border: "3px solid transparent",
                  background:
                    "linear-gradient(var(--bg-page), var(--bg-page)) padding-box, linear-gradient(135deg, #8b5cf6, #22d3ee) border-box",
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              opacity: 0.5,
            }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown
              className="w-4 h-4"
              style={{ color: "var(--text-muted)", opacity: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
