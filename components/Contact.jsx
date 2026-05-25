"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { HiEnvelope, HiPaperAirplane, HiPhone } from "react-icons/hi2";

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

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/farhansm01",
    color: "#ffffff",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farhan-sadiq19/",
    color: "#0ea5e9",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            Get In Touch
          </span>
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            Contact <span className="gradient-text">Me</span>
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
          {/* LEFT — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div>
              <h3
                className="text-white font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  marginBottom: "12px",
                }}
              >
                Let&apos;s work together
              </h3>
              <p
                className="text-white/50 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}
              >
                I&apos;m currently open to new opportunities. Whether you have a
                project in mind, a question, or just want to say hi — my inbox
                is always open!
              </p>
            </div>

            {/* Contact cards */}
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
                  className="glass-card border border-white/10"
                  style={{
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                    cursor: "pointer",
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
                        color: "rgba(255,255,255,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
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
            className="glass-card border border-white/10"
            style={{ borderRadius: "24px", padding: "36px" }}
          >
            {/* Top accent */}
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
              className="text-white font-bold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                marginBottom: "24px",
              }}
            >
              Send a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Name */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = "1px solid rgba(139,92,246,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.border = "1px solid rgba(255,255,255,0.1)")
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = "1px solid rgba(139,92,246,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.border = "1px solid rgba(255,255,255,0.1)")
                  }
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="What's on your mind?"
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = "1px solid rgba(139,92,246,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.border = "1px solid rgba(255,255,255,0.1)")
                  }
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
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
                }}
              >
                <HiPaperAirplane style={{ fontSize: "1.1rem" }} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Status messages */}
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
                  ✓ Message sent! I&apos;ll get back to you soon.
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
                  ✕ Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
