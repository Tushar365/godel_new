
// src/components/Partners.tsx
import React from 'react';

const Partners = () => {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Our Partners And Supporters</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-32">
            <img 
              src="/NVIDIA_Inception_Program_pillars.jpg" 
              alt="NVIDIA logo" 
              className="w-full"
            />
          </div>
          {/* Add more partner logos as needed */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
