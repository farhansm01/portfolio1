import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
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
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 20px",
          textAlign: "center",
        }}
      >
        <p
          className="text-white/30"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem" }}
        >
          © {new Date().getFullYear()} Farhan Sadiq. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
