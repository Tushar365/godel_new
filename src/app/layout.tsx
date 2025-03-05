import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header'; // Adjust the import path as needed

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 pt-24"> {/* Increased top padding to accommodate fixed header */}
        <Header /> {/* Add the Header component */}
        <main className="min-h-screen"> {/* Ensure main takes full screen height */}
          {children}
        </main>
      </body>
    </html>
  );
}