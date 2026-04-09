import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eswar-portfolio-nine.vercel.app/"),
  title: {
    default: "Eswaran A | MERN Stack Developer",
    template: "%s | Eswaran A",
  },
  description:
    "Eswaran A is a MERN Stack Developer and React Developer from India, building responsive web applications, scalable full-stack solutions, and modern user-focused interfaces.",
  keywords: [
    "Eswaran A",
    "Eswaran A portfolio",
    "MERN Stack Developer",
    "React Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer India",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Portfolio Website",
  ],
  authors: [{ name: "Eswaran A" }],
  alternates: {
    canonical: "https://eswar-portfolio-nine.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Eswaran A | MERN Stack Developer",
    description:
      "Portfolio of Eswaran A, a MERN Stack Developer and React Developer from India building responsive, scalable, and user-focused web applications.",
    url: "https://eswar-portfolio-nine.vercel.app/",
    siteName: "Eswaran A Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eswaran A Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eswaran A | MERN Stack Developer",
    description:
      "Portfolio of Eswaran A, a MERN Stack Developer and React Developer from India.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface">{children}</body>
    </html>
  );
}
