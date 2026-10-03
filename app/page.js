"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import { HiCog6Tooth } from "react-icons/hi2";

export default function Home() {
  const { t } = useLang();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <footer
        style={{
          borderTop: "1px solid var(--glass-border)",
          padding: "24px 20px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Farhan Sadiq. {t.footer.rights}
        </p>

        <Link
          href="/admin"
          title="Admin Dashboard"
          aria-label="Admin Dashboard"
          style={{
            position: "absolute",
            right: "20px",
            opacity: 0.2,
            transition: "all 0.3s ease",
            color: "var(--text-muted)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            borderRadius: "50%",
            fontSize: "1rem",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.color = "#8b5cf6";
            e.currentTarget.style.transform = "scale(1.15) rotate(45deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.2";
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          }}
        >
          <HiCog6Tooth />
        </Link>
      </footer>
    </main>
  );
}
