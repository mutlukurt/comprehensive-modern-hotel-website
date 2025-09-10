import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for reservations, inquiries, or any assistance you need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    123 Grand Vista Boulevard<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">
                    Reservations: +1 (555) 123-4567<br />
                    Concierge: +1 (555) 123-4568<br />
                    Front Desk: +1 (555) 123-4569
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">
                    reservations@grandvistahotel.com<br />
                    concierge@grandvistahotel.com<br />
                    info@grandvistahotel.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Hours</h4>
                  <p className="text-gray-600">
                    Front Desk: 24/7<br />
                    Concierge: 6:00 AM - 10:00 PM<br />
                    Restaurants: Varies by location
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
                  <button
                    key={index}
                    className="bg-gray-100 hover:bg-amber-600 hover:text-white text-gray-600 font-bold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Map/Image */}
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Hotel Location"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p className="text-lg font-bold">Prime Downtown Location</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Our Location</h4>
                <p className="text-gray-600 mb-4">
                  Located in the heart of the city's downtown district, Grand Vista Hotel offers 
                  easy access to shopping, dining, entertainment, and business centers.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 2 minutes walk to Metro Station</p>
                  <p>• 5 minutes to Shopping District</p>
                  <p>• 10 minutes to Business Center</p>
                  <p>• 15 minutes to Airport</p>
                </div>
                <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">24/7 Emergency Assistance</h3>
          <p className="text-lg text-gray-300 mb-4">
            For any urgent matters or emergencies, our staff is available around the clock
          </p>
          <p className="text-xl font-bold text-amber-400">
            Emergency Hotline: +1 (555) 911-HELP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;