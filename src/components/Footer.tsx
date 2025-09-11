import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Grand Vista Hotel</h3>
            <p className="text-gray-300 mb-4">
              Experience luxury and comfort in the heart of the city. Your perfect getaway awaits.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2 text-amber-400" />
                <span className="text-sm">123 Grand Vista Boulevard</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2 text-amber-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 text-amber-400" />
                <span className="text-sm">info@grandvistahotel.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Room Service</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Concierge</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Valet Parking</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Airport Shuttle</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Spa & Wellness</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Business Center</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Event Spaces</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {['Facebook', 'Instagram', 'Twitter'].map((social, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Mutlu Kurt. Licensed under MIT License.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <button className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</button>
              <button className="hover:text-amber-400 transition-colors duration-200">Terms of Service</button>
              <button className="hover:text-amber-400 transition-colors duration-200">Accessibility</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;