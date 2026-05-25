import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Farhan Sadiq — Full Stack Developer',
  description:
    'Portfolio of Farhan Sadiq, a Full Stack Developer specializing in the MERN stack and Next.js. CSE student at AIUB, Bangladesh.',
  keywords: ['Farhan Sadiq', 'Full Stack Developer', 'MERN Stack', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Farhan Sadiq' }],
  openGraph: {
    title: 'Farhan Sadiq — Full Stack Developer',
    description: 'Portfolio of Farhan Sadiq, Full Stack Developer & CSE student at AIUB.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="bg-orb bg-orb-violet" aria-hidden="true" />
          <div className="bg-orb bg-orb-cyan" aria-hidden="true" />
          <div className="relative z-10">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}