// component/GodelSpaceFullPage.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Partners from './Partners';
import ContactForm from './ContactForm';

const GodelSpaceFullPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Ports Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="bg-gray-900 p-4 rounded-lg">
              <img 
                src="/Blog_Overview-Saudi-Arabia.gif" 
                alt="Aerial view of port" 
                className="w-full rounded"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transforming Ports with AI-Powered Vision</h2>
            <p className="text-sm md:text-base mb-6">
              Godel Space enhances port security and logistics with AI-powered vision, automating control, coordination, and operational handling.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>AI-Driven Security: Detect anomalies and enhance port safety in real-time</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>Operational Optimization: Streamline vessel and cargo tracking with advanced visual analysis</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>Data-driven Decision Making: Optimize port logistics through real-time data insights</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Earth Observation Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Machine Learning & Earth Observation</h2>
            <p className="text-sm md:text-base mb-6">
              Our AI models analyze satellite imagery to track environmental changes, detect anomalies, and provide real-time insights.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>AI-powered monitoring: Detect changes in land, water, and climate patterns</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>Disaster management: Analyze pre/post-event imagery for rapid risk assessment</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>Real-time insights: Generate high-grade geospatial information for critical decision-making</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-800 p-4 rounded-lg">
              <img 
                src="/French_Riviera_node_full_image_2.jpg" 
                alt="Satellite imagery of coastline" 
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Space Debris Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="bg-gray-900 p-4 rounded-lg">
              <img 
                src="/GEO-2019-6144.jpg" 
                alt="Space debris visualization" 
                className="w-full rounded"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered Space Debris Intelligence</h2>
            <p className="text-sm md:text-base mb-6">
              Godel Space's AI-driven technology enables deep understanding of space debris, identifying risks and optimizing collision avoidance maneuvers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>Debris Recognition: Accurately classify and analyze orbital objects</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>Risk Assessment: Predict potential threats and determine impact probabilities</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2">•</div>
                <span>Advanced Decision Making: Enable satellites to take proactive maneuvers for safer space operations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default GodelSpaceFullPage;