// component/GodelSpaceFullPage.tsx
'use client';
import React from 'react';
import Image from 'next/image';

const GodelSpaceFullPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Ports Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="bg-gray-900 p-4 rounded-lg">
              <img 
                src="\src\image\Blog_Overview-Saudi-Arabia.gif" 
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
                src="\src\image\French_Riviera_node_full_image_2.jpg" 
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
                src="\src\image\GEO-2019-6144.jpg" 
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
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Our Partners And Supporters</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-32">
              <img 
                src="\src\image\NVIDIA_Inception_Program_pillars.jpg" 
                alt="NVIDIA logo" 
                className="w-full"
              />
            </div>
            {/* Add more partner logos as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-sm md:text-base mb-8">
            Connect with us to explore innovative space technology and solutions.
          </p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Name" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Subject" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="Your message" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                required
              />
            </div>
            
            <div>
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded transition duration-300"
              >
                Submit your inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GodelSpaceFullPage;