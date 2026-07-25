import CustomCursor from "@/components/CustomCursor";
import LiveBackground from "@/components/LiveBackground";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://farhansadiq.dev"),
  title: {
    default: "Farhan Sadiq — Full Stack Developer & AI Engineer",
    template: "%s | Farhan Sadiq",
  },
  description:
    "Portfolio of Farhan Sadiq, Full Stack Web Developer & CSE Student at AIUB, Bangladesh. Specialized in Next.js, React, Node.js, AI Integration, and MERN stack.",
  keywords: [
    "Farhan Sadiq",
    "Farhan Sadiq Portfolio",
    "Full Stack Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "AI Integration Engineer",
    "MERN Stack Developer",
    "AIUB Computer Science",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Farhan Sadiq", url: "https://github.com/farhansm01" }],
  creator: "Farhan Sadiq",
  publisher: "Farhan Sadiq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Farhan Sadiq — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Web Developer specialized in Next.js, React 19, BetterAuth, Node.js, and Google Gemini AI integrations.",
    url: "https://farhansadiq.dev",
    siteName: "Farhan Sadiq Portfolio",
    images: [
      {
        url: "/photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Farhan Sadiq — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Sadiq — Full Stack Developer",
    description:
      "Full Stack Web Developer specialized in Next.js, React, Node.js, and Google Gemini AI integrations.",
    images: ["/photo.jpeg"],
    creator: "@farhan_sadiq22",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Farhan Sadiq",
  url: "https://farhansadiq.dev",
  image: "https://farhansadiq.dev/photo.jpeg",
  sameAs: [
    "https://github.com/farhansm01",
    "https://www.linkedin.com/in/farhan-sadiq19/",
    "https://x.com/farhan_sadiq22",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Independent Developer",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "American International University — Bangladesh (AIUB)",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "BetterAuth",
    "Google Gemini AI",
    "Tailwind CSS",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <CustomCursor />
            <LiveBackground />
            <div className="bg-orb bg-orb-violet" />
            <div className="bg-orb bg-orb-cyan" />
            <div className="bg-orb bg-orb-rose" />
            <div className="bg-orb bg-orb-emerald" />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
