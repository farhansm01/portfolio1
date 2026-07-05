import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Farhan Sadiq — Full Stack Developer",
  description:
    "Portfolio of Farhan Sadiq, Full Stack Developer & CSE student at AIUB, Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <div className="bg-orb bg-orb-violet" />
            <div className="bg-orb bg-orb-cyan" />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
