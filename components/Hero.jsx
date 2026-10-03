import { useLang } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { HiDownload, HiEye } from "react-icons/hi";
import { HiArrowDown, HiArrowTopRightOnSquare, HiEnvelope, HiXMark } from "react-icons/hi2";
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
  const [showResumeModal, setShowResumeModal] = useState(false);
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
              <button
                onClick={() => setShowResumeModal(true)}
                className="shine-button"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(139,92,246,0.45)";
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
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <HiEye className="w-4 h-4" />
                {t.hero.downloadCV}
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(139,92,246,0.2)";
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
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  transition: "all 0.3s ease",
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
                  whileHover={{ scale: 1.18, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "42px",
                    height: "42px",
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
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(139,92,246,0.3)";
                    e.currentTarget.style.color = "var(--text-base)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo with Rotating Ring & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-40 animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139,92,246,0.7), rgba(34,211,238,0.7))",
                  transform: "scale(1.25)",
                }}
              />

              {/* Animated Outer Gradient Spinning Ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-70"
                style={{
                  background: "conic-gradient(from 0deg, #8b5cf6, #22d3ee, #f472b6, #8b5cf6)",
                  animation: "spin-slow 12s linear infinite",
                  filter: "blur(4px)",
                }}
              />

              {/* Inner Photo Container */}
              <div
                className="relative rounded-full overflow-hidden z-10"
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

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "92vw",
                maxWidth: "1000px",
                height: "88vh",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                background: "var(--card-bg, rgba(10, 10, 24, 0.98))",
                border: "1px solid var(--glass-border)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.75)",
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 24px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(5, 5, 18, 0.95)",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#ffffff",
                    }}
                  >
                    Farhan Sadiq — Resume
                  </span>
                  <span
                    style={{
                      padding: "2px 10px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: "700",
                      background: "rgba(139, 92, 246, 0.2)",
                      color: "#c084fc",
                      border: "1px solid rgba(139, 92, 246, 0.4)",
                    }}
                  >
                    PDF
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <a
                    href="/Farhan_Sadique_Mohee_Resume.pdf"
                    download="Farhan_Sadique_Mohee_Resume.pdf"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 18px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
                      color: "#ffffff",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      boxShadow: "0 4px 15px rgba(139,92,246,0.35)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <HiDownload style={{ fontSize: "1rem" }} />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href="/Farhan_Sadique_Mohee_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "12px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--text-base)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <HiArrowTopRightOnSquare style={{ fontSize: "1rem" }} />
                    <span>Open Tab</span>
                  </a>

                  <button
                    onClick={() => setShowResumeModal(false)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "12px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    <HiXMark style={{ fontSize: "1.2rem" }} />
                  </button>
                </div>
              </div>

              {/* Modal PDF Content */}
              <div style={{ flex: 1, width: "100%", height: "100%", background: "#0f172a" }}>
                <iframe
                  src="/Farhan_Sadique_Mohee_Resume.pdf#toolbar=0&navpanes=0&view=FitH"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Farhan Sadiq Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
