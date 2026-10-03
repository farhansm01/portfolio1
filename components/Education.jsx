"use client";

import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import EducationCard from "./EducationCard";

export default function Education() {
  const { t } = useLang();
  const e = t.education.items;

  const educationData = [
    {
      id: 1,
      type: e.undergraduate.type,
      typeColor: "#a78bfa",
      typeBg: "rgba(139,92,246,0.15)",
      typeBorder: "rgba(139,92,246,0.35)",
      accentColor: "#8b5cf6",
      title: e.undergraduate.title,
      institution: e.undergraduate.institution,
      institutionColor: "#a78bfa",
      period: e.undergraduate.period,
      location: e.undergraduate.location,
      description: e.undergraduate.description,
    },
    {
      id: 2,
      type: e.hsc.type,
      typeColor: "#38bdf8",
      typeBg: "rgba(34,211,238,0.15)",
      typeBorder: "rgba(34,211,238,0.35)",
      accentColor: "#22d3ee",
      title: e.hsc.title,
      institution: e.hsc.institution,
      institutionColor: "#38bdf8",
      period: e.hsc.period,
      location: e.hsc.location,
      description:
        "Completed Higher Secondary Certificate (HSC) under the Science Group.",
    },
    {
      id: 3,
      type: e.ssc.type,
      typeColor: "#fb7185",
      typeBg: "rgba(244,114,182,0.15)",
      typeBorder: "rgba(244,114,182,0.35)",
      accentColor: "#f472b6",
      title: e.ssc.title,
      institution: e.ssc.institution,
      institutionColor: "#fb7185",
      period: e.ssc.period,
      location: e.ssc.location,
      description:
        "Completed Secondary School Certificate (SSC) under the Science Group.",
    },
  ];

  return (
    <section id="education" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
            {t.education.eyebrow}
          </span>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-base)",
              margin: 0,
            }}
          >
            {t.education.heading}{" "}
            <span className="gradient-text">{t.education.headingHighlight}</span>
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

        {/* Timeline Container */}
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          {/* Vertical Timeline Stick */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "40px",
              bottom: "40px",
              left: "24px",
              width: "4px",
              borderRadius: "9999px",
              background: "linear-gradient(180deg, #8b5cf6 0%, #22d3ee 50%, #f472b6 100%)",
              boxShadow: "0 0 12px rgba(139, 92, 246, 0.4)",
              transformOrigin: "top center",
            }}
          />

          {/* Vertical Cards Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {educationData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.15, ease: "easeOut" }}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Education Hat (Graduation Cap Node) centered on the timeline stick */}
                <div
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "var(--card-bg, #090918)",
                    border: `2px solid ${item.accentColor}`,
                    boxShadow: `0 0 20px ${item.accentColor}66`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  <HiAcademicCap style={{ color: item.accentColor, fontSize: "1.6rem" }} />
                </div>

                {/* Connector Line from Hat to Card */}
                <div
                  style={{
                    position: "absolute",
                    left: "52px",
                    top: "50%",
                    width: "24px",
                    height: "2px",
                    background: item.accentColor,
                    opacity: 0.5,
                  }}
                />

                {/* Card Container */}
                <div style={{ marginLeft: "76px", width: "100%" }}>
                  <EducationCard item={item} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
