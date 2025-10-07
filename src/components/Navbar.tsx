import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass-nav text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">

        <NavLink to="/" className="text-3xl font-bold gradient-text hover-lift">
         Senotrams
        </NavLink>


        <div className="space-x-8">

          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover-lift px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? "glass-effect text-purple-300" 
                  : "hover:bg-white/10 text-white/80"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `hover-lift px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? "glass-effect text-purple-300" 
                  : "hover:bg-white/10 text-white/80"
              }`
            }
          >
            Art Tools
          </NavLink>

          <NavLink 
            to="/news" 
            className={({ isActive }) => 
              `hover-lift px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? "glass-effect text-purple-300" 
                  : "hover:bg-white/10 text-white/80"
              }`
            }
          >
            Exhibitions
          </NavLink>

          <NavLink 
            to="/leadership" 
            className={({ isActive }) => 
              `hover-lift px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? "glass-effect text-purple-300" 
                  : "hover:bg-white/10 text-white/80"
              }`
            }
          >
            Artists
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;