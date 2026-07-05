"use client";

import { useLang } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "education",
      "projects",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden transition-all duration-500"
        style={{
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled ? "var(--navbar-bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--glass-border)" : "none",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          boxShadow: scrolled ? "var(--navbar-shadow)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            width: "100%",
            padding: "0 20px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.a
            onClick={() => scrollTo("#home")}
            className="cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="text-xl font-bold gradient-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FS
            </span>
            <span
              className="text-xl font-bold ml-1"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-base)",
              }}
            >
              .dev
            </span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: isActive
                        ? "var(--text-base)"
                        : "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "var(--text-subtle)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "var(--nav-active-bg)",
                          border: "1px solid var(--nav-active-border)",
                          boxShadow: "0 0 12px rgba(139,92,246,0.15)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right: language + theme + hamburger */}
          <div className="flex items-center gap-2">
            {mounted && (
              <motion.button
                onClick={() => setLang(lang === "en" ? "de" : "en")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-9 px-3 rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="Toggle language"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "var(--glass-shadow)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  gap: "5px",
                  minWidth: "64px",
                }}
              >
                <span
                  style={{
                    opacity: lang === "en" ? 1 : 0.4,
                    transition: "opacity 0.2s",
                    fontSize: "1rem",
                  }}
                >
                  🇬🇧
                </span>
                <span
                  style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}
                >
                  /
                </span>
                <span
                  style={{
                    opacity: lang === "de" ? 1 : 0.4,
                    transition: "opacity 0.2s",
                    fontSize: "1rem",
                  }}
                >
                  🇩🇪
                </span>
              </motion.button>
            )}

            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="Toggle theme"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "var(--glass-shadow)",
                }}
              >
                {theme === "dark" ? (
                  <HiSun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <HiMoon className="w-4 h-4 text-violet-500" />
                )}
              </motion.button>
            )}

            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
              aria-label="Toggle menu"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "var(--glass-shadow)",
                color: "var(--text-subtle)",
              }}
            >
              {menuOpen ? (
                <HiXMark className="w-5 h-5" />
              ) : (
                <HiBars3 className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl p-4 md:hidden"
            style={{
              maxWidth: "calc(100vw - 32px)",
              boxSizing: "border-box",
              background: "var(--navbar-bg)",
              border: "1px solid var(--glass-border)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "var(--navbar-shadow)",
            }}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = active === link.href.replace("#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: isActive
                          ? "var(--text-base)"
                          : "var(--text-muted)",
                        background: isActive
                          ? "var(--nav-active-bg)"
                          : "transparent",
                        border: isActive
                          ? "1px solid var(--nav-active-border)"
                          : "1px solid transparent",
                      }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
