// src/components/Partners.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Partners = () => {
  const partnerLogos = [
    {
      src: "/NVIDIA_Inception_Program_pillars.jpg",
      alt: "NVIDIA logo",
      width: 128,
      height: 128
    },
    // You can add more logos here
    // {
    //   src: "/another-logo.jpg",
    //   alt: "Another Partner",
    //   width: 128,
    //   height: 128
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      className="py-16 px-8 md:px-16 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-12"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100
              }
            }
          }}
        >
          Our Partners And Supporters
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
        >
          {partnerLogos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="w-32"
              variants={logoVariants}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-full transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partners;