import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaTwitter, FaInstagram, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="glass-effect rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/80 leading-relaxed">
            We'd love to hear from you. Share your ideas, questions, or collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl glass-effect border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl glass-effect border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 text-sm"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl glass-effect border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover-lift text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Send Message <FaArrowRight className="inline ml-2" />
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-center text-green-400 text-sm">Message sent successfully!</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl">
            <FaEnvelope className="text-3xl text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-white/70 text-sm">hello@senotrams.com</p>
          </div>
          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl">
            <FaMapMarkerAlt className="text-3xl text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
            <p className="text-white/70 text-sm">San Francisco, CA</p>
          </div>
          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl">
            <FaPhone className="text-3xl text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="text-center mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Connect With Us</h2>
        <div className="flex justify-center space-x-6 sm:space-x-8">
          <a href="#" className="text-white/70 hover:text-purple-300 transition-colors text-2xl hover-lift">
            <FaTwitter />
          </a>
          <a href="#" className="text-white/70 hover:text-purple-300 transition-colors text-2xl hover-lift">
            <FaInstagram />
          </a>
          <a href="#" className="text-white/70 hover:text-purple-300 transition-colors text-2xl hover-lift">
            <FaDiscord />
          </a>
          <a href="#" className="text-white/70 hover:text-purple-300 transition-colors text-2xl hover-lift">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;