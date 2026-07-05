"use client";

import { useLang } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import EducationCard from "./EducationCard";

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
  const { t } = useLang();
  const e = t.education.items;

  const educationData = [
    {
      id: 1,
      type: e.undergraduate.type,
      typeColor: "#8b5cf6",
      typeBg: "rgba(139,92,246,0.1)",
      typeBorder: "rgba(139,92,246,0.25)",
      accentColor: "#8b5cf6",
      title: e.undergraduate.title,
      institution: e.undergraduate.institution,
      institutionColor: "#8b5cf6",
      period: e.undergraduate.period,
      location: e.undergraduate.location,
      description: e.undergraduate.description,
      status: null,
      icons: null,
    },
    {
      id: 2,
      type: e.bootcamp.type,
      typeColor: "#22d3ee",
      typeBg: "rgba(34,211,238,0.1)",
      typeBorder: "rgba(34,211,238,0.25)",
      accentColor: "#22d3ee",
      title: e.bootcamp.title,
      institution: e.bootcamp.institution,
      institutionColor: "#22d3ee",
      period: e.bootcamp.period,
      location: null,
      description: e.bootcamp.description,
      status: { label: e.bootcamp.statusLabel, color: "#4ade80" },
      icons: [
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiNextdotjs, color: "#6d28d9" },
        { icon: SiNodedotjs, color: "#68A063" },
        { icon: SiMongodb, color: "#4DB33D" },
      ],
    },
    {
      id: 3,
      type: e.hsc.type,
      typeColor: "#f472b6",
      typeBg: "rgba(244,114,182,0.1)",
      typeBorder: "rgba(244,114,182,0.25)",
      accentColor: "#f472b6",
      title: e.hsc.title,
      institution: e.hsc.institution,
      institutionColor: "#f472b6",
      period: e.hsc.period,
      location: e.hsc.location,
      description: null,
      status: null,
      icons: null,
    },
    {
      id: 4,
      type: e.ssc.type,
      typeColor: "#fb923c",
      typeBg: "rgba(251,146,60,0.1)",
      typeBorder: "rgba(251,146,60,0.25)",
      accentColor: "#fb923c",
      title: e.ssc.title,
      institution: e.ssc.institution,
      institutionColor: "#fb923c",
      period: e.ssc.period,
      location: e.ssc.location,
      description: null,
      status: null,
      icons: null,
    },
  ];

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const svgPathRef = useRef(null);
  const [pathD, setPathD] = useState("");
  const [svgDims, setSvgDims] = useState({ w: 0, h: 0 });
  const [dots, setDots] = useState([]);
  const [cardBoxes, setCardBoxes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
          innerX: isLeft ? r.right - cr.left : r.left - cr.left,
          centerY: r.top - cr.top + r.height / 2,
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
      let d = `M ${boxes[0].innerX} ${boxes[0].centerY}`;
      for (let i = 1; i < boxes.length; i++) {
        const prev = boxes[i - 1],
          curr = boxes[i];
        const wallX = curr.innerX > prev.innerX ? W * 0.72 : W * 0.28;
        d += ` L ${wallX} ${prev.centerY} L ${wallX} ${curr.centerY} L ${curr.innerX} ${curr.centerY}`;
      }
      setPathD(d);
    }
    const timer = setTimeout(measure, 120);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [isMobile]);

  return (
    <section id="education" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
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
            {t.education.eyebrow}
          </span>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-base)",
            }}
          >
            {t.education.heading}{" "}
            <span className="gradient-text">
              {t.education.headingHighlight}
            </span>
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
