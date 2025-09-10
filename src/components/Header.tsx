import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Book Now', path: '/book-now' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  const handleNavigation = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}>
              Grand Vista Hotel
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-amber-600'
                    : isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden space-x-4">
            {navigation.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium text-sm transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-amber-600'
                    : isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {item.name === 'Book Now' ? 'Book' : item.name}
              </Link>
            ))}
            <div className="relative group">
              <button
                className={`font-medium text-sm transition-all duration-300 hover:scale-105 ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                More
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {navigation.slice(6).map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          {/* Mobile menu button */}
          <button
            className={`lg:hidden md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-white shadow-lg rounded-lg mt-2 py-4 max-h-80 overflow-y-auto">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-4 py-3 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;