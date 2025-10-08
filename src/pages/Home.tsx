import { Link } from 'react-router-dom';
import React from 'react';
import { FaBookOpen, FaUpload, FaUsers } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="glass-effect rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="gradient-text">Senotrams</span>
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-white/80 leading-relaxed">
            Where captivating stories meet digital innovation. 
            We're revolutionizing comics and novels with seamless uploading, downloading, and immersive reading experiences.
          </p>

          <Link 
            to="/comics" 
            className="glass-effect hover-lift text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold inline-block border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            Explore Comic Library
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FaUpload className="text-2xl sm:text-3xl text-purple-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Comic Uploader</h2>
          <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
            Easily upload your original comics and novels, with support for registration to manage your library and share with the world.
          </p>
          <Link 
            to="/upload" 
            className="text-purple-300 hover:text-purple-200 hover-lift inline-flex items-center gap-2 transition-all duration-300 text-sm sm:text-base"
          >
            Upload Now <FaArrowRight />
          </Link>
        </div>

        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FaBookOpen className="text-2xl sm:text-3xl text-purple-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Digital Library</h2>
          <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
            Dive into a vast collection of comics, novels, and stories—download favorites, read online, and discover new worlds.
          </p>
          <Link 
            to="/library" 
            className="text-purple-300 hover:text-purple-200 hover-lift inline-flex items-center gap-2 transition-all duration-300 text-sm sm:text-base"
          >
            Browse Library <FaArrowRight />
          </Link>
        </div>

        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FaUsers className="text-2xl sm:text-3xl text-purple-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Creator Community</h2>
          <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
            Connect with fellow authors and readers, collaborate on stories, and build your following through our registered user network.
          </p>
          <Link 
            to="/community" 
            className="text-purple-300 hover:text-purple-200 hover-lift inline-flex items-center gap-2 transition-all duration-300 text-sm sm:text-base"
          >
            Join Community <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Featured Art Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Featured Comics & Stories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="glass-card hover-lift aspect-square rounded-xl flex items-center justify-center text-white/60 text-xl sm:text-2xl transition-all duration-500 hover:text-white/90"
            >
              Story {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;