import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "projects.json");

export const initialSeed = [
  {
    slug: "nestly",
    number: "01",
    name: "Nestly",
    color: "#eab308",
    image: "/projects/nestly.png",
    live: "https://nestly-client-silk.vercel.app/",
    github: "https://github.com/farhansm01/nestly-client",
    stack: ["Next.js 16", "BetterAuth", "Google Gemini", "Stripe", "MongoDB"],
    en: {
      tagline: "AI-Powered Real Estate Platform",
      description:
        "A full stack real estate platform where users can discover, list, and manage luxury properties, powered by Google Gemini for smart recommendations, document risk auditing, and a live chat assistant.",
      purpose:
        "Revolutionizes luxury property discovery by combining AI document risk auditing, Gemini-driven real estate recommendations, and interactive property management.",
      challenges: [
        "Integrating Google Gemini for three different AI features — recommendations, document analysis, and a context-aware chat assistant — meant carefully engineering prompts so each stayed accurate and useful.",
        "Designing a unified user dashboard where property seekers and listers can manage favorites, property listings, and AI chats seamlessly in one place.",
        "Configuring BetterAuth session management alongside MongoDB to ensure smooth authentication and profile management across server and client components.",
      ],
      future: [
        "Add a saved-search feature with email alerts when new matching properties are listed.",
        "Integrate a mortgage/affordability calculator directly into property detail pages.",
        "Add virtual tour support with embedded 360° property walkthroughs.",
        "Expand the AI chat assistant to handle scheduling property viewings directly.",
      ],
    },
    de: {
      tagline: "KI-gestützte Immobilienplattform",
      description:
        "Eine Full-Stack-Immobilienplattform, auf der Nutzer Luxusimmobilien entdecken, inserieren und verwalten können, angetrieben von Google Gemini für intelligente Empfehlungen, Dokumentenrisikoprüfung und einen Live-Chat-Assistenten.",
      purpose:
        "Revolutioniert das Entdecken von Luxusimmobilien durch die Kombination von KI-Dokumentenrisikoprüfung, Gemini-gestützten Empfehlungen und interaktiver Immobilienverwaltung.",
      challenges: [
        "Prompt-Engineering für Google Gemini für 3 verschiedene KI-Features (Empfehlungen, Dokumentenprüfung, Live-Chat).",
        "Entwicklung eines einheitlichen Nutzer-Dashboards zur einfachen Verwaltung von Favoriten, Inseraten und KI-Chats.",
        "Konfiguration von BetterAuth-Sitzungsdaten zusammen mit MongoDB für reibungslose Authentifizierung über Server- und Client-Komponenten.",
      ],
      future: [
        "Gespeicherte Suchen mit E-Mail-Benachrichtigungen bei neuen Angeboten.",
        "Hypotheken- und Finanzierungsrechner auf Immobilien-Detailseiten.",
        "Virtuelle 360°-Rundgänge für Immobilien.",
        "Erweiterung des KI-Assistenten zur direkten Besichtigungsterminbuchung.",
      ],
    },
  },
  {
    slug: "resell-hub",
    number: "02",
    name: "ResellHub",
    color: "#34d399",
    image: "/projects/resellhub_new.png",
    live: "https://resell-hub-client-xi.vercel.app/",
    github: "https://github.com/farhansm01/resell-hub-client",
    stack: ["Next.js", "BetterAuth", "Stripe", "MongoDB", "Tailwind"],
    en: {
      tagline: "Full-Stack Second-Hand Marketplace",
      description:
        "A full stack marketplace for buying and selling second-hand items, with Stripe-powered checkout, secure auth, and a clean listing management system.",
      purpose:
        "Creates a safe, simple environment for buying and selling pre-owned items online, featuring secure Stripe checkout, verified listings, and easy item publishing.",
      challenges: [
        "Switching from HeroUI to pure Tailwind mid-project after running into styling conflicts meant reworking several components from scratch to keep the UI consistent.",
        "Integrating Stripe for the checkout flow — handling payment intents, webhooks, and keeping order status in sync with payment state — took careful testing to get reliable.",
        "Connecting to MongoDB Atlas over a non-SRV connection string, to work around ISP DNS blocking, required extra configuration that isn't well documented.",
      ],
      future: [
        "Add a ratings and reviews system for buyers and sellers to build trust in the marketplace.",
        "Implement a messaging system so buyers and sellers can negotiate directly within the platform.",
        "Add order tracking and shipping status updates.",
        "Build an admin dashboard for moderating listings and managing disputes.",
      ],
    },
    de: {
      tagline: "Full-Stack Second-Hand-Marktplatz",
      description:
        "Ein Full-Stack-Marktplatz zum Kaufen und Verkaufen von gebrauchten Artikeln, mit Stripe-gestütztem Checkout, sicherer Authentifizierung und einem übersichtlichen Angebotsverwaltungssystem.",
      purpose:
        "Erstellt eine sichere und einfache Umgebung für den Online-Kauf und -Verkauf gebrauchter Artikel.",
      challenges: [
        "Wechsel von HeroUI zu purem Tailwind mitten im Projekt zur Vermeidung von Styling-Konflikten.",
        "Stripe-Integration für den Checkout-Ablauf, Payment Intents und Webhooks.",
        "Verbindung zu MongoDB Atlas über Nicht-SRV-Verbindungszeichenfolgen bei ISP-DNS-Sperren.",
      ],
      future: [
        "Bewertungs- und Rezensionssystem für Käufer und Verkäufer.",
        "In-App-Nachrichtensystem zur Preisverhandlung.",
        "Bestellverfolgung und Versandstatus-Updates.",
        "Admin-Dashboard für Moderation und Konfliktlösung.",
      ],
    },
  },
  {
    slug: "drift",
    number: "03",
    name: "Drift",
    color: "#94a3b8",
    image: "/projects/drift.png",
    live: "https://drift-client-alpha.vercel.app/",
    github: "https://github.com/farhansm01/drift-client",
    stack: ["Next.js", "Express", "BetterAuth", "MongoDB", "TypeScript"],
    en: {
      tagline: "Second-Hand Car Marketplace",
      description:
        "A full stack marketplace for buying and selling second-hand cars built under a tight deadline, with JWT-secured server-to-server calls and a metallic, glassmorphic UI.",
      purpose:
        "Provides a high-performance marketplace connecting car sellers and buyers with secure JWT server-to-server authentication and metallic glassmorphism UI.",
      challenges: [
        "Pinning BetterAuth to an exact version was necessary after a later release introduced a breaking bug in its Kysely integration — tracking that down under deadline pressure was stressful.",
        "Setting up JWT verification between the Next.js frontend and Express backend, using a remote JWKS endpoint, took careful work to get the server-to-server auth right.",
        "Building the glassmorphic, metallic visual direction — frosted glass surfaces, backdrop blur, chrome-to-graphite gradients — pushed my Tailwind skills further than previous projects.",
      ],
      future: [
        "Add a test drive scheduling system so buyers can book appointments with car sellers.",
        "Implement a seller rating and review system for verified buyers.",
        "Add vehicle history and inspection report upload support for car listings.",
        "Build a seller dashboard for tracking car listing views, inquiries, and offers.",
      ],
    },
    de: {
      tagline: "Gebrauchtwagen-Marktplatz",
      description:
        "Ein Full-Stack-Marktplatz zum Kaufen und Verkaufen von Gebrauchtwagen, entwickelt unter Zeitdruck mit JWT-gesicherten Server-zu-Server-Aufrufen und einer metallischen, glasartigen Oberfläche.",
      purpose:
        "Bietet einen leistungsstarken Marktplatz zur Verbindung von Gebrauchtwagen-Verkäufern und -Käufern.",
      challenges: [
        "Fixierung der BetterAuth-Version wegen Breaking Changes in Kysely unter Zeitdruck.",
        "Einrichtung der JWT-Verifizierung zwischen Next.js-Frontend und Express-Backend über ein JWKS-Endpunkt.",
        "Entwicklung des metallisch-glasartigen UI-Designs mit Tailwind.",
      ],
      future: [
        "Probefahrten-Buchungssystem zur Vereinbarung von Terminen zwischen Käufern und Verkäufern.",
        "Bewertungssystem für Verkäufer durch verifizierte Käufer.",
        "Fahrzeughistorien- & Inspektionsberichte für Inserate.",
        "Verkäufer-Dashboard zur Verfolgung von Inseratsaufrufen und Anfragen.",
      ],
    },
  },
  {
    slug: "docappoint",
    number: "04",
    name: "DocAppoint",
    color: "#38bdf8",
    image: "/projects/docappoint.png",
    live: "https://docappoint-client-indol.vercel.app/",
    github: "https://github.com/farhansm01/docappoint-client",
    stack: ["Next.js 16", "React 19", "BetterAuth", "MongoDB", "Tailwind v4"],
    en: {
      tagline: "Doctor Appointment Booking Platform",
      description:
        "A full stack doctor appointment platform where patients can search verified doctors, view detailed profiles, and book appointments in a few clicks, with a personal dashboard to manage bookings.",
      purpose:
        "Eliminates long waiting lines and phone tag by providing patients an instant online system to find verified doctors by specialty, check real-time availability, and manage appointments in one central dashboard.",
      challenges: [
        "Building the doctor search on the All Appointments page meant filtering large lists client-side while keeping the UI responsive and instant.",
        "Wiring up the personal dashboard so appointment updates and cancellations reflect instantly in the UI, with toast feedback, without needing a full page reload.",
        "Handling profile photo and name updates directly from the dashboard required careful state syncing between the client and BetterAuth's session data.",
      ],
      future: [
        "Add a doctor-side dashboard so doctors can manage their own availability and appointments.",
        "Implement appointment reminders via email or SMS before the scheduled time.",
        "Add ratings and reviews for doctors based on completed appointments.",
        "Integrate payment for consultation fees at the time of booking.",
      ],
    },
    de: {
      tagline: "Arzt-Terminbuchungsplattform",
      description:
        "Eine Full-Stack-Arztterminplattform, auf der Patienten verifizierte Ärzte suchen, detaillierte Profile einsehen und Termine mit wenigen Klicks buchen können, inklusive persönlichem Dashboard zur Terminverwaltung.",
      purpose:
        "Beseitigt lange Wartezeiten in Praxen und Telefonketten durch ein einfaches Online-System zur Suche nach verifizierten Fachärzten mit Echtzeit-Verfügbarkeit.",
      challenges: [
        "Die Arztsuche auf der Übersichtsseite so zu bauen, dass große Listen clientseitig gefiltered werden.",
        "Das persönliche Dashboard so zu verdrahten, dass Terminaktualisierungen und Stornierungen sofort in der Benutzeroberfläche reflektieren.",
        "Die Direktaktualisierung von Profilfoto und Namen über das Dashboard erforderte eine präzise Statussynchronisierung.",
      ],
      future: [
        "Arzt-Dashboard zur eigenständigen Verwaltung von Verfügbarkeiten und Terminen.",
        "Terminerinnerungen per E-Mail oder SMS vor dem geplanten Zeitpunkt.",
        "Bewertungen und Rezensionen für Ärzte basierend auf abgeschlossenen Terminen.",
        "Zahlungsintegration für Beratungsgebühren direkt bei der Buchung.",
      ],
    },
  },
  {
    slug: "keenkeeper",
    number: "05",
    name: "KeenKeeper",
    color: "#fb923c",
    image: "/projects/keen-keeper.png",
    live: "https://keen-keeper-fsm.netlify.app/",
    github: "https://github.com/farhansm01/Keen-Keeper",
    stack: ["React", "React Router", "Context API", "Tailwind", "Recharts"],
    en: {
      tagline: "Relationship Management App",
      description:
        "A personal relationship tracker with interaction timeline, analytics dashboard, and friend management. Uses Context API for state and Recharts for visual analytics.",
      purpose:
        "Helps individuals stay intentionally connected with friends, family, and professional contacts through interaction timelines and relationship health analytics.",
      challenges: [
        "Designing the data model for tracking interactions was complex — each contact needed a timeline of different interaction types with timestamps and notes.",
        "Context API became hard to manage as the app grew — passing deeply nested state without unnecessary re-renders required careful structuring of providers.",
        "Building the analytics dashboard with Recharts required aggregating interaction data into meaningful insights which involved complex data transformation logic.",
      ],
      future: [
        "Integrate actual communication features — send messages or make calls directly from the app using Twilio or WhatsApp API to make it fully functional.",
        "Add reminders and notifications — get reminded to reach out to contacts you haven't spoken to in a while.",
        "Connect to a backend with real authentication so data persists and users can access their contacts from any device.",
        "Add import functionality to sync contacts from phone or Google Contacts.",
      ],
    },
    de: {
      tagline: "Beziehungsmanagement-App",
      description:
        "Ein persönlicher Beziehungs-Tracker mit Interaktions-Timeline, Analyse-Dashboard und Freundschaftsverwaltung.",
      purpose:
        "Hilft Einzelpersonen, bewusst mit Freunden, Familie und beruflichen Kontakten in Verbindung zu bleiben.",
      challenges: [
        "Komplexes Datenmodell für Interaktions-Timelines einzelner Kontakte.",
        "Skalierung des Context API bei wachsender Anwendungsgröße.",
        "Aggregieren von Interaktionsdaten für das Recharts-Dashboard.",
      ],
      future: [
        "Direkte Kommunikationsfunktionen über WhatsApp/Twilio-API.",
        "Erinnerungen und Benachrichtigungen für Kontaktaufnahmen.",
        "Kontakt-Import aus dem Telefonbuch oder Google Contacts.",
      ],
    },
  },
  {
    slug: "book-vibe",
    number: "06",
    name: "Book Vibe",
    color: "#f472b6",
    image: "/projects/book-vibe.png",
    live: "https://book-vibe-fsm.netlify.app/",
    github: "https://github.com/farhansm01/Book-Vibe",
    stack: ["React 19", "React Router v7", "Tailwind", "DaisyUI", "Recharts"],
    en: {
      tagline: "Smart Book Library App",
      description:
        "A book library app with Read List and Wishlist functionality powered by localStorage. Built with React 19, React Router v7, and Recharts for reading analytics.",
      purpose:
        "Helps avid readers organize their personal book collection, manage wishlists and reading lists, and visualize reading stats with interactive charts.",
      challenges: [
        "Working with React Router v7 for the first time introduced new patterns around data loading and navigation that required adjusting to a different mental model.",
        "Managing localStorage state across multiple components without a global state solution led to some sync issues that required a custom hook to resolve.",
        "Implementing Recharts for reading analytics required understanding data transformation — converting raw book lists into chart-friendly formats.",
      ],
      future: [
        "Connect to a backend with user accounts so reading lists persist across devices instead of relying on localStorage.",
        "Integrate a public books API like Google Books to allow users to search and add any book to their list.",
        "Add reading progress tracking — users can mark how many pages they've read and see progress bars.",
        "Build a social feature where users can share their reading lists and see what friends are reading.",
      ],
    },
    de: {
      tagline: "Smarte Buchbibliotheks-App",
      description:
        "Eine Buchbibliotheks-App mit Leselisten- und Wunschlisten-Funktion über localStorage.",
      purpose:
        "Hilft begeisterten Lesern, ihre persönliche Buchsammlung zu organisieren.",
      challenges: [
        "Erste Schritte mit React Router v7 und neuen Mustern beim Laden von Daten.",
        "Verwaltung des localStorage-Zustands über mehrere Komponenten hinweg.",
        "Datenumwandlung für Recharts-Leseanalysen.",
      ],
      future: [
        "Anbindung an ein Backend mit Nutzerkonten.",
        "Integration der Google Books API zur Buchsuche.",
        "Fortschrittstracking für gelesene Seiten.",
      ],
    },
  },
  {
    slug: "dragon-news",
    number: "07",
    name: "Dragon News",
    color: "#22d3ee",
    image: "/projects/dragon-news.png",
    live: "https://dragon-news-omega-lemon.vercel.app/",
    github: "https://github.com/farhansm01/Dragon-News",
    stack: ["Next.js", "BetterAuth", "Tailwind", "React Marquee"],
    en: {
      tagline: "Category-Based News Platform",
      description:
        "A news portal with category-based browsing, private routes, and OAuth login. Features a React Marquee ticker, dynamic category sidebar, and smooth authentication flow.",
      purpose:
        "Delivers a fast, clean news browsing experience with real-time marquee news tickers, category filtering, and secure reader authentication for tailored news consumption.",
      challenges: [
        "This was one of the first projects using BetterAuth, so the learning curve was steep — understanding the auth flow, session handling, and protected routes took considerable time.",
        "Keeping the category sidebar in sync with the active news feed without unnecessary re-renders required careful state management.",
        "Making the React Marquee ticker responsive and smooth across different screen sizes was trickier than expected.",
      ],
      future: [
        "Implement a multi-role authentication system — Admin can manage all content, Editors can write and publish articles, and regular users can read and comment.",
        "Add a rich text editor for article creation so editors can format content properly.",
        "Improve the overall UI with better typography, dark/light mode, and smoother transitions.",
        "Add search functionality with filters by category, date, and author.",
      ],
    },
    de: {
      tagline: "Kategoriebasierte Nachrichtenplattform",
      description:
        "Ein Nachrichtenportal mit kategoriebasiertem Browsen, privaten Routen und OAuth-Login.",
      purpose:
        "Liefert ein schnelles, sauberes Nachrichten-Leseerlebnis.",
      challenges: [
        "Lernkurve bei der ersten Verwendung von BetterAuth.",
        "Synchronisierung der Kategorie-Sidebar mit dem News-Feed.",
        "Reaktionsschneller React Marquee-Ticker.",
      ],
      future: [
        "Multi-Rollen-Authentifizierungssystem.",
        "Rich-Text-Editor für Artikel.",
        "Suchfunktionalität mit Filtern.",
      ],
    },
  },
  {
    slug: "openshelf",
    number: "08",
    name: "OpenShelf",
    color: "#8b5cf6",
    image: "/projects/openshelf.png",
    live: "https://open-shelf-ten.vercel.app/",
    github: "https://github.com/farhansm01/OpenShelf",
    stack: ["Next.js", "BetterAuth", "MongoDB", "Tailwind", "DaisyUI"],
    en: {
      tagline: "Online Book Borrowing Platform",
      description:
        "A full stack book borrowing platform where users can browse, borrow, and manage books online. Features Google OAuth, protected routes, and a clean library management system.",
      purpose:
        "Digitalizes community library management, giving users an effortless way to discover books, borrow titles online with Google OAuth, and track due dates in one centralized place.",
      challenges: [
        "Integrating BetterAuth was the biggest hurdle — social login with Google kept failing due to callback URL misconfigurations and OAuth scope issues that took significant debugging to resolve.",
        "Managing protected routes and session persistence across server and client components in Next.js required careful architecture decisions.",
        "Designing the book borrowing logic — handling availability status, due dates, and preventing duplicate borrows — needed multiple iterations to get right.",
      ],
      future: [
        "Build a full admin dashboard where admins can add, edit, and remove books, manage users, and view borrowing analytics.",
        "Add email notifications for due date reminders and successful borrow confirmations.",
        "Implement a book recommendation system based on borrowing history and reading preferences.",
        "Add a reviews and ratings system so users can share feedback on books they've read.",
      ],
    },
    de: {
      tagline: "Online-Buchausleihplattform",
      description:
        "Eine Full-Stack-Buchausleihplattform, auf der Nutzer Bücher online durchsuchen, ausleihen und verwalten können.",
      purpose:
        "Digitalisiert die Verwaltung von Gemeinschaftsbibliotheken.",
      challenges: [
        "Die Integration von BetterAuth war die größte Hürde.",
        "Verwaltung geschützter Routen und Sitzungspersistenz.",
        "Ausleihlogik für Bücher und Fälligkeitsdaten.",
      ],
      future: [
        "Erstellung eines Admin-Dashboards.",
        "E-Mail-Benachrichtigungen für Fälligkeitserinnerungen.",
        "Buchempfehlungssystem basierend auf Lesehistorie.",
      ],
    },
  },
];

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialSeed, null, 2), "utf8");
  }
}

export function getAllProjects() {
  ensureDataFile();
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return initialSeed;
  }
}

export function saveAllProjects(projects) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), "utf8");
}
