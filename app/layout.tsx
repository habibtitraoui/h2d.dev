import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'H2D.dev — From idea to working software',
  description: 'Independent software engineering by Habib Titraoui. Thoughtful products for real-world problems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
