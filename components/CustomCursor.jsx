"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const sparkles = [];
    const colors = ["#ffffff", "#f8fafc", "#e2e8f0", "#cbd5e1", "rgba(255, 255, 255, 0.75)"];
    const mouse = { x: -100, y: -100, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      const target = e.target;
      const hoverState =
        target.closest(
          "a, button, input, textarea, select, .glass-card, [role='button']",
        ) !== null;
      setIsHovered(hoverState);

      // Spawn glitter sparkles on mouse movement
      const count = hoverState ? 3 : 1;
      for (let i = 0; i < count; i++) {
        if (sparkles.length < 35) {
          sparkles.push({
            x: mouse.x + (Math.random() - 0.5) * (hoverState ? 20 : 10),
            y: mouse.y + (Math.random() - 0.5) * (hoverState ? 20 : 10),
            size: Math.random() * 2.8 + (hoverState ? 2.5 : 1.5),
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0.9,
            decay: Math.random() * 0.03 + 0.02,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7 - 0.2,
          });
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Draw a shiny glowing dot
    function drawDot(ctx, cx, cy, radius, color, alpha) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.shadowColor = "rgba(255, 255, 255, 0.85)";
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        drawDot(ctx, s.x, s.y, s.size * 0.7, s.color, s.alpha);
      }

      // Draw Main Cursor Glowing Dot
      if (mouse.active) {
        const mainRadius = isHovered ? 6 : 4;
        drawDot(ctx, mouse.x, mouse.y, mainRadius, "#ffffff", 0.95);
        drawDot(ctx, mouse.x, mouse.y, mainRadius * 1.8, "rgba(139, 92, 246, 0.35)", 0.5);
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isHovered]);

  if (isTouch) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
