import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Tv, Coffee, Bath } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      price: '$299',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['King Size Bed', 'Ocean View', 'Private Balcony', 'Mini Bar'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />],
      description: 'Our most luxurious accommodation featuring panoramic ocean views, a spacious living area, and premium amenities for the ultimate comfort experience.'
    },
    {
      id: 2,
      name: 'Executive Room',
      price: '$199',
      image: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Queen Size Bed', 'City View', 'Work Desk', 'Premium WiFi'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />],
      description: 'Perfect for business travelers, featuring a dedicated workspace, high-speed internet, and stunning city views from every window.'
    },
    {
      id: 3,
      name: 'Standard Room',
      price: '$149',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Double Bed', 'Garden View', 'Free WiFi', 'Air Conditioning'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />],
      description: 'Comfortable and well-appointed rooms with garden views, perfect for leisure travelers seeking quality accommodation at great value.'
    },
    {
      id: 4,
      name: 'Presidential Suite',
      price: '$599',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Master Bedroom', 'Living Room', 'Dining Area', 'Butler Service'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />],
      description: 'The pinnacle of luxury with separate living and dining areas, master bedroom, and dedicated butler service for an unforgettable experience.'
    },
    {
      id: 5,
      name: 'Family Room',
      price: '$249',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Two Double Beds', 'Sofa Bed', 'Kitchenette', 'Kids Amenities'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />],
      description: 'Spacious family accommodation with multiple sleeping arrangements, kitchenette facilities, and special amenities for children.'
    },
    {
      id: 6,
      name: 'Junior Suite',
      price: '$179',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Queen Bed', 'Sitting Area', 'Marble Bathroom', 'Complimentary Breakfast'],
      icons: [<Wifi key="wifi" size={20} />, <Tv key="tv" size={20} />, <Coffee key="coffee" size={20} />, <Bath key="bath" size={20} />],
      description: 'Elegant suite with separate sitting area, luxurious marble bathroom, and complimentary breakfast for a perfect start to your day.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rooms & Suites
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our elegantly appointed rooms and suites, each designed for comfort and luxury
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div 
                key={room.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.name}</h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {room.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    {room.icons.map((icon, idx) => (
                      <div key={idx} className="text-amber-600 hover:scale-125 transition-transform duration-200">
                        {icon}
                      </div>
                    ))}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/book-now"
                    className="w-full bg-gray-900 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 block text-center mt-auto"
                  >
                    Book This Room
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take advantage of our exclusive deals and packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Bird Special</h3>
              <p className="text-gray-600 mb-4">Book 30 days in advance and save 20% on your stay</p>
              <div className="text-3xl font-bold text-amber-600 mb-4">20% OFF</div>
              <Link 
                to="/book-now"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Book Now
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Extended Stay</h3>
              <p className="text-gray-600 mb-4">Stay 7 nights or more and get the 8th night free</p>
              <div className="text-3xl font-bold text-amber-600 mb-4">1 Night FREE</div>
              <Link 
                to="/book-now"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Book Now
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekend Getaway</h3>
              <p className="text-gray-600 mb-4">Friday to Sunday package with breakfast included</p>
              <div className="text-3xl font-bold text-amber-600 mb-4">From $399</div>
              <Link 
                to="/book-now"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;