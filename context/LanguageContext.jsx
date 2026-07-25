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
      headingHighlight: "Journey",
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
      viewAll: "View All Projects",
      allProjectsEyebrow: "Portfolio Showcase",
      allProjectsHeading: "All",
      allProjectsHeadingHighlight: "Projects",
      liveDemo: "Live Demo",
      github: "GitHub",
      viewDetails: "View Details",
      backToProjects: "Back to Projects",
      aboutProject: "About the Project",
      whyThisProject: "Why This Project?",
      purposeLabel: "Purpose & Problem Solved",
      challengesFaced: "Challenges Faced",
      futurePlans: "Future Plans",
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
        resellhub: {
          tagline: "Full-Stack Second-Hand Marketplace",
          description:
            "A full stack marketplace for buying and selling second-hand items, with Stripe-powered checkout, secure auth, and a clean listing management system.",
        },
        drift: {
          tagline: "Car Rental Listing Platform",
          description:
            "A car rental listing platform built under a tight deadline, with JWT-secured server-to-server calls and a metallic, glassmorphic UI.",
        },
        nestly: {
          tagline: "AI-Powered Real Estate Platform",
          description:
            "A full stack real estate platform where users can discover, list, and manage luxury properties, powered by Google Gemini for smart recommendations, document risk auditing, and a live chat assistant.",
        },
        docappoint: {
          tagline: "Doctor Appointment Booking Platform",
          description:
            "A full stack doctor appointment platform where patients can search verified doctors, view detailed profiles, and book appointments in a few clicks, with a personal dashboard to manage bookings.",
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
      headingHighlight: "Werdegang",
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
      viewAll: "Alle Projekte anzeigen",
      allProjectsEyebrow: "Portfolio-Galerie",
      allProjectsHeading: "Alle",
      allProjectsHeadingHighlight: "Projekte",
      liveDemo: "Live-Demo",
      github: "GitHub",
      viewDetails: "Details anzeigen",
      backToProjects: "Zurück zu Projekten",
      aboutProject: "Über das Projekt",
      whyThisProject: "Warum dieses Projekt?",
      purposeLabel: "Zweck & Gelöstes Problem",
      challengesFaced: "Herausforderungen",
      futurePlans: "Zukünftige Pläne",
      items: {
        openshelf: {
          tagline: "Online-Buchausleihplattform",
          description:
            "Eine Full-Stack-Buchausleihplattform, auf der Nutzer Bücher online durchsuchen, ausleihen und verwalten können. Mit Google OAuth, geschützten Routen und einem übersichtlichen Bibliotheksverwaltungssystem.",
          challenges: [
            "Die Integration von BetterAuth war die größte Hürde — Social Login mit Google schlug aufgrund von Callback-URL-Fehlkonfigurationen und OAuth-Berechtigungsproblemen fehl.",
            "Die Verwaltung geschützter Routen und Sitzungspersistenz über Server- und Client-Komponenten in Next.js hinweg erforderte eine durchdachte Architektur.",
            "Die Ausleihlogik für Bücher — Handhabung von Verfügbarkeitsstatus, Fälligkeitsdaten und Verhinderung von Mehrfachausleihen."
          ],
          future: [
            "Erstellung eines Admin-Dashboards zum Hinzufügen, Bearbeiten und Entfernen von Büchern sowie zur Nutzerverwaltung.",
            "E-Mail-Benachrichtigungen für Fälligkeitserinnerungen und Ausleihbestätigungen.",
            "Buchempfehlungssystem basierend auf der Lesehistorie und Präferenzen.",
            "Bewertungs- und Rezensionssystem für Bücher."
          ]
        },
        dragonnews: {
          tagline: "Kategoriebasierte Nachrichtenplattform",
          description:
            "Ein Nachrichtenportal mit kategoriebasiertem Browsen, privaten Routen und OAuth-Login. Mit React-Marquee-Ticker, dynamischer Kategorie-Sidebar und reibungslosem Authentifizierungsfluss.",
          challenges: [
            "Lernkurve bei der ersten Verwendung von BetterAuth für Authentifizierungsabläufe und geschützte Routen.",
            "Synchronisierung der Kategorie-Sidebar mit dem News-Feed ohne unnötige Re-Renders.",
            "Reaktionsschneller React Marquee-Ticker über verschiedene Bildschirmgrößen hinweg."
          ],
          future: [
            "Multi-Rollen-Authentifizierungssystem (Admin, Redakteure, normale Leser).",
            "Rich-Text-Editor für die Erstellung von Artikeln.",
            "Suchfunktionalität mit Filtern nach Kategorie, Datum und Autor."
          ]
        },
        bookvibe: {
          tagline: "Smarte Buchbibliotheks-App",
          description:
            "Eine Buchbibliotheks-App mit Leselisten- und Wunschlisten-Funktion über localStorage. Gebaut mit React 19, React Router v7 und Recharts für Lese-Analysen.",
          challenges: [
            "Erste Schritte mit React Router v7 und neuen Mustern beim Laden von Daten.",
            "Verwaltung des localStorage-Zustands über mehrere Komponenten hinweg ohne globale State-Bibliothek.",
            "Datenumwandlung für Recharts-Leseanalysen."
          ],
          future: [
            "Anbindung an ein Backend mit Nutzerkonten für geräteübergreifende Speicherung.",
            "Integration der Google Books API zur Buchsuche.",
            "Fortschrittstracking für gelesene Seiten."
          ]
        },
        keenkeeper: {
          tagline: "Beziehungsmanagement-App",
          description:
            "Ein persönlicher Beziehungs-Tracker mit Interaktions-Timeline, Analyse-Dashboard und Freundschaftsverwaltung. Nutzt Context API für den State und Recharts für visuelle Analysen.",
          challenges: [
            "Komplexes Datenmodell für Interaktions-Timelines einzelner Kontakte.",
            "Skalierung des Context API bei wachsender Anwendungsgröße.",
            "Aggregieren von Interaktionsdaten für das Recharts-Dashboard."
          ],
          future: [
            "Direkte Kommunikationsfunktionen über WhatsApp/Twilio-API.",
            "Erinnerungen und Benachrichtigungen für Kontaktaufnahmen.",
            "Kontakt-Import aus dem Telefonbuch oder Google Contacts."
          ]
        },
        resellhub: {
          tagline: "Full-Stack Second-Hand-Marktplatz",
          description:
            "Ein Full-Stack-Marktplatz zum Kaufen und Verkaufen von gebrauchten Artikeln, mit Stripe-gestütztem Checkout, sicherer Authentifizierung und einem übersichtlichen Angebotsverwaltungssystem.",
          challenges: [
            "Wechsel von HeroUI zu purem Tailwind mitten im Projekt zur Vermeidung von Styling-Konflikten.",
            "Stripe-Integration für den Checkout-Ablauf, Payment Intents und Webhooks.",
            "Verbindung zu MongoDB Atlas über Nicht-SRV-Verbindungszeichenfolgen bei ISP-DNS-Sperren."
          ],
          future: [
            "Bewertungs- und Rezensionssystem für Käufer und Verkäufer.",
            "In-App-Nachrichtensystem zur Preisverhandlung.",
            "Bestellverfolgung und Versandstatus-Updates.",
            "Admin-Dashboard für Moderation und Konfliktlösung."
          ]
        },
        drift: {
          tagline: "Autovermietungs-Plattform",
          description:
            "Eine Autovermietungsplattform, entwickelt unter engem Zeitdruck, mit JWT-gesicherten Server-zu-Server-Aufrufen und einer metallischen, glasartigen Oberfläche.",
          challenges: [
            "Fixierung der BetterAuth-Version wegen Breaking Changes in Kysely unter Zeitdruck.",
            "Einrichtung der JWT-Verifizierung zwischen Next.js-Frontend und Express-Backend über ein JWKS-Endpunkt.",
            "Entwicklung des metallisch-glasartigen UI-Designs mit Tailwind."
          ],
          future: [
            "Buchungskalender für Echtzeit-Verfügbarkeit der Fahrzeuge.",
            "Bewertungssystem für Mieterfahrungen.",
            "Zahlungsintegration für Kautionen und Mietbeträge.",
            "Vermieter-Dashboard zur Verwaltung von Inseraten und Einnahmen."
          ]
        },
        nestly: {
          tagline: "KI-gestützte Immobilienplattform",
          description:
            "Eine Full-Stack-Immobilienplattform, auf der Nutzer Luxusimmobilien entdecken, inserieren und verwalten können, angetrieben von Google Gemini für intelligente Empfehlungen, Dokumentenrisikoprüfung und einen Live-Chat-Assistenten.",
          purpose:
            "Revolutioniert den Kauf von Luxusimmobilien durch die Kombination von KI-Dokumentenrisikoprüfung, Gemini-gestützten Immobilienempfehlungen und sofortiger Stripe-Immobilienreservierung.",
          challenges: [
            "Prompt-Engineering für Google Gemini für 3 verschiedene KI-Features (Empfehlungen, Dokumentenprüfung, Live-Chat).",
            "Rollenbasierte Dashboards (Käufer, Verkäufer, Admins) mit unterschiedlichen Rechten.",
            "Synchronisierung von Stripe-Zahlungsstatus, Inseratstatus und Benutzerrollen."
          ],
          future: [
            "Gespeicherte Suchen mit E-Mail-Benachrichtigungen bei neuen Angeboten.",
            "Hypotheken- und Finanzierungsrechner auf Immobilien-Detailseiten.",
            "Virtuelle 360°-Rundgänge für Immobilien.",
            "Erweiterung des KI-Assistenten zur direkten Besichtigungsterminbuchung."
          ]
        },
        docappoint: {
          tagline: "Arzt-Terminbuchungsplattform",
          description:
            "Eine Full-Stack-Arztterminplattform, auf der Patienten verifizierte Ärzte suchen, detaillierte Profile einsehen und Termine mit wenigen Klicks buchen können, inklusive persönlichem Dashboard zur Terminverwaltung.",
          purpose:
            "Beseitigt lange Wartezeiten in Praxen und Telefonketten durch ein einfaches Online-System zur Suche nach verifizierten Fachärzten mit Echtzeit-Verfügbarkeit.",
          challenges: [
            "Die Arztsuche auf der Übersichtsseite so zu bauen, dass große Listen clientseitig gefiltert werden und die Benutzeroberfläche sofort reagiert.",
            "Das persönliche Dashboard so zu verdrahten, dass Terminaktualisierungen und Stornierungen sofort in der Benutzeroberfläche mit Toast-Feedback reflektieren, ohne dass ein vollständiger Seitenaufruf erforderlich ist.",
            "Die Direktaktualisierung von Profilfoto und Namen über das Dashboard erforderte eine präzise Statussynchronisierung mit BetterAuth-Sitzungsdaten."
          ],
          future: [
            "Arzt-Dashboard zur eigenständigen Verwaltung von Verfügbarkeiten und Terminen.",
            "Terminerinnerungen per E-Mail oder SMS vor dem geplanten Zeitpunkt.",
            "Bewertungen und Rezensionen für Ärzte basierend auf abgeschlossenen Terminen.",
            "Zahlungsintegration für Beratungsgebühren direkt bei der Buchung."
          ]
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