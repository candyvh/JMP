import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-[#212427] sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src="/assets/Logo2.svg" alt="Logo" className="h-10" />
            </a>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <a href="/" className="px-3 py-2 rounded-md text-base font-medium text-white hover:underline hover:underline-offset-2">Home</a>
            <a href="/expedition" className="px-3 py-2 rounded-md text-base font-medium text-white hover:underline hover:underline-offset-2">Expedition</a>
            <a href="/construction" className="px-3 py-2 rounded-md text-base font-medium text-white hover:underline hover:underline-offset-2">Construction</a>
            <a href="/about" className="px-3 py-2 rounded-md text-base font-medium text-white hover:underline hover:underline-offset-2">About Us</a>
            <a href="/contact" className="px-3 py-2 rounded-md text-base font-medium text-white hover:underline hover:underline-offset-2">Contact Us</a>
          </div>
          <div className="sm:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-2">Home</a>
            <a href="/expedition" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-2">Expedition</a>
            <a href="/construction" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-2">Construction</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-2">About Us</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-2">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;