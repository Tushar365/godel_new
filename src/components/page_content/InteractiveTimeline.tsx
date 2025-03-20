'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTimeline: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate loading and handle potential issues
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-black text-white w-full">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Our Journey Through Time
        </motion.h2>

        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                <p className="mt-4 text-blue-400">Loading interactive timeline...</p>
              </div>
            </div>
          )}

          <motion.div 
            className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-xl border border-gray-800"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <iframe
              src="https://view.genially.com/67da9c8442191e2b059d124c/interactive-content-simple-corporate-timeline"
              title="Interactive Corporate Timeline"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default InteractiveTimeline;