import React from 'react';
import { Link } from 'react-router-dom';
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
      description: 'Elegant dining experience with a menu featuring international cuisine and local specialties. Our award-winning chef creates culinary masterpieces using the finest ingredients.',
      specialties: ['Wagyu Beef', 'Fresh Seafood', 'Vegetarian Options', 'Wine Pairing']
    },
    {
      name: 'Azure Lounge',
      cuisine: 'Cocktails & Light Bites',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      hours: '4:00 PM - 2:00 AM',
      location: 'Rooftop Level',
      phone: '+1 (555) 123-4568',
      description: 'Sophisticated rooftop bar with panoramic city views and craft cocktails. Perfect for evening relaxation with live music on weekends.',
      specialties: ['Craft Cocktails', 'Premium Spirits', 'Tapas', 'Live Music']
    },
    {
      name: 'Garden Café',
      cuisine: 'Casual Dining & Coffee',
      image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      hours: '6:00 AM - 10:00 PM',
      location: 'Garden Level',
      phone: '+1 (555) 123-4569',
      description: 'Relaxed atmosphere perfect for breakfast, lunch, or a quick coffee break. Features fresh pastries, sandwiches, and specialty coffee drinks.',
      specialties: ['Artisan Coffee', 'Fresh Pastries', 'Healthy Salads', 'All-Day Breakfast']
    }
  ];

  const menuHighlights = [
    {
      category: 'Breakfast',
      items: ['Continental Breakfast Buffet', 'Eggs Benedict', 'Fresh Fruit Platter', 'Artisan Pastries']
    },
    {
      category: 'Lunch',
      items: ['Grilled Salmon', 'Caesar Salad', 'Gourmet Burgers', 'Pasta Primavera']
    },
    {
      category: 'Dinner',
      items: ['Wagyu Steak', 'Lobster Thermidor', 'Vegetarian Tasting Menu', 'Chef\'s Special']
    },
    {
      category: 'Beverages',
      items: ['Premium Wine Selection', 'Craft Cocktails', 'Fresh Juices', 'Specialty Coffee']
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dining Experiences
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Savor exceptional cuisine at our award-winning restaurants and bars, where culinary artistry meets impeccable service
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Restaurants
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each venue offers a unique atmosphere and carefully crafted menu
            </p>
          </div>

          <div className="space-y-16">
            {restaurants.map((restaurant, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                  <p className="text-amber-600 font-semibold text-lg mb-4">{restaurant.cuisine}</p>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{restaurant.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="mr-3 text-amber-600" />
                      <span>{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-3 text-amber-600" />
                      <span>{restaurant.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone size={18} className="mr-3 text-amber-600" />
                      <span>{restaurant.phone}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/book-now"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
                  >
                    Make Reservation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Menu Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A taste of what awaits you at our restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuHighlights.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Service */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">24/7 Room Service</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Enjoy our full menu from the comfort of your room, available around the clock with prompt and courteous service
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <p className="text-gray-300">Available Anytime</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">30 min</div>
              <p className="text-gray-300">Average Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">100+</div>
              <p className="text-gray-300">Menu Items</p>
            </div>
          </div>

          <Link 
            to="/book-now"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-block"
          >
            Order Room Service
          </Link>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Private Dining
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Host your special events in our elegant private dining rooms. Perfect for business meetings, 
                celebrations, or intimate gatherings with personalized service and custom menus.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Accommodates 8-50 guests
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Custom menu planning
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Dedicated service staff
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Audio/visual equipment available
                </li>
              </ul>
              
              <Link 
                to="/contact"
                className="bg-gray-900 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Inquire About Private Dining
              </Link>
            </div>
            
            <div className="animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Private Dining Room"
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;