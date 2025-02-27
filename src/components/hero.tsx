// component/hero.tsx
'use client';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Earth background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/Earth_From_Space.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay with content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Insights from Observation</h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Truth through Inquiry</h2>
            <p className="text-sm md:text-base lg:text-lg opacity-90 max-w-lg">
              AI-powered geospatial insights transforming space data into actionable insights and
              real-world decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;