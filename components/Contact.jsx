"use client";

import { useLang } from "@/context/LanguageContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { HiEnvelope, HiPaperAirplane, HiPhone } from "react-icons/hi2";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/farhansm01", color: "#6d28d9" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/farhan-sadiq19/",
    color: "#0ea5e9",
  },
];

export default function Contact() {
  const { t } = useLang();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const contactInfo = [
    {
      icon: HiEnvelope,
      label: "Email",
      value: "farhansadiq2021@gmail.com",
      href: "mailto:farhansadiq2021@gmail.com",
      color: "#8b5cf6",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+880 1888-295969",
      href: "tel:+8801888295969",
      color: "#22d3ee",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+880 1888-295969",
      href: "https://wa.me/8801888295969",
      color: "#4ade80",
    },
  ];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_qkimr67",
        "template_r00t377",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: form.name,
        },
        "T969OLXEJfHDcKmva",
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    background: "var(--input-bg)",
    border: "1px solid var(--glass-border)",
    color: "var(--text-base)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section id="contact" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", width: "100%" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
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
            {t.contact.eyebrow}
          </span>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-base)",
            }}
          >
            {t.contact.heading}{" "}
            <span className="gradient-text">{t.contact.headingHighlight}</span>
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

        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "48px", alignItems: "start" }}
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div>
              <h3
                className="font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  marginBottom: "12px",
                  color: "var(--text-base)",
                }}
              >
                {t.contact.subtitle}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.7",
                }}
              >
                {t.contact.body}
              </p>
            </div>

            {/* Contact info cards */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}50`;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${item.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.boxShadow = "var(--glass-shadow)";
                  }}
                  className="glass-card"
                  style={{
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                    cursor: "pointer",
                    border: "1px solid var(--glass-border)",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon
                      style={{ color: item.color, fontSize: "1.2rem" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        color: "var(--text-base)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                  }}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <s.icon style={{ color: s.color, fontSize: "1.2rem" }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="glass-card"
            style={{
              borderRadius: "24px",
              padding: "36px",
              position: "relative",
              border: "1px solid var(--glass-border)",
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                borderRadius: "24px 24px 0 0",
                background:
                  "linear-gradient(90deg, transparent, #8b5cf6, #22d3ee, transparent)",
              }}
            />

            <h3
              className="font-bold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                marginBottom: "24px",
                color: "var(--text-base)",
              }}
            >
              {t.contact.form.send}
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <label style={labelStyle}>{t.contact.form.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(139,92,246,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--glass-border)")
                  }
                />
              </div>
              <div>
                <label style={labelStyle}>{t.contact.form.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(139,92,246,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--glass-border)")
                  }
                />
              </div>
              <div>
                <label style={labelStyle}>{t.contact.form.messageLabel}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(139,92,246,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--glass-border)")
                  }
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(139,92,246,0.35)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  background:
                    status === "sending"
                      ? "rgba(139,92,246,0.4)"
                      : "linear-gradient(135deg, #8b5cf6, #22d3ee)",
                  border: "none",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
              >
                <HiPaperAirplane style={{ fontSize: "1.1rem" }} />
                {status === "sending"
                  ? t.contact.form.sending
                  : t.contact.form.send}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    textAlign: "center",
                    color: "#4ade80",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                  }}
                >
                  {t.contact.form.success}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    textAlign: "center",
                    color: "#f87171",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                  }}
                >
                  {t.contact.form.error}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
