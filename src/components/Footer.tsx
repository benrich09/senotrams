import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-nav text-white py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Senotrams</h3>

            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              Bridging stories and technology to create the future of digital comics, novels, and immersive reading experiences.
            </p>

          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Comic Library</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Novel Downloads</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Author Spotlights</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Reading Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Upload Guide</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">User Registration</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Story Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2025 Senotrams. Celebrating the fusion of stories and technology.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
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