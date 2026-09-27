import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Haitham — Graphic Designer',
  description: 'Premium graphic design studio. Branding, editorial, poster design, and visual identity systems that get noticed.',
  keywords: ['graphic designer', 'branding', 'visual identity', 'poster design', 'editorial design'],
  openGraph: {
    title: 'Haitham — Graphic Designer',
    description: 'Design that gets noticed.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-off-white text-charcoal antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
