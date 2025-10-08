import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =
   (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'senotrams@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Dar es Salaam, Tanzania'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+255 683 073 428'
    }
  ];

  const socialLinks = [
    {
      icon: SiGmail,
      href: 'mailto:senotrams@gmail.com'
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/senotrams/'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/senotrams'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/seno-trams-0a73b41b3'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">

      {/* Hero Section */}
      <section className="text-center mb-20">

        <div className="glass-effect rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-white/80 leading-relaxed">
            We'd love to hear from you. Share your story ideas, questions about uploading, or collaboration opportunities for comics and novels.
          </p>
        </div>

      </section>

      {/* Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto items-start lg:items-center">

        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl order-2 lg:order-1">
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
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 justify-center lg:justify-items-center order-1 lg:order-2">
          {contactInfo.map((item, index) => (
            <div key={index} className="glass-card hover-lift p-6 sm:p-8 rounded-2xl w-full lg:w-auto">
              <item.icon className="text-3xl text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="text-center mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Connect With Us</h2>
        <div className="flex justify-center space-x-6 sm:space-x-8">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white/70 hover:text-purple-300 transition-colors text-2xl hover-lift"
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;