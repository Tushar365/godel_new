
// src/components/ContactForm.tsx
import React from 'react';

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
