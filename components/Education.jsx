"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import EducationCard from "./EducationCard";

export const educationData = [
  {
    id: 1,
    type: "Undergraduate",
    typeColor: "#8b5cf6",
    typeBg: "rgba(139,92,246,0.1)",
    typeBorder: "rgba(139,92,246,0.25)",
    accentColor: "#8b5cf6",
    title: "B.Sc. in Computer Science & Engineering",
    institution: "American International University — Bangladesh (AIUB)",
    institutionColor: "#a78bfa",
    period: "2021 — Present",
    location: "Dhaka, Bangladesh",
    description:
      "Studying core computer science fundamentals including data structures, algorithms, software engineering, and database systems. Currently in the 8th semester with a strong focus on full stack web development.",
    status: null,
    icons: null,
  },
  {
    id: 2,
    type: "Bootcamp",
    typeColor: "#22d3ee",
    typeBg: "rgba(34,211,238,0.1)",
    typeBorder: "rgba(34,211,238,0.25)",
    accentColor: "#22d3ee",
    title: "Complete Web Development",
    institution: "Programming Hero",
    institutionColor: "#22d3ee",
    period: "2024 — Present",
    location: null,
    description:
      "Intensive full stack bootcamp covering React, Next.js, Node.js, Express, and MongoDB with hands-on projects and real-world assignments.",
    status: { label: "In Progress", color: "#4ade80" },
    icons: [
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiNextdotjs, color: "#ffffff" },
      { icon: SiNodedotjs, color: "#68A063" },
      { icon: SiMongodb, color: "#4DB33D" },
    ],
  },
  {
    id: 3,
    type: "Higher Secondary",
    typeColor: "#f472b6",
    typeBg: "rgba(244,114,182,0.1)",
    typeBorder: "rgba(244,114,182,0.25)",
    accentColor: "#f472b6",
    title: "Science — HSC",
    institution: "Ispahani College, Chittagong",
    institutionColor: "#f472b6",
    period: "Completed 2022",
    location: "Chittagong, Bangladesh",
    description: null,
    status: null,
    icons: null,
  },
  {
    id: 4,
    type: "Secondary",
    typeColor: "#fb923c",
    typeBg: "rgba(251,146,60,0.1)",
    typeBorder: "rgba(251,146,60,0.25)",
    accentColor: "#fb923c",
    title: "Science — SSC",
    institution: "Hazi Mohammad Mohsin Govt. High School, Chittagong",
    institutionColor: "#fb923c",
    period: "Completed 2020",
    location: "Chittagong, Bangladesh",
    description: null,
    status: null,
    icons: null,
  },
];

const nodeColors = ["#8b5cf6", "#22d3ee", "#f472b6", "#fb923c"];

function MotionIcon({ progress, pathRef }) {
  const x = useTransform(progress, (p) => {
    if (!pathRef.current) return 0;
    const len = pathRef.current.getTotalLength();
    return pathRef.current.getPointAtLength(p * len).x;
  });
  const y = useTransform(progress, (p) => {
    if (!pathRef.current) return 0;
    const len = pathRef.current.getTotalLength();
    return pathRef.current.getPointAtLength(p * len).y;
  });

  return (
    <motion.text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "20px",
        userSelect: "none",
        filter: "drop-shadow(0 0 6px rgba(139,92,246,0.9))",
      }}
    >
      🎓
    </motion.text>
  );
}
export default function Education() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const svgPathRef = useRef(null);

  const [pathD, setPathD] = useState("");
  const [svgDims, setSvgDims] = useState({ w: 0, h: 0 });
  const [dots, setDots] = useState([]);
  const [cardBoxes, setCardBoxes] = useState([]); // for SVG mask
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /* ── mobile detection ──────────────────────────────────── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── measure ───────────────────────────────────────────── */
  useEffect(() => {
    function measure() {
      if (!sectionRef.current || isMobile) {
        setPathD("");
        return;
      }

      const cr = sectionRef.current.getBoundingClientRect();
      const W = cr.width;
      setSvgDims({ w: W, h: cr.height });

      const boxes = cardRefs.current.map((el, i) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const isLeft = i % 2 === 0;
        return {
          // anchor point on the card's inner edge, vertically centred
          innerX: isLeft ? r.right - cr.left : r.left - cr.left,
          centerY: r.top - cr.top + r.height / 2,
          // bounding box for the SVG mask (hides path inside cards)
          left: r.left - cr.left,
          top: r.top - cr.top,
          width: r.width,
          height: r.height,
        };
      });

      if (boxes.some((b) => !b)) return;

      setDots(boxes.map((b) => ({ x: b.innerX, y: b.centerY })));
      setCardBoxes(
        boxes.map((b) => ({
          left: b.left,
          top: b.top,
          width: b.width,
          height: b.height,
        })),
      );

      // ── Snake path: corner hugs the container WALL on the outgoing side.
      //    At each card's Y level the opposite half of the container is empty,
      //    so the long arm is fully visible there.
      //    The short segment that enters the next card is hidden by the SVG mask.
      let d = `M ${boxes[0].innerX} ${boxes[0].centerY}`;
      for (let i = 1; i < boxes.length; i++) {
        const prev = boxes[i - 1];
        const curr = boxes[i];
        const goingRight = curr.innerX > prev.innerX;
        const wallX = goingRight ? W * 0.72 : W * 0.28; // hug the wall on the travel side

        d += ` L ${wallX}       ${prev.centerY}`; // ─ long arm to wall  (VISIBLE)
        d += ` L ${wallX}       ${curr.centerY}`; // │ drop at wall      (VISIBLE)
        d += ` L ${curr.innerX} ${curr.centerY}`; // ─ enter next card   (MASKED)
      }
      setPathD(d);
    }

    const t = setTimeout(measure, 120);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [isMobile]);

  return (
    <section id="education" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
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
            My Background
          </span>
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            Education & <span className="gradient-text">Training</span>
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

        {/* Timeline */}
        <div
          ref={sectionRef}
          style={{ position: "relative", paddingBottom: "40px" }}
        >
          {pathD && !isMobile && (
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: svgDims.h,
                pointerEvents: "none",
                zIndex: -1,
                overflow: "visible",
              }}
            >
              <defs>
                <mask id="edu-mask">
                  <rect
                    x="0"
                    y="0"
                    width={svgDims.w}
                    height={svgDims.h}
                    fill="white"
                  />
                  {cardBoxes.map((box, i) => (
                    <rect
                      key={i}
                      x={box.left}
                      y={box.top}
                      width={box.width}
                      height={box.height}
                      rx="16"
                      ry="16"
                      fill="black"
                    />
                  ))}
                </mask>
              </defs>

              <path
                d={pathD}
                mask="url(#edu-mask)"
                fill="none"
                stroke="rgba(139,92,246,0.4)"
                strokeWidth="2"
                strokeDasharray="8 10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g mask="url(#edu-mask)">
                {dots.map((dot, i) => (
                  <circle
                    key={i}
                    cx={dot.x}
                    cy={dot.y}
                    r="7"
                    fill={nodeColors[i]}
                    opacity="0.9"
                  />
                ))}
              </g>

              <g mask="url(#edu-mask)">
                <path ref={svgPathRef} d={pathD} fill="none" stroke="none" />
                <MotionIcon progress={pathProgress} pathRef={svgPathRef} />
              </g>
            </svg>
          )}

          {/* Cards — z=1, above SVG */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {educationData.map((item, index) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: isMobile
                    ? "center"
                    : index % 2 === 0
                      ? "flex-start"
                      : "flex-end",
                }}
              >
                <div
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{
                    width: isMobile ? "100%" : "46%",
                    position: "relative",
                  }}
                >
                  <EducationCard
                    item={item}
                    index={index}
                    total={educationData.length}
                    scrollYProgress={scrollYProgress}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
