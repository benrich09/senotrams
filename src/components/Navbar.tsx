import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav text-white py-4 px-4 sm:px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl sm:text-3xl font-bold gradient-text hover-lift">
          Senotrams
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
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
            to="/about" 
            className={({ isActive }) => 
              `hover-lift px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? "glass-effect text-purple-300" 
                  : "hover:bg-white/10 text-white/80"
              }`
            }
          >
            About
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `hover-lift px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? "glass-effect text-purple-300" 
                  : "hover:bg-white/10 text-white/80"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/50 backdrop-blur-sm py-4">
          <div className="flex flex-col space-y-4 px-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `hover-lift px-4 py-2 rounded-full transition-all duration-300 text-center ${
                  isActive 
                    ? "glass-effect text-purple-300" 
                    : "hover:bg-white/10 text-white/80"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink> 

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `hover-lift px-4 py-2 rounded-full transition-all duration-300 text-center ${
                  isActive 
                    ? "glass-effect text-purple-300" 
                    : "hover:bg-white/10 text-white/80"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `hover-lift px-4 py-2 rounded-full transition-all duration-300 text-center ${
                  isActive 
                    ? "glass-effect text-purple-300" 
                    : "hover:bg-white/10 text-white/80"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;