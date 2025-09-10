import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Bed, Utensils, Camera, Phone } from 'lucide-react';

const Home = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Bed size={48} />,
      title: 'Luxury Rooms',
      description: 'Elegantly appointed rooms and suites with premium amenities',
      link: '/rooms'
    },
    {
      icon: <Utensils size={48} />,
      title: 'Fine Dining',
      description: 'Award-winning restaurants serving international cuisine',
      link: '/dining'
    },
    {
      icon: <Camera size={48} />,
      title: 'Beautiful Spaces',
      description: 'Stunning architecture and breathtaking views throughout',
      link: '/gallery'
    },
    {
      icon: <Phone size={48} />,
      title: '24/7 Service',
      description: 'Round-the-clock concierge and room service',
      link: '/contact'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-[10s]"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Grand Vista Hotel
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Experience luxury and comfort in the heart of paradise
          </p>
          <Link 
            to="/book-now"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up shadow-xl inline-block"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            Book Your Stay
          </Link>
        </div>

        <button 
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Grand Vista Hotel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the premier choice for luxury accommodation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group animate-fade-in-up hover:-translate-y-2 block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-amber-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 15 years, Grand Vista Hotel has been setting the standard for luxury hospitality. 
                Located in the heart of the city, we offer unparalleled service, elegant accommodations, 
                and world-class amenities.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're here for business or leisure, our dedicated team ensures every moment 
                of your stay is memorable. Discover the perfect blend of modern luxury and timeless elegance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-center"
                >
                  Learn More
                </Link>
                <Link 
                  to="/rooms"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-center"
                >
                  View Rooms
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Hotel Lobby"
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Perfect Stay?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book now and experience the luxury and comfort that Grand Vista Hotel has to offer
          </p>
          <Link 
            to="/book-now"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-block"
          >
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;