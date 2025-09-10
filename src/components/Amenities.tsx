import React from 'react';
import { Waves, Dumbbell, Utensils, Car, Shield, Headphones } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Waves size={40} />,
      title: 'Swimming Pool',
      description: 'Infinity pool with stunning city views'
    },
    {
      icon: <Dumbbell size={40} />,
      title: 'Fitness Center',
      description: 'State-of-the-art equipment available 24/7'
    },
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
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled comfort with our premium facilities and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
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

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Spa & Wellness', 'Business Center', 'Event Spaces', 'Airport Shuttle', 'Laundry Service', 'Pet Friendly', 'Kids Club', 'WiFi Throughout'].map((service, index) => (
                <div key={index} className="text-gray-600 hover:text-amber-600 transition-colors duration-200 cursor-pointer">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;