import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
      <div className="max-w-lg mx-auto text-center">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
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
          Get in touch
        </motion.h2>
        
        <motion.p 
          className="text-sm md:text-base mb-8"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.1
              }
            }
          }}
        >
          Connect with us to explore innovative space technology and solutions.
        </motion.p>

        <motion.form 
          className="space-y-4" 
          onSubmit={handleSubmit}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded transition duration-300 hover:scale-105"
            >
              Submit your inquiry
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;