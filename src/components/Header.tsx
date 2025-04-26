import React, { useState, useEffect } from 'react';
import { Key } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300 py-4
        ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-white">
          <Key className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold">Keymaster</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#vision" className="text-gray-300 hover:text-white transition-colors">Vision</a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#footer" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          {/* <a 
            href="#" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a> */}
        </nav>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;