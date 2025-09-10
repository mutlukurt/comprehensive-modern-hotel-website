import React from 'react';
import { Wifi, Tv, Coffee, Bath } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      price: '$299',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['King Size Bed', 'Ocean View', 'Private Balcony', 'Mini Bar'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />]
    },
    {
      id: 2,
      name: 'Executive Room',
      price: '$199',
      image: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Queen Size Bed', 'City View', 'Work Desk', 'Premium WiFi'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />]
    },
    {
      id: 3,
      name: 'Standard Room',
      price: '$149',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Double Bed', 'Garden View', 'Free WiFi', 'Air Conditioning'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rooms & Suites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our elegantly appointed rooms and suites, each designed for comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-bold">
                  {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.name}</h3>
                
                <div className="flex items-center justify-center space-x-4 mb-4 p-3 bg-gray-50 rounded-lg">
                  {room.icons.map((icon, idx) => (
                    <div key={idx} className="text-amber-600 hover:scale-125 transition-transform duration-200">
                      {icon}
                    </div>
                  ))}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {room.amenities.map((amenity, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      {amenity}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-900 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;