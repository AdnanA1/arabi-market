import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arabi Market',
  description: 'Modern ECommerce website'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer footer-center text-white p-4 bg-base-300 flex">
            <div className="navbar justify-between flex flex-wrap items-center">
              <Link href="/" className="btn btn-ghost text-lg">
                <Image src="/logo.svg" alt="logo" width={170} height={50} />
              </Link>
            </div>
            <p>Copyright @ 2024 - All rights reserved</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
