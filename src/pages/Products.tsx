import React from 'react';

const Products: React.FC = () => {
  const artTools = [
    {
      name: "Digital Brush Pro",
      description: "AI-enhanced digital painting tool with pressure sensitivity and style transfer",
      price: "$299",
      emoji: "🖌️",
      features: ["AI Style Transfer", "4K Resolution", "Real-time Collaboration"]
    },
    {
      name: "AR Canvas Glasses",
      description: "See your art come to life in augmented reality with our smart glasses",
      price: "$599",
      emoji: "👓",
      features: ["360° AR View", "Hand Tracking", "Multi-layer Display"]
    },
    {
      name: "Neural Palette",
      description: "Color intelligence tool that suggests perfect palettes using machine learning",
      price: "$149",
      emoji: "🎨",
      features: ["AI Color Matching", "Trend Analysis", "Accessibility Tools"]
    },
    {
      name: "3D Sculpt VR",
      description: "Virtual reality sculpting tool for creating immersive 3D artwork",
      price: "$399",
      emoji: "🗿",
      features: ["VR Integration", "Real-time Rendering", "Export to Metaverse"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-6 text-white">Creative Tools & Platforms</h1>

        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Discover our suite of artistic technologies designed to empower creators and transform digital expression.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {artTools.map((tool, index) => (
          <div 
            key={index}
            className="glass-card hover-lift p-8 rounded-2xl group transition-all duration-500"
          >

            <div className="flex items-start justify-between mb-6">

              <div className="text-4xl">{tool.emoji}</div>

              <span className="glass-effect px-4 py-2 rounded-full text-purple-300 text-sm font-semibold">
                {tool.price}
              </span>

            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
              {tool.name}
            </h2>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              {tool.description}
            </p>

            <ul className="mb-6 space-y-2">
              {tool.features.map((feature, idx) => (

                <li key={idx} className="text-white/60 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {feature}
                </li>

              ))}
            </ul>

            <button className="glass-effect hover-lift text-white w-full py-3 rounded-xl font-semibold border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              Start Creating
            </button>

          </div>

        ))}
      </div>

      {/* Subscription Section */}
      <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto mt-16 text-center">

        <h2 className="text-3xl font-bold mb-4 text-white">Senotrams Pro Subscription</h2>

        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Get unlimited access to all our creative tools, premium features, and exclusive content.
        </p>

        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover-lift text-white px-8 py-4 rounded-full font-semibold text-lg">
          Start Free Trial
        </button>

      </div>
      
    </div>
  );
};

export default Products;    