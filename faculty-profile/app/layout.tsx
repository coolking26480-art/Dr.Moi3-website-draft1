import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Moitrayee Das | Assistant Professor of Psychology",
  description:
    "Faculty profile of Dr. Moitrayee Das, Assistant Professor of Psychology at FLAME University. Researcher in workplace mental health, sleep and well-being, and organizational psychology.",
  keywords: [
    "Moitrayee Das",
    "Psychology",
    "FLAME University",
    "Workplace Mental Health",
    "Organizational Psychology",
    "Sleep Research",
    "Academic Profile",
  ],
  authors: [{ name: "Dr. Moitrayee Das" }],
  openGraph: {
    title: "Dr. Moitrayee Das | Assistant Professor of Psychology",
    description:
      "Faculty profile of Dr. Moitrayee Das, Assistant Professor of Psychology at FLAME University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
