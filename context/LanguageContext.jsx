"use client";

import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      roles: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Problem Solver",
        "Programmer",
      ],
      bio: "CSE student at AIUB, Bangladesh — building full stack web apps with the MERN stack and Next.js. Passionate about clean code, good UX, and turning ideas into real products.",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
    about: {
      eyebrow: "Get to know me",
      heading: "About",
      headingHighlight: "Me",
      bio1: "I'm Farhan Sadiq — a Full Stack Developer and CSE student at AIUB, Bangladesh. I build web applications with the MERN stack and Next.js, with a focus on clean architecture, real usability, and solutions that create actual value.",
      bio2: "I am interested in how technology and ideas come together to build products people rely on — and I enjoy creating visually polished interfaces that turn concepts into real interactive experiences.",
      stats: {
        universityLabel: "University",
        university: "AIUB, Bangladesh",
        degreeLabel: "Degree",
        degree: "B.Sc. in Computer Science",
        stackLabel: "Stack",
        stack: "MERN + Next.js",
        statusLabel: "Status",
        status: "Open to Opportunities",
      },
      cards: {
        journey: {
          title: "The Journey",
          text: "Started in 2020 with HTML and CSS. Kept pushing — JavaScript, React, now full MERN stack. The path was not straight but every restart taught me something the first attempt could not.",
        },
        mindset: {
          title: "The Mindset",
          text: "I am drawn to problems worth solving. I consume business content, study how products grow, and think about impact before implementation. Code is the tool — the idea is the real work.",
        },
        beyond: {
          title: "Beyond Code",
          text: "History documentaries, business rabbit holes, and asking why did this succeed? I am fascinated by how things — companies, ideas, movements — go from zero to something real.",
        },
      },
      coreStack: "Core Stack",
    },
    skills: {
      eyebrow: "What I work with",
      heading: "My",
      headingHighlight: "Skills",
      categories: {
        frontend: { title: "Frontend", tag: "UI & Interaction" },
        backend: { title: "Backend", tag: "Server & Data" },
        tools: { title: "Tools", tag: "Workflow & Deployment" },
      },
    },
    education: {
      eyebrow: "My Background",
      heading: "Education &",
      headingHighlight: "Training",
      items: {
        undergraduate: {
          type: "Undergraduate",
          title: "B.Sc. in Computer Science & Engineering",
          institution: "American International University — Bangladesh (AIUB)",
          period: "2021 — Present",
          location: "Dhaka, Bangladesh",
          description:
            "Studying core computer science fundamentals including data structures, algorithms, software engineering, and database systems. Currently in the 8th semester with a strong focus on full stack web development.",
        },
        bootcamp: {
          type: "Bootcamp",
          title: "Complete Web Development",
          institution: "Programming Hero",
          period: "2024 — Present",
          statusLabel: "In Progress",
          description:
            "Intensive full stack bootcamp covering React, Next.js, Node.js, Express, and MongoDB with hands-on projects and real-world assignments.",
        },
        hsc: {
          type: "Higher Secondary",
          title: "Science — HSC",
          institution: "Ispahani College, Chittagong",
          period: "Completed 2022",
          location: "Chittagong, Bangladesh",
        },
        ssc: {
          type: "Secondary",
          title: "Science — SSC",
          institution: "Hazi Mohammad Mohsin Govt. High School, Chittagong",
          period: "Completed 2020",
          location: "Chittagong, Bangladesh",
        },
      },
    },
    projects: {
      eyebrow: "What I have built",
      heading: "Featured",
      headingHighlight: "Projects",
      liveDemo: "Live Demo",
      github: "GitHub",
      viewDetails: "View Details",
      items: {
        openshelf: {
          tagline: "Online Book Borrowing Platform",
          description:
            "A full stack book borrowing platform where users can browse, borrow, and manage books online. Features Google OAuth, protected routes, and a clean library management system.",
        },
        dragonnews: {
          tagline: "Category-Based News Platform",
          description:
            "A news portal with category-based browsing, private routes, and OAuth login. Features a React Marquee ticker, dynamic category sidebar, and smooth authentication flow.",
        },
        bookvibe: {
          tagline: "Smart Book Library App",
          description:
            "A book library app with Read List and Wishlist functionality powered by localStorage. Built with React 19, React Router v7, and Recharts for reading analytics.",
        },
        keenkeeper: {
          tagline: "Relationship Management App",
          description:
            "A personal relationship tracker with interaction timeline, analytics dashboard, and friend management. Uses Context API for state and Recharts for visual analytics.",
        },
      },
    },
    contact: {
      eyebrow: "Get In Touch",
      heading: "Contact",
      headingHighlight: "Me",
      subtitle: "Let's work together",
      body: "I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open!",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        messageLabel: "Message",
        messagePlaceholder: "What's on your mind?",
        send: "Send Message",
        sending: "Sending...",
        success: "✓ Message sent! I'll get back to you soon.",
        error: "✕ Something went wrong. Please try again.",
      },
    },
    footer: { rights: "All rights reserved." },
  },

  de: {
    nav: {
      home: "Start",
      about: "Über mich",
      skills: "Fähigkeiten",
      education: "Ausbildung",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      available: "Offen für Stellenangebote",
      greeting: "Hallo, ich bin",
      roles: [
        "Full Stack Entwickler",
        "MERN Stack Entwickler",
        "Problemlöser",
        "Programmierer",
      ],
      bio: "Informatikstudent an der AIUB, Bangladesch — entwickle Full-Stack-Webanwendungen mit dem MERN-Stack und Next.js. Leidenschaftlich für sauberen Code, gute UX und die Umsetzung von Ideen in echte Produkte.",
      downloadCV: "Lebenslauf herunterladen",
      contactMe: "Kontakt aufnehmen",
    },
    about: {
      eyebrow: "Lern mich kennen",
      heading: "Über",
      headingHighlight: "Mich",
      bio1: "Ich bin Farhan Sadiq — ein Full-Stack-Entwickler und Informatikstudent an der AIUB, Bangladesch. Ich entwickle Webanwendungen mit dem MERN-Stack und Next.js, mit Fokus auf saubere Architektur, echte Benutzerfreundlichkeit und Lösungen, die echten Mehrwert schaffen.",
      bio2: "Mich fasziniert, wie Technologie und Ideen zusammenkommen, um Produkte zu schaffen, auf die Menschen sich verlassen — und ich genieße es, visuell ansprechende Interfaces zu erstellen.",
      stats: {
        universityLabel: "Universität",
        university: "AIUB, Bangladesch",
        degreeLabel: "Abschluss",
        degree: "B.Sc. Informatik",
        stackLabel: "Stack",
        stack: "MERN + Next.js",
        statusLabel: "Status",
        status: "Offen für Angebote",
      },
      cards: {
        journey: {
          title: "Der Werdegang",
          text: "Begann 2020 mit HTML und CSS. Immer weitergemacht — JavaScript, React, jetzt der volle MERN-Stack. Der Weg war nicht geradlinig, aber jeder Neustart hat mich etwas gelehrt, was der erste Versuch nicht konnte.",
        },
        mindset: {
          title: "Die Denkweise",
          text: "Ich werde von Problemen angezogen, die es wert sind, gelöst zu werden. Ich konsumiere Business-Inhalte, studiere wie Produkte wachsen und denke über Impact nach, bevor ich implementiere.",
        },
        beyond: {
          title: "Jenseits des Codes",
          text: "Geschichtsdokumentationen, Business-Tiefgänge und die Frage: Warum war das erfolgreich? Mich fasziniert, wie Dinge — Unternehmen, Ideen, Bewegungen — von null zu etwas Realem werden.",
        },
      },
      coreStack: "Kern-Stack",
    },
    skills: {
      eyebrow: "Womit ich arbeite",
      heading: "Meine",
      headingHighlight: "Fähigkeiten",
      categories: {
        frontend: { title: "Frontend", tag: "UI & Interaktion" },
        backend: { title: "Backend", tag: "Server & Daten" },
        tools: { title: "Tools", tag: "Workflow & Deployment" },
      },
    },
    education: {
      eyebrow: "Mein Hintergrund",
      heading: "Ausbildung &",
      headingHighlight: "Weiterbildung",
      items: {
        undergraduate: {
          type: "Bachelor",
          title: "B.Sc. Informatik & Ingenieurwesen",
          institution: "American International University — Bangladesh (AIUB)",
          period: "2021 — Heute",
          location: "Dhaka, Bangladesch",
          description:
            "Studium der Grundlagen der Informatik, einschließlich Datenstrukturen, Algorithmen, Software-Engineering und Datenbanksysteme. Aktuell im 8. Semester mit starkem Fokus auf Full-Stack-Webentwicklung.",
        },
        bootcamp: {
          type: "Bootcamp",
          title: "Komplette Webentwicklung",
          institution: "Programming Hero",
          period: "2024 — Heute",
          statusLabel: "In Bearbeitung",
          description:
            "Intensives Full-Stack-Bootcamp mit React, Next.js, Node.js, Express und MongoDB — praxisnahe Projekte und reale Aufgaben.",
        },
        hsc: {
          type: "Abitur",
          title: "Naturwissenschaften — HSC",
          institution: "Ispahani College, Chittagong",
          period: "Abgeschlossen 2022",
          location: "Chittagong, Bangladesch",
        },
        ssc: {
          type: "Mittlere Reife",
          title: "Naturwissenschaften — SSC",
          institution: "Hazi Mohammad Mohsin Govt. High School, Chittagong",
          period: "Abgeschlossen 2020",
          location: "Chittagong, Bangladesch",
        },
      },
    },
    projects: {
      eyebrow: "Was ich gebaut habe",
      heading: "Ausgewählte",
      headingHighlight: "Projekte",
      liveDemo: "Live-Demo",
      github: "GitHub",
      viewDetails: "Details anzeigen",
      items: {
        openshelf: {
          tagline: "Online-Buchausleihplattform",
          description:
            "Eine Full-Stack-Buchausleihplattform, auf der Nutzer Bücher online durchsuchen, ausleihen und verwalten können. Mit Google OAuth, geschützten Routen und einem übersichtlichen Bibliotheksverwaltungssystem.",
        },
        dragonnews: {
          tagline: "Kategoriebasierte Nachrichtenplattform",
          description:
            "Ein Nachrichtenportal mit kategoriebasiertem Browsen, privaten Routen und OAuth-Login. Mit React-Marquee-Ticker, dynamischer Kategorie-Sidebar und reibungslosem Authentifizierungsfluss.",
        },
        bookvibe: {
          tagline: "Smarte Buchbibliotheks-App",
          description:
            "Eine Buchbibliotheks-App mit Leselisten- und Wunschlisten-Funktion über localStorage. Gebaut mit React 19, React Router v7 und Recharts für Lese-Analysen.",
        },
        keenkeeper: {
          tagline: "Beziehungsmanagement-App",
          description:
            "Ein persönlicher Beziehungs-Tracker mit Interaktions-Timeline, Analyse-Dashboard und Freundschaftsverwaltung. Nutzt Context API für den State und Recharts für visuelle Analysen.",
        },
      },
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      heading: "Kontakt",
      headingHighlight: "aufnehmen",
      subtitle: "Lass uns zusammenarbeiten",
      body: "Ich bin derzeit offen für neue Möglichkeiten. Ob du ein Projekt im Sinn hast, eine Frage hast oder einfach Hallo sagen möchtest — mein Posteingang ist immer offen!",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Dein Name",
        emailLabel: "E-Mail",
        emailPlaceholder: "deine@email.de",
        messageLabel: "Nachricht",
        messagePlaceholder: "Was liegt dir auf dem Herzen?",
        send: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "✓ Nachricht gesendet! Ich melde mich bald.",
        error: "✕ Etwas ist schiefgelaufen. Bitte versuche es erneut.",
      },
    },
    footer: { rights: "Alle Rechte vorbehalten." },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
