"use client";

import {
  HiAcademicCap,
  HiBookOpen,
  HiCalendar,
  HiLocationMarker,
} from "react-icons/hi";

export default function EducationCard({ item }) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "24px",
        padding: "28px 32px",
        background: "var(--card-bg, rgba(12, 12, 28, 0.95))",
        border: `1px solid ${item.accentColor}44`,
        boxShadow: `0 16px 40px rgba(0,0,0,0.35), inset 0 1px 1px ${item.accentColor}30`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* Top Accent Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
        }}
      />

      {/* Header: Category Badge + Period & Location */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            borderRadius: "9999px",
            background: item.typeBg,
            border: `1px solid ${item.typeBorder}`,
            color: item.typeColor,
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: "700",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <HiBookOpen style={{ fontSize: "0.9rem" }} />
          {item.type}
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              borderRadius: "10px",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
            }}
          >
            <HiCalendar style={{ color: item.accentColor, fontSize: "0.9rem" }} />
            <span>{item.period}</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            <HiLocationMarker style={{ fontSize: "0.95rem", flexShrink: 0 }} />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Title & Institution */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: "700",
            color: "var(--text-base)",
            lineHeight: "1.3",
            margin: 0,
          }}
        >
          {item.title}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "1.05rem",
            fontWeight: "600",
            color: item.institutionColor,
          }}
        >
          <HiAcademicCap style={{ fontSize: "1.2rem", flexShrink: 0 }} />
          <span>{item.institution}</span>
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <p
          style={{
            padding: "16px 18px",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid var(--glass-border)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            lineHeight: "1.65",
            margin: 0,
          }}
        >
          {item.description}
        </p>
      )}
    </div>
  );
}
