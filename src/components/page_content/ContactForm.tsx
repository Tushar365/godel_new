import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzsfDLWM_DsD7ncpu89mauyRtpBKyEHUgE_aeURwos1lFDNF8Hi5bGC0ZxGc6Wo-zAF/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Explicitly tell ESLint we know the response isn't used
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _ = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      // Since it's no-cors, we can't read the response directly
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

        {submitStatus === 'success' && (
          <div className="bg-green-600 text-white p-4 rounded mb-4">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-600 text-white p-4 rounded mb-4">
            Oops! There was a problem submitting your form. Please try again.
          </div>
        )}

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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded transition duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit your inquiry'}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;