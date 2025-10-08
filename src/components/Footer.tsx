import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-nav text-white py-8 mt-8">
      <div className="container mx-auto px-4 sm:px-6">
            
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