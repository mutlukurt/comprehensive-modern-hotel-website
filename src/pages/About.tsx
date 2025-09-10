import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Calendar, Star, Heart, Shield, Globe, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, number: '25+', label: 'Awards Won' },
    { icon: <Users size={32} />, number: '10k+', label: 'Happy Guests' },
    { icon: <Calendar size={32} />, number: '15', label: 'Years Experience' },
    { icon: <Star size={32} />, number: '4.9', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Exceptional Service',
      description: 'We go above and beyond to ensure every guest feels valued and cared for throughout their stay.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Trust & Safety',
      description: 'Your safety and security are our top priorities, with 24/7 monitoring and professional staff.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Global Standards',
      description: 'We maintain international hospitality standards while celebrating local culture and traditions.'
    },
    {
      icon: <Leaf size={40} />,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility through eco-friendly practices and green initiatives.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'General Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'With over 20 years in luxury hospitality, Sarah leads our team with passion and dedication.'
    },
    {
      name: 'Michael Chen',
      position: 'Executive Chef',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Award-winning chef bringing international culinary expertise to our dining experiences.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Guest Relations Director',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Ensuring every guest receives personalized attention and exceptional service throughout their stay.'
    }
  ];

  const reviews = [
    {
      text: "Absolutely stunning hotel with exceptional service. The staff went above and beyond to make our anniversary celebration unforgettable. Every detail was perfect.",
      author: "Jennifer & David Thompson",
      location: "New York",
      rating: 5
    },
    {
      text: "The rooms are beautifully appointed and the amenities are top-notch. The spa was incredible and the dining exceeded all expectations. We'll definitely be returning!",
      author: "Maria Santos",
      location: "San Francisco",
      rating: 5
    },
    {
      text: "Perfect location, incredible food, and the most comfortable beds. The concierge team helped us plan the perfect itinerary. A truly luxurious experience from start to finish.",
      author: "Robert & Lisa Chen",
      location: "Los Angeles",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Grand Vista Hotel
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 15 years, we have been setting the standard for luxury hospitality, creating unforgettable experiences for guests from around the world
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Grand Vista Hotel began as a vision to create more than just accommodation – we wanted to craft 
                experiences that would remain in our guests' hearts forever. Located in the heart of the city, 
                we offer unparalleled service, elegant accommodations, and world-class amenities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to excellence has earned us numerous awards and the loyalty of thousands 
                of guests who return year after year. From business travelers to families on vacation, 
                we provide personalized experiences that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're here for business or leisure, our dedicated team ensures every moment 
                of your stay is memorable. Discover the perfect blend of modern luxury and timeless elegance 
                that defines the Grand Vista experience.
              </p>
              
              <Link 
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
              >
                Get in Touch
              </Link>
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

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group animate-fade-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-amber-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-amber-600 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind your exceptional experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Grand Vista Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied guests who have made Grand Vista Hotel their home away from home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-block"
            >
              Book Your Stay
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;