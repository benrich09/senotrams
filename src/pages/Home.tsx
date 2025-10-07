import { Link } from 'react-router-dom';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">

        <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">

          <h1 className="text-6xl font-bold mb-6 text-white">
            Welcome to <span className="gradient-text">Senotrams</span>
          </h1>

          <p className="text-xl mb-8 text-white/80 leading-relaxed">
            Where cutting-edge technology meets boundless creativity. 
            We're pioneering the future of digital art through immersive experiences and innovative tools.
          </p>


          <Link 
            to="/news" 
            className="glass-effect hover-lift text-white px-8 py-4 rounded-full text-lg font-semibold inline-block border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            Explore Digital Gallery
          </Link>

          
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="glass-card hover-lift p-8 rounded-2xl text-center group">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🎨</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-white">AI Art Studio</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Create stunning digital artwork with our AI-powered tools that understand artistic intent and enhance creativity.
          </p>
          <Link 
            to="/products" 
            className="text-purple-300 hover:text-purple-200 hover-lift inline-flex items-center gap-2 transition-all duration-300"
          >
            Create Art <span>→</span>
          </Link>
        </div>

        <div className="glass-card hover-lift p-8 rounded-2xl text-center group">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🕶️</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-white">AR Gallery</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Experience art in new dimensions with our augmented reality glasses that bring digital creations to life.
          </p>
          <Link 
            to="/products" 
            className="text-purple-300 hover:text-purple-200 hover-lift inline-flex items-center gap-2 transition-all duration-300"
          >
            Explore AR <span>→</span>
          </Link>
        </div>

        <div className="glass-card hover-lift p-8 rounded-2xl text-center group">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">🌟</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Digital Canvas</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Join our community of digital artists pushing the boundaries of what's possible in the metaverse.
          </p>
          <Link 
            to="/news" 
            className="text-purple-300 hover:text-purple-200 hover-lift inline-flex items-center gap-2 transition-all duration-300"
          >
            Join Community <span>→</span>
          </Link>
        </div>
      </section>

      {/* Featured Art Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Featured Digital Art</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="glass-card hover-lift aspect-square rounded-xl flex items-center justify-center text-white/60 text-2xl transition-all duration-500 hover:text-white/90"
            >
              Art {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;