import React from 'react';

const Leadership: React.FC = () => {
  const artists = [
    {
      name: "Elena Rodriguez",
      role: "Digital Art Director",
      bio: "Pioneer in generative art and AI-assisted creativity with 15+ years in digital media.",
      specialty: "Generative Art & AI",
      avatar: "👩‍🎨",
      projects: ["Neural Canvases", "Algorithmic Beauty"]
    },
    {
      name: "Marcus Chen",
      role: "XR Experience Designer",
      bio: "Creating immersive mixed reality experiences that blend physical and digital worlds seamlessly.",
      specialty: "Mixed Reality",
      avatar: "👨‍💻",
      projects: ["AR Gallery", "Virtual Sculpture Garden"]
    },
    {
      name: "Sophie Williams",
      role: "Creative Technologist",
      bio: "Bridging the gap between art and technology through interactive installations and digital tools.",
      specialty: "Interactive Art",
      avatar: "🌟",
      projects: ["Touch Canvas", "Motion Paint"]
    },
    {
      name: "Alex Thompson",
      role: "Community Curator",
      bio: "Building and nurturing our global community of digital artists and creative innovators.",
      specialty: "Community & NFTs",
      avatar: "🤝",
      projects: ["ArtTech Collective", "Digital Art Fund"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-6 text-white">Meet Our Creative Team</h1>

        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Visionary artists and technologists pushing the boundaries of digital expression and creative innovation.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {artists.map((artist, index) => (
          <div 
            key={index}
            className="glass-card hover-lift p-8 rounded-2xl group transition-all duration-500"
          >

            <div className="flex items-start gap-6 mb-6">

              <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {artist.avatar}
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {artist.name}
                </h2>
                <p className="text-purple-300 font-semibold mb-1">{artist.role}</p>
                <p className="text-white/60 text-sm">{artist.specialty}</p>
              </div>

            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              {artist.bio}
            </p>

            <div className="mb-6">

              <h3 className="text-white font-semibold mb-3">Featured Projects:</h3>

              <div className="flex flex-wrap gap-2">

                {artist.projects.map((project, idx) => (
                  <span 
                    key={idx}
                    className="glass-effect px-3 py-1 rounded-full text-white/70 text-sm border border-white/10"
                  >
                    {project}
                  </span>

                ))}
              </div>

            </div>

            <div className="flex gap-3">

              <button className="flex-1 glass-effect hover-lift text-white py-2 rounded-xl text-sm font-semibold border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                View Portfolio
              </button>

              <button className="flex-1 glass-effect hover-lift text-white py-2 rounded-xl text-sm font-semibold border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                Follow
              </button>

            </div>

          </div>

        ))}
      </div>

      {/* Join Team Section */}
      <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto mt-16 text-center">

        <h2 className="text-3xl font-bold mb-4 text-white">Join Our Creative Journey</h2>

        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          We're always looking for talented artists, developers, and visionaries to join our mission of redefining digital art.
        </p>

        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover-lift text-white px-8 py-4 rounded-full font-semibold text-lg">
          View Open Positions
        </button>

      </div>
      
    </div>
  );
};

export default Leadership;