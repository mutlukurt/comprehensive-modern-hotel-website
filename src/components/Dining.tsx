import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

const Dining = () => {
  const restaurants = [
    {
      name: 'The Grand Terrace',
      cuisine: 'International Fine Dining',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      hours: '6:00 AM - 11:00 PM',
      location: 'Ground Floor',
      phone: '+1 (555) 123-4567',
      description: 'Elegant dining experience with a menu featuring international cuisine and local specialties.'
    },
    {
      name: 'Azure Lounge',
      cuisine: 'Cocktails & Light Bites',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      hours: '4:00 PM - 2:00 AM',
      location: 'Rooftop Level',
      phone: '+1 (555) 123-4568',
      description: 'Sophisticated rooftop bar with panoramic city views and craft cocktails.'
    },
    {
      name: 'Garden Café',
      cuisine: 'Casual Dining & Coffee',
      image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      hours: '6:00 AM - 10:00 PM',
      location: 'Garden Level',
      phone: '+1 (555) 123-4569',
      description: 'Relaxed atmosphere perfect for breakfast, lunch, or a quick coffee break.'
    }
  ];

  return (
    <section id="dining" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dining Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Savor exceptional cuisine at our award-winning restaurants and bars
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                <p className="text-amber-600 font-semibold mb-3">{restaurant.cuisine}</p>
                <p className="text-gray-600 mb-4 flex-grow">{restaurant.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2 text-amber-600" />
                    <span className="text-sm">{restaurant.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-amber-600" />
                    <span className="text-sm">{restaurant.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={16} className="mr-2 text-amber-600" />
                    <span className="text-sm">{restaurant.phone}</span>
                  </div>
                </div>

                <button 
                  onClick={() => document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Make Reservation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">24/7 Room Service</h3>
          <p className="text-xl text-gray-300 mb-6">
            Enjoy our full menu from the comfort of your room, available around the clock
          </p>
          <button 
            onClick={() => document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Order Room Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dining;