import './globals.css';
import './rtl.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { PageLoader } from '@/components/PageLoader';

export const metadata: Metadata = {
  title: 'H2D.dev — From idea to working software',
  description: 'Independent software engineering by Habib Titraoui. Thoughtful products for real-world problems.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
