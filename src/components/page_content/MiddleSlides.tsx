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
    <>
      {/* Ports Section */}
      <motion.section 
        className="py-16 px-8 md:px-16 lg:px-24"
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="md:w-1/2"
            variants={SlideUpVariants}
          >
            <div className="bg-gray-900 p-4 rounded-lg">
              <motion.div
                variants={SlideUpVariants}
              >
                <Image 
                  src="/Blog_Overview-Saudi-Arabia.gif" 
                  alt="Aerial view of port" 
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            variants={SlideUpVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={SlideUpVariants}
            >
              Transforming Ports with AI-Powered Vision
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base mb-6"
              variants={SlideUpVariants}
            >
              Godel Space enhances port security and logistics with AI-powered vision, 
              automating control, coordination, and operational handling.
            </motion.p>
            <motion.ul className="space-y-3">
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
      </motion.section>

      {/* Earth Observation Section */}
      <motion.section 
        className="py-16 px-8 md:px-16 lg:px-24 bg-gray-900"
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="md:w-1/2"
            variants={SlideUpVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={SlideUpVariants}
            >
              Machine Learning & Earth Observation
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base mb-6"
              variants={SlideUpVariants}
            >
              Our AI models analyze satellite imagery to track environmental changes, detect anomalies, and provide real-time insights.
            </motion.p>
            <motion.ul className="space-y-3">
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
            className="md:w-1/2"
            variants={SlideUpVariants}
          >
            <div className="bg-gray-800 p-4 rounded-lg">
              <motion.div
                variants={SlideUpVariants}
              >
                <Image 
                  src="/French_Riviera_node_full_image_2.jpg" 
                  alt="Satellite imagery of coastline" 
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Space Debris Section */}
      <motion.section 
        className="py-16 px-8 md:px-16 lg:px-24"
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="md:w-1/2"
            variants={SlideUpVariants}
          >
            <div className="bg-gray-900 p-4 rounded-lg">
              <motion.div
                variants={SlideUpVariants}
              >
                <Image 
                  src="/GEO-2019-6144.jpg" 
                  alt="Space debris visualization" 
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            variants={SlideUpVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={SlideUpVariants}
            >
              AI-Powered Space Debris Intelligence
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base mb-6"
              variants={SlideUpVariants}
            >
              Godel Space&apos;s AI-driven technology enables deep understanding of space debris, identifying risks and optimizing collision avoidance maneuvers.
            </motion.p>
            <motion.ul className="space-y-3">
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
      </motion.section>
    </>
  );
};

export default MiddleSlides;