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
            src="https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4a6f9789738c05aff3bce54&profile_id=164&oauth2_token_id=57447761"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              console.error("Video failed to load:", e);
            }}
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