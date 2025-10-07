import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-nav text-white py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Senotrams</h3>

            <p className="text-white/70 leading-relaxed">
              Bridging art and technology to create the future of digital expression and immersive experiences.
            </p>

          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Digital Gallery</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">AR Experiences</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Artist Spotlights</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            &copy; 2025 Senotrams. Celebrating the fusion of art and technology.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-white/60 hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-purple-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-purple-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;