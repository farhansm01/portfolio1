export const projectsData = [
  {
    slug: "openshelf",
    number: "01",
    name: "OpenShelf",
    tagline: "Online Book Borrowing Platform",
    description:
      "A full stack book borrowing platform where users can browse, borrow, and manage books online. Features Google OAuth, protected routes, and a clean library management system.",
    purpose:
      "Digitalizes community library management, giving users an effortless way to discover books, borrow titles online with Google OAuth, and track due dates in one centralized place.",
    stack: ["Next.js", "BetterAuth", "MongoDB", "Tailwind", "DaisyUI"],
    live: "https://open-shelf-ten.vercel.app/",
    github: "https://github.com/farhansm01/OpenShelf",
    image: "/projects/openshelf.png",
    color: "#8b5cf6",
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
  {
    slug: "dragon-news",
    number: "02",
    name: "Dragon News",
    tagline: "Category-Based News Platform",
    description:
      "A news portal with category-based browsing, private routes, and OAuth login. Features a React Marquee ticker, dynamic category sidebar, and smooth authentication flow.",
    purpose:
      "Delivers a fast, clean news browsing experience with real-time marquee news tickers, category filtering, and secure reader authentication for tailored news consumption.",
    stack: ["Next.js", "BetterAuth", "Tailwind", "React Marquee"],
    live: "https://dragon-news-omega-lemon.vercel.app/",
    github: "https://github.com/farhansm01/Dragon-News",
    image: "/projects/dragon-news.png",
    color: "#22d3ee",
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
  {
    slug: "book-vibe",
    number: "03",
    name: "Book Vibe",
    tagline: "Smart Book Library App",
    description:
      "A book library app with Read List and Wishlist functionality powered by localStorage. Built with React 19, React Router v7, and Recharts for reading analytics.",
    purpose:
      "Helps avid readers organize their personal book collection, manage wishlists and reading lists, and visualize reading stats with interactive charts.",
    stack: ["React 19", "React Router v7", "Tailwind", "DaisyUI", "Recharts"],
    live: "https://book-vibe-fsm.netlify.app/",
    github: "https://github.com/farhansm01/Book-Vibe",
    image: "/projects/book-vibe.png",
    color: "#f472b6",
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
  {
    slug: "keenkeeper",
    number: "04",
    name: "KeenKeeper",
    tagline: "Relationship Management App",
    description:
      "A personal relationship tracker with interaction timeline, analytics dashboard, and friend management. Uses Context API for state and Recharts for visual analytics.",
    purpose:
      "Helps individuals stay intentionally connected with friends, family, and professional contacts through interaction timelines and relationship health analytics.",
    stack: ["React", "React Router", "Context API", "Tailwind", "Recharts"],
    live: "https://keen-keeper-fsm.netlify.app/",
    github: "https://github.com/farhansm01/Keen-Keeper",
    image: "/projects/keen-keeper.png",
    color: "#fb923c",
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
  {
    slug: "resell-hub",
    number: "05",
    name: "ResellHub",
    tagline: "Full-Stack Second-Hand Marketplace",
    description:
      "A full stack marketplace for buying and selling second-hand items, with Stripe-powered checkout, secure auth, and a clean listing management system.",
    purpose:
      "Creates a safe, simple environment for buying and selling pre-owned items online, featuring secure Stripe checkout, verified listings, and easy item publishing.",
    stack: ["Next.js", "BetterAuth", "Stripe", "MongoDB", "Tailwind"],
    live: "https://resell-hub-client-xi.vercel.app/",
    github: "https://github.com/farhansm01/resell-hub-client",
    image: "/projects/resellhub.png",
    color: "#34d399",
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
  {
    slug: "drift",
    number: "06",
    name: "Drift",
    tagline: "Car Rental Listing Platform",
    description:
      "A car rental listing platform built under a tight deadline, with JWT-secured server-to-server calls and a metallic, glassmorphic UI.",
    purpose:
      "Provides a high-performance, friction-free car rental marketplace connecting vehicle owners and renters with secure JWT server-to-server authentication and metallic glassmorphism UI.",
    stack: ["Next.js", "Express", "BetterAuth", "MongoDB", "TypeScript"],
    live: "https://drift-client-alpha.vercel.app/",
    github: "https://github.com/farhansm01/drift-client",
    image: "/projects/drift.png",
    color: "#94a3b8",
    challenges: [
      "Pinning BetterAuth to an exact version was necessary after a later release introduced a breaking bug in its Kysely integration — tracking that down under deadline pressure was stressful.",
      "Setting up JWT verification between the Next.js frontend and Express backend, using a remote JWKS endpoint, took careful work to get the server-to-server auth right.",
      "Building the glassmorphic, metallic visual direction — frosted glass surfaces, backdrop blur, chrome-to-graphite gradients — pushed my Tailwind skills further than previous projects.",
    ],
    future: [
      "Add a booking calendar so users can see real-time availability for each car.",
      "Implement a review system for renters to rate their experience with each listing.",
      "Add payment integration for booking deposits and rental payments.",
      "Build an owner dashboard for managing listings, bookings, and earnings.",
    ],
  },
  {
    slug: "nestly",
    number: "07",
    name: "Nestly",
    tagline: "AI-Powered Real Estate Platform",
    description:
      "A full stack real estate platform where users can discover, list, and manage luxury properties, powered by Google Gemini for smart recommendations, document risk auditing, and a live chat assistant.",
    purpose:
      "Revolutionizes luxury property buying by combining AI document risk auditing, Gemini-driven real estate recommendations, and instant Stripe property reservation.",
    stack: ["Next.js 16", "BetterAuth", "Google Gemini", "Stripe", "MongoDB"],
    live: "https://nestly-client-silk.vercel.app/",
    github: "https://github.com/farhansm01/nestly-client",
    image: "/projects/nestly.png",
    color: "#eab308",
    challenges: [
      "Integrating Google Gemini for three different AI features — recommendations, document analysis, and a context-aware chat assistant — meant carefully engineering prompts so each stayed accurate and useful.",
      "Building role-based dashboards for buyers, sellers, and admins, each with different permissions and views, required a clean, maintainable access-control structure.",
      "Wiring up Stripe for property purchases alongside the existing BetterAuth and role system needed careful handling to keep payment state, listing status, and user roles all in sync.",
    ],
    future: [
      "Add a saved-search feature with email alerts when new matching properties are listed.",
      "Integrate a mortgage/affordability calculator directly into property detail pages.",
      "Add virtual tour support with embedded 360° property walkthroughs.",
      "Expand the AI chat assistant to handle scheduling property viewings directly.",
    ],
  },
  {
    slug: "docappoint",
    number: "08",
    name: "DocAppoint",
    tagline: "Doctor Appointment Booking Platform",
    description:
      "A full stack doctor appointment platform where patients can search verified doctors, view detailed profiles, and book appointments in a few clicks, with a personal dashboard to manage bookings.",
    purpose:
      "Eliminates long waiting lines and phone tag by providing patients an instant online system to find verified doctors by specialty, check real-time availability, and manage appointments in one central dashboard.",
    stack: ["Next.js 16", "React 19", "BetterAuth", "MongoDB", "Tailwind v4"],
    live: "https://docappoint-client-indol.vercel.app/",
    github: "https://github.com/farhansm01/docappoint-client",
    image: "/projects/docappoint.png",
    color: "#38bdf8",
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
];