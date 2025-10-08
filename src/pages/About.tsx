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
            Pioneering the fusion of stories and technology to unlock new realms of digital narrative and immersion.
          </p>

        </div>

      </section>

      {/* Our Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto items-center">

        <div className="order-2 lg:order-1">

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Story</h2>

          <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg">
            Founded in 2020 by passionate storytellers and tech innovators, Senotrams emerged from a shared vision for blending digital tools with narrative creativity. What started as a small group experimenting with online comic sharing has grown into a global platform empowering thousands of creators to upload, download, and engage with comics, novels, and stories.
          </p>

          <p className="text-white/70 mb-8 leading-relaxed text-sm sm:text-base">
            Today, we're at the forefront of digital libraries, user registration systems, and community features, fostering a space where technology amplifies storytelling potential.
          </p>

          <div className="flex items-center gap-2 text-purple-300 hover:text-purple-200 hover-lift transition-all duration-300 text-sm sm:text-base">
            Read Our Journey <FaArrowRight />
          </div>

        </div>

        <div className="order-1 lg:order-2 flex justify-center">

          <div className="glass-card hover-lift p-8 rounded-2xl text-center w-full max-w-md">
            <FaGlobe className="text-6xl sm:text-8xl text-purple-300 mx-auto mb-6" />
            <p className="text-white/70 text-sm sm:text-base">From Page to Digital</p>
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
            To democratize digital storytelling by providing accessible tools for uploading, downloading, and registering to share comics, novels, and narratives that inspire collaboration and discovery.
          </p>

        </div>

        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl">

          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center">
            <FaRocket className="text-2xl sm:text-3xl text-purple-300" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Our Vision</h3>

          <p className="text-white/70 text-center leading-relaxed text-sm sm:text-base">
            A future where every story can be created, shared, and experienced in endless formats, blurring the lines between author, technology, and reader.
          </p>

        </div>

      </section>

      {/* Values */}
      <section className="mb-20 max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">Our Core Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
            <FaHeart className="text-4xl sm:text-5xl text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Storytelling First</h3>
            <p className="text-white/70 text-sm sm:text-base">We champion bold narratives and creative freedom above all.</p>
          </div>

          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
            <FaUsers className="text-4xl sm:text-5xl text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Community Driven</h3>
            <p className="text-white/70 text-sm sm:text-base">Building together, sharing stories, and celebrating collective voices.</p>
          </div>

          <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
            <FaRocket className="text-4xl sm:text-5xl text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Innovation Bold</h3>
            <p className="text-white/70 text-sm sm:text-base">Pushing digital frontiers to enhance narrative expression.</p>
          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="glass-effect rounded-2xl p-6 sm:p-12 mb-20 max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">1</h3>
            <p className="text-white/70 text-sm sm:text-base">Creators Empowered</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">5</h3>
            <p className="text-white/70 text-sm sm:text-base">Stories Featured</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">soon...</h3>
            <p className="text-white/70 text-sm sm:text-base">Downloads Served</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">soon...</h3>
            <p className="text-white/70 text-sm sm:text-base">Countries Reached</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;