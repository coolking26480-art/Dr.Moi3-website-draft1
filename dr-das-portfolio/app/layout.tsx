import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Moitrayee Das | Assistant Professor of Psychology',
  description: 'Dr. Moitrayee Das is an Assistant Professor of Psychology at FLAME University, Pune. Her research focuses on workplace mental health, sleep and well-being, and organizational psychology.',
  keywords: ['Moitrayee Das', 'psychology', 'workplace mental health', 'FLAME University', 'organizational psychology', 'sleep research'],
  authors: [{ name: 'Dr. Moitrayee Das' }],
  openGraph: {
    title: 'Dr. Moitrayee Das | Assistant Professor of Psychology',
    description: 'Research in workplace mental health, sleep & well-being, and organizational psychology.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="page-fade-in">{children}</body>
    </html>
  );
}
