'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SlideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 70,
      duration: 0.7 
    }
  }
};

const MiddleSlides = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Main background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full brightness-[0.25]"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 py-12">
        {/* Ports Section */}
        <motion.section 
          className="py-12 px-8 md:px-16 lg:px-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.2 
              } 
            }
          }}
        >
          <motion.div 
            className="max-w-6xl h-full mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
            variants={SlideUpVariants}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <motion.div 
                className="md:w-1/2"
                variants={SlideUpVariants}
              >
                <div className="bg-gray-800/90 p-4 rounded-xl shadow-lg">
                  <motion.div
                    variants={SlideUpVariants}
                  >
                    <Image 
                      src="/Blog_Overview-Saudi-Arabia.gif" 
                      alt="Aerial view of port" 
                      width={600}
                      height={400}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                variants={SlideUpVariants}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4 text-white"
                  variants={SlideUpVariants}
                >
                  Transforming Ports with AI-Powered Vision
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base mb-6 text-gray-300"
                  variants={SlideUpVariants}
                >
                  Godel Space enhances port security and logistics with AI-powered vision, 
                  automating control, coordination, and operational handling.
                </motion.p>
                <motion.ul className="space-y-3 text-gray-200">
                  {[
                    "AI-Driven Security: Detect anomalies and enhance port safety in real-time",
                    "Operational Optimization: Streamline vessel and cargo tracking with advanced visual analysis",
                    "Data-driven Decision Making: Optimize port logistics through real-time data insights"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={SlideUpVariants}
                    >
                      <div className="text-blue-400 mr-2">•</div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Earth Observation Section */}
        <motion.section 
          className="py-12 px-8 md:px-16 lg:px-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.2 
              } 
            }
          }}
        >
          <motion.div 
            className="max-w-6xl h-full mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
            variants={SlideUpVariants}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <motion.div 
                className="md:w-1/2 order-2 md:order-1"
                variants={SlideUpVariants}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4 text-white"
                  variants={SlideUpVariants}
                >
                  Machine Learning & Earth Observation
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base mb-6 text-gray-300"
                  variants={SlideUpVariants}
                >
                  Our AI models analyze satellite imagery to track environmental changes, detect anomalies, and provide real-time insights.
                </motion.p>
                <motion.ul className="space-y-3 text-gray-200">
                  {[
                    "AI-powered monitoring: Detect changes in land, water, and climate patterns",
                    "Disaster management: Analyze pre/post-event imagery for rapid risk assessment",
                    "Real-time insights: Generate high-grade geospatial information for critical decision-making"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={SlideUpVariants}
                    >
                      <div className="text-blue-400 mr-2">•</div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div 
                className="md:w-1/2 order-1 md:order-2"
                variants={SlideUpVariants}
              >
                <div className="bg-gray-800/90 p-4 rounded-xl shadow-lg">
                  <motion.div
                    variants={SlideUpVariants}
                  >
                    <Image 
                      src="/French_Riviera_node_full_image_2.jpg" 
                      alt="Satellite imagery of coastline" 
                      width={600}
                      height={400}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Space Debris Section */}
        <motion.section 
          className="py-12 px-8 md:px-16 lg:px-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.2 
              } 
            }
          }}
        >
          <motion.div 
            className="max-w-6xl h-full mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
            variants={SlideUpVariants}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <motion.div 
                className="md:w-1/2"
                variants={SlideUpVariants}
              >
                <div className="bg-gray-800/90 p-4 rounded-xl shadow-lg">
                  <motion.div
                    variants={SlideUpVariants}
                  >
                    <Image 
                      src="/GEO-2019-6144.jpg" 
                      alt="Space debris visualization" 
                      width={600}
                      height={400}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                variants={SlideUpVariants}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4 text-white"
                  variants={SlideUpVariants}
                >
                  AI-Powered Space Debris Intelligence
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base mb-6 text-gray-300"
                  variants={SlideUpVariants}
                >
                  Godel Space&apos;s AI-driven technology enables deep understanding of space debris, identifying risks and optimizing collision avoidance maneuvers.
                </motion.p>
                <motion.ul className="space-y-3 text-gray-200">
                  {[
                    "Debris Recognition: Accurately classify and analyze orbital objects",
                    "Risk Assessment: Predict potential threats and determine impact probabilities",
                    "Advanced Decision Making: Enable satellites to take proactive maneuvers for safer space operations"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={SlideUpVariants}
                    >
                      <div className="text-blue-400 mr-2">•</div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default MiddleSlides;