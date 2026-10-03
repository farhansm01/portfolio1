"use client";

import { useLang } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";

function FlagGB() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 30" style={{ borderRadius: "3px", overflow: "hidden", display: "inline-block", verticalAlign: "middle" }}>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagDE() {
  return (
    <svg width="20" height="14" viewBox="0 0 5 3" style={{ borderRadius: "3px", overflow: "hidden", display: "inline-block", verticalAlign: "middle" }}>
      <rect width="5" height="1" y="0" fill="#000000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const router = useRouter();

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/${href}`);
    } else {
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4"
        style={{
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
        }}
      >
        <div
          style={{
            maxWidth: scrolled ? "960px" : "1152px",
            margin: "0 auto",
            width: "100%",
            padding: scrolled ? "8px 24px" : "0 20px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: scrolled ? "9999px" : "0px",
            background: scrolled ? "var(--navbar-bg)" : "transparent",
            border: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
            backdropFilter: scrolled ? "blur(24px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
            boxShadow: scrolled ? "var(--navbar-shadow), 0 0 20px rgba(139,92,246,0.12)" : "none",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
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
          <ul className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="relative px-4.5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center min-w-[80px]"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: isActive
                        ? "var(--text-base)"
                        : "var(--text-muted)",
                      fontWeight: isActive ? "600" : "500",
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
                          boxShadow: "0 4px 16px rgba(139,92,246,0.18)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 px-1">{link.label}</span>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle language"
                style={{
                  height: "36px",
                  padding: "0 14px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "var(--glass-shadow)",
                  color: "var(--text-base)",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={lang}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      lineHeight: 1,
                    }}
                  >
                    {lang === "en" ? (
                      <>
                        <FlagDE />
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "var(--text-subtle)",
                            letterSpacing: "0.02em",
                          }}
                        >
                          DE
                        </span>
                      </>
                    ) : (
                      <>
                        <FlagGB />
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            color: "var(--text-subtle)",
                            letterSpacing: "0.02em",
                          }}
                        >
                          EN
                        </span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
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
