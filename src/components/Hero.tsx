import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToRooms = () => {
    const element = document.getElementById('rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-[10s]"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Grand Vista Hotel
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Experience luxury and comfort in the heart of paradise
        </p>
        <button 
          onClick={() => document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up shadow-xl"
          style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
        >
          Book Your Stay
        </button>
      </div>

      <button 
        onClick={scrollToRooms}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;