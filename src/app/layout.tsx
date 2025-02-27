import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100"> {/* Light gray background for body */}
        <main className="min-h-screen"> {/* Ensure main takes full screen height */}
          {children}
        </main>
      </body>
    </html>
  );
}