import React from 'react';
import { FaUsers, FaLightbulb, FaRocket, FaHeart, FaGlobe } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="glass-effect rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            About <span className="gradient-text">Senotrams</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/80 leading-relaxed">
            Pioneering the fusion of art and technology to unlock new realms of creativity and immersion.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Story</h2>
          <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg">
            Founded in 2020 by visionary artists and tech innovators, Senotrams emerged from a shared passion for blending digital innovation with human creativity. What started as a small collective experimenting with AI-generated art has grown into a global platform empowering thousands of creators to push the boundaries of expression.
          </p>
          <p className="text-white/70 mb-8 leading-relaxed text-sm sm:text-base">
            Today, we're at the forefront of AR/VR experiences, AI tools, and metaverse integrations, fostering a community where technology amplifies artistic potential.
          </p>
          <div className="flex items-center gap-2 text-purple-300 hover:text-purple-200 hover-lift transition-all duration-300 text-sm sm:text-base">
            Read Our Journey <FaArrowRight />
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="glass-card hover-lift p-8 rounded-2xl text-center w-full max-w-md">
            <FaGlobe className="text-6xl sm:text-8xl text-purple-300 mx-auto mb-6" />
            <p className="text-white/70 text-sm sm:text-base">From Sketch to Metaverse</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center">
            <FaLightbulb className="text-2xl sm:text-3xl text-purple-300" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Our Mission</h3>
          <p className="text-white/70 text-center leading-relaxed text-sm sm:text-base">
            To democratize digital artistry by providing accessible tools and immersive platforms that inspire innovation and collaboration across the creative world.
          </p>
        </div>
        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center">
            <FaRocket className="text-2xl sm:text-3xl text-purple-300" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Our Vision</h3>
          <p className="text-white/70 text-center leading-relaxed text-sm sm:text-base">
            A future where every idea can be visualized, shared, and experienced in infinite dimensions, blurring the lines between creator, technology, and audience.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
            <FaHeart className="text-4xl sm:text-5xl text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Creativity First</h3>
            <p className="text-white/70 text-sm sm:text-base">We champion bold ideas and artistic freedom above all.</p>
          </div>
          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
            <FaUsers className="text-4xl sm:text-5xl text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Community Driven</h3>
            <p className="text-white/70 text-sm sm:text-base">Building together, sharing knowledge, and celebrating collective success.</p>
          </div>
          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
            <FaRocket className="text-4xl sm:text-5xl text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Innovation Bold</h3>
            <p className="text-white/70 text-sm sm:text-base">Pushing technological frontiers to enhance human expression.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="glass-effect rounded-2xl p-6 sm:p-12 mb-20 max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">10K+</h3>
            <p className="text-white/70 text-sm sm:text-base">Artists Empowered</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">50+</h3>
            <p className="text-white/70 text-sm sm:text-base">Exhibitions Hosted</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">1M+</h3>
            <p className="text-white/70 text-sm sm:text-base">Artworks Created</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">20+</h3>
            <p className="text-white/70 text-sm sm:text-base">Countries Reached</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;   