import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Providers } from '@/components/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
