import React from 'react';
import { Award, Users, Calendar, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, number: '25+', label: 'Awards Won' },
    { icon: <Users size={32} />, number: '10k+', label: 'Happy Guests' },
    { icon: <Calendar size={32} />, number: '15', label: 'Years Experience' },
    { icon: <Star size={32} />, number: '4.9', label: 'Average Rating' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Grand Vista Hotel
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, Grand Vista Hotel has been setting the standard for luxury hospitality. 
              Located in the heart of the city, we offer unparalleled service, elegant accommodations, 
              and world-class amenities.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to excellence has earned us numerous awards and the loyalty of thousands 
              of guests who return year after year. From business travelers to families on vacation, 
              we provide personalized experiences that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're here for business or leisure, our dedicated team ensures every moment 
              of your stay is memorable. Discover the perfect blend of modern luxury and timeless elegance.
            </p>
            
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>
          
          <div className="animate-fade-in-right">
            <img 
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Hotel Lobby"
              className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h3>
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
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">What Our Guests Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Absolutely stunning hotel with exceptional service. The staff went above and beyond to make our stay memorable.",
                author: "Sarah Johnson",
                location: "New York"
              },
              {
                text: "The rooms are beautifully appointed and the amenities are top-notch. We'll definitely be returning!",
                author: "Michael Chen",
                location: "San Francisco"
              },
              {
                text: "Perfect location, incredible food, and the most comfortable beds. A truly luxurious experience.",
                author: "Emily Davis",
                location: "Los Angeles"
              }
            ].map((review, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;