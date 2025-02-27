// app/page.tsx
import React from 'react';
import GodelSpaceFullPage from '@/components/GodelSpaceFullPage';
import Hero from '@/components/hero'; // Assuming hero.tsx is in the components folder and named hero

export default function Home() {
  return (
    <div> {/* Or a more semantic container like <main> if needed */}
      <Hero />
      <GodelSpaceFullPage />
    </div>
  );
}
