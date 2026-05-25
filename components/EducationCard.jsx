"use client";

import { motion, useTransform } from "framer-motion";
import { HiCalendar, HiLocationMarker } from "react-icons/hi";

export default function EducationCard({ item, index, total, scrollYProgress }) {
  const cardStart = index / total;
  const cardEnd = (index + 1) / total;
  const midpoint = (cardStart + cardEnd) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [cardStart, midpoint, cardEnd],
    [0.35, 1, 0.35],
  );
  const scale = useTransform(
    scrollYProgress,
    [cardStart, midpoint, cardEnd],
    [0.97, 1, 0.97],
  );
  const borderOpacity = useTransform(
    scrollYProgress,
    [cardStart, midpoint, cardEnd],
    [0.1, 0.4, 0.1],
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        borderRadius: "24px",
        padding: "32px",
        border: "1px solid rgba(255,255,255,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
      className="glass-card"
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
          opacity: borderOpacity,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "16px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 12px",
              borderRadius: "9999px",
              background: item.typeBg,
              border: `1px solid ${item.typeBorder}`,
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: item.typeColor,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {item.type}
            </span>
          </div>
          <h3
            className="text-white font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.15rem",
              marginBottom: "4px",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: item.institutionColor,
            }}
          >
            {item.institution}
          </p>
        </div>

        {item.status && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "9999px",
              background: "rgba(74,222,128,0.1)",
              border: "1px solid rgba(74,222,128,0.25)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: item.status.color,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: item.status.color,
              }}
            >
              {item.status.label}
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: item.description || item.icons ? "20px" : "0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <HiCalendar
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}
          />
          <span
            className="text-white/50"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem" }}
          >
            {item.period}
          </span>
        </div>
        {item.location && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <HiLocationMarker
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}
            />
            <span
              className="text-white/50"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem" }}
            >
              {item.location}
            </span>
          </div>
        )}
      </div>

      {item.description && (
        <>
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.06)",
              marginBottom: "16px",
            }}
          />
          <p
            className="text-white/50 leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
          >
            {item.description}
          </p>
        </>
      )}

      {item.icons && (
        <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
          {item.icons.map(({ icon: Icon, color }, i) => (
            <div
              key={i}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon style={{ color, fontSize: "1rem" }} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
