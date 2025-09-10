import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Dumbbell, Utensils, Car, Shield, Headphones, Wifi, Coffee, Space as Spa, Users } from 'lucide-react';

const Amenities = () => {
  const mainAmenities = [
    {
      icon: <Waves size={48} />,
      title: 'Swimming Pool',
      description: 'Infinity pool with stunning city views and poolside service',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: <Dumbbell size={48} />,
      title: 'Fitness Center',
      description: 'State-of-the-art equipment available 24/7 with personal trainers',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: <Spa size={48} />,
      title: 'Spa & Wellness',
      description: 'Full-service spa offering massages, facials, and wellness treatments',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: <Users size={48} />,
      title: 'Event Spaces',
      description: 'Elegant ballrooms and meeting rooms for weddings and conferences',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const serviceAmenities = [
    {
      icon: <Utensils size={40} />,
      title: 'Fine Dining',
      description: 'Award-winning restaurants and room service'
    },
    {
      icon: <Car size={40} />,
      title: 'Valet Parking',
      description: 'Complimentary valet service for all guests'
    },
    {
      icon: <Shield size={40} />,
      title: '24/7 Security',
      description: 'Round-the-clock security and surveillance'
    },
    {
      icon: <Headphones size={40} />,
      title: 'Concierge',
      description: 'Personal assistance for all your needs'
    },
    {
      icon: <Wifi size={40} />,
      title: 'High-Speed WiFi',
      description: 'Complimentary internet throughout the hotel'
    },
    {
      icon: <Coffee size={40} />,
      title: 'Business Center',
      description: 'Fully equipped workspace with printing services'
    }
  ];

  const additionalServices = [
    'Airport Shuttle Service',
    'Laundry & Dry Cleaning',
    'Pet-Friendly Accommodations',
    'Kids Club & Playground',
    'Gift Shop & Boutique',
    'Currency Exchange',
    'Tour & Travel Desk',
    'Babysitting Services',
    'Medical Services',
    'Luggage Storage',
    'Wake-up Service',
    'Newspaper Delivery'
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            World-Class Amenities
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience unparalleled comfort with our premium facilities and services designed for your ultimate satisfaction
          </p>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our signature amenities that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainAmenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                
                <div className="p-8">
                  <div className="text-amber-600 mb-4 flex items-center">
                    <div className="mr-4">
                      {amenity.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{amenity.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hotel Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to make your stay comfortable and convenient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAmenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group animate-fade-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-amber-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail taken care of for your perfect stay
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center text-gray-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Information */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Facility Hours
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Most of our amenities are available 24/7 for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Swimming Pool</h3>
              <p className="text-gray-300">6:00 AM - 10:00 PM</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Fitness Center</h3>
              <p className="text-gray-300">24/7 Access</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Spa & Wellness</h3>
              <p className="text-gray-300">9:00 AM - 9:00 PM</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Business Center</h3>
              <p className="text-gray-300">24/7 Access</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-block"
            >
              Contact Us for More Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;