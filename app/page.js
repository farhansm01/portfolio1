"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useLang } from "@/context/LanguageContext";

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
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          © {new Date().getFullYear()} Farhan Sadiq. {t.footer.rights}
        </p>
      </footer>
    </main>
  );
}
