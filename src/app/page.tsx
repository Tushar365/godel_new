'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

// Dynamic imports with lazy loading
const Hero = dynamic(() => import('@/components/page_content/hero'), {
  loading: () => <div>Loading hero...</div>
});

const GodelSpaceFullPage = dynamic(() => import('@/components/GodelSpaceFullPage'), {
  loading: () => <div>Loading content...</div>
});

const Footer = dynamic(() => import('@/components/Footer/footer'), {
  loading: () => <div>Loading content...</div>
});

// Fallback component for error handling
const ErrorFallback = ({ error }: { error: Error }) => (
  <div role="alert" className="error-fallback">
    <p>Something went wrong:</p>
    <pre style={{ color: 'red' }}>{error.message}</pre>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Hero />
          <GodelSpaceFullPage />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}