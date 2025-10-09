import { Link } from 'react-router-dom';
import React from 'react';
import { FaBookOpen, FaUpload, FaUsers } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Home: React.FC = () => {
  
  // Featured stories data with pictures and descriptions
  const featuredStories = [
    {
      id: 1,
      title: "Mystic Shadows",
      image: "/images/WhatsApp Image 2025-10-09 at 11.02.08.jpeg",
      description: "A thrilling tale of ancient magic and hidden realms, perfect for fantasy lovers.",
      link: "/comics/mystic-shadows"
    },
    {
      id: 2,
      title: "Urban Legends",
      image: "/images/WhatsApp Image 2025-10-09 at 11.02.09.jpeg",
      description: "Gripping stories of city mysteries and supernatural encounters in modern life.",
      link: "/comics/urban-legends"
    },
    {
      id: 3,
      title: "Cosmic Voyage",
      image: "/images/WhatsApp Image 2025-10-09 at 11.02.10.jpeg",
      description: "An epic space adventure exploring distant galaxies and interstellar heroes.",
      link: "/comics/cosmic-voyage"
    },
    {
      id: 4,
      title: "Enchanted Forest",
      image: "/images/WhatsApp Image 2025-10-09 at 11.02.12.jpeg",
      description: "Whimsical comics of woodland creatures and magical quests in a vibrant world.",
      link: "/comics/enchanted-forest"
    },
    {
     id: 5,
      title: "Mystic Shadows",
      image: "/images/WhatsApp Image 2025-10-09 at 11.02.11.jpeg",
      description: "A thrilling tale of ancient magic and hidden realms, perfect for fantasy lovers.",
      link: "/comics/mystic-shadows"
    },
    {
      id: 6,
      title: "Urban Legends",
      image: "/images/WhatsApp Image 2025-10-09 at 11.02.12 (1).jpeg",
      description: "Gripping stories of city mysteries and supernatural encounters in modern life.",
      link: "/comics/urban-legends"
    },
    {
     id: 7,
      title: "Mystic Shadows",
      image: "/images/89df8aa1-633f-4432-ba39-5f59b1996bac.jpeg",
      description: "A thrilling tale of ancient magic and hidden realms, perfect for fantasy lovers.",
      link: "/comics/mystic-shadows"
    },
    {
      id: 8,
      title: "Urban Legends",
      image: "/images/Experience the thrill of urban web-slinging as our….jpeg",
      description: "Gripping stories of city mysteries and supernatural encounters in modern life.",
      link: "/comics/urban-legends"
    }
  ];

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
        
        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group border border-white/10 shadow-2xl">

          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
            <FaUpload className="text-2xl sm:text-3xl text-purple-300" />
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Comic Uploader</h2>

          <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
            Easily upload your original comics and novels, with support for registration to manage your library and share with the world.
          </p>

          <Link 
            to="/upload" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 shadow-md"
          >
            Upload Now <FaArrowRight />
          </Link>

        </div>

        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group border border-white/10 shadow-2xl">
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
            <FaBookOpen className="text-2xl sm:text-3xl text-purple-300" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Digital Library</h2>
          
          <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
            Dive into a vast collection of comics, novels, and stories—download favorites, read online, and discover new worlds.
          </p>
          
          <Link 
            to="/library" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 shadow-md"
          >
            Browse Library <FaArrowRight />
          </Link>
        </div>

        <div className="glass-card hover-lift p-6 sm:p-8 rounded-2xl text-center group border border-white/10 shadow-2xl">
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
            <FaUsers className="text-2xl sm:text-3xl text-purple-300" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Creator Community</h2>
          
          <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base">
            Connect with fellow authors and readers, collaborate on stories, and build your following through our registered user network.
          </p>
          
          <Link 
            to="/community" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 shadow-md"
          >
            Join Community <FaArrowRight />
          </Link>
        
        </div>
        
      </section>

      {/* Featured Art Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Featured Comics & Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {featuredStories.map((story) => (
            <div 
              key={story.id}
              className="glass-card hover-lift rounded-2xl overflow-hidden border border-white/10 shadow-2xl group transition-all duration-500 max-w-sm mx-auto"
            >
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-black/10 backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {story.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {story.description}
                </p>
                <Link
                  to={story.link}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 shadow-md"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;