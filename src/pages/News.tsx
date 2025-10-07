import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const exhibitions = [
    {
      title: "Digital Dreams Exhibition",
      date: "March 15-30, 2025",
      location: "Virtual Reality Gallery",
      description: "Experience the future of digital art through immersive VR installations and interactive exhibits.",
      image: "🎭"
    },
    {
      title: "AI & Creativity Symposium",
      date: "April 5, 2025",
      location: "Online & Physical Venues",
      description: "Join leading artists and technologists exploring the intersection of artificial intelligence and creative expression.",
      image: "🤖"
    },
    {
      title: "Metaverse Art Festival",
      date: "May 20-25, 2025",
      location: "Decentraland & Spatial",
      description: "The largest gathering of digital artists in the metaverse featuring live creation sessions and NFT galleries.",
      image: "🌐"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-6 text-white">Exhibitions & Events</h1>

        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Stay updated with the latest in digital art exhibitions, workshops, and community events.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {exhibitions.map((event, index) => (
          <div 
            key={index}
            className="glass-card hover-lift p-8 rounded-2xl group transition-all duration-500"
          >

            <div className="flex items-start gap-6">

              <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {event.image}
              </div>

              <div className="flex-1">

                <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {event.title}
                </h2>

                <div className="flex items-center gap-4 mb-3 text-white/60">

                  <span className="flex items-center gap-1">
                    📅 {event.date}
                  </span>

                  <span className="flex items-center gap-1">
                    📍 {event.location}
                  </span>

                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <Link 
                  to="#" 
                  className="text-purple-300 hover:text-purple-200 hover-lift inline-flex items-center gap-2 transition-all duration-300 font-semibold"
                >
                  Register Now <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        ))}
      </div>

      {/* Newsletter Section */}
      <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto mt-16 text-center">

        <h2 className="text-3xl font-bold mb-4 text-white">Stay Inspired</h2>

        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for weekly updates on digital art trends, exclusive events, and creator spotlights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">

          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl glass-effect border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
          />

          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover-lift text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap">
            Subscribe
          </button>

        </div>

      </div>
      
    </div>
  );
};

export default News;