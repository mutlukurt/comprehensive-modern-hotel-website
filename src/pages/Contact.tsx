import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: [
        '123 Grand Vista Boulevard',
        'Downtown District',
        'City, State 12345'
      ]
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: [
        'Reservations: +1 (555) 123-4567',
        'Concierge: +1 (555) 123-4568',
        'Front Desk: +1 (555) 123-4569'
      ]
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: [
        'reservations@grandvistahotel.com',
        'concierge@grandvistahotel.com',
        'info@grandvistahotel.com'
      ]
    },
    {
      icon: <Clock size={24} />,
      title: 'Hours',
      details: [
        'Front Desk: 24/7',
        'Concierge: 6:00 AM - 10:00 PM',
        'Restaurants: Varies by location'
      ]
    }
  ];

  const departments = [
    { value: 'reservations', name: 'Reservations' },
    { value: 'concierge', name: 'Concierge Services' },
    { value: 'events', name: 'Events & Meetings' },
    { value: 'dining', name: 'Dining Reservations' },
    { value: 'spa', name: 'Spa & Wellness' },
    { value: 'feedback', name: 'Guest Feedback' },
    { value: 'other', name: 'Other Inquiry' }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for reservations, inquiries, or any assistance you need. We're here to help make your stay perfect.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          required
                        >
                          <option value="">Select a subject</option>
                          {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        placeholder="Please provide details about your inquiry..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
                    <button
                      key={index}
                      className="bg-gray-100 hover:bg-amber-600 hover:text-white text-gray-600 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfectly situated in the heart of the city's downtown district
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg relative h-96">
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
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Location is Perfect</h3>
              <p className="text-lg text-gray-600 mb-6">
                Located in the heart of the city's downtown district, Grand Vista Hotel offers 
                easy access to shopping, dining, entertainment, and business centers. Our prime 
                location puts you at the center of everything the city has to offer.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>2 minutes walk to Metro Station</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>5 minutes to Shopping District</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>10 minutes to Business Center</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>15 minutes to Airport</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>Walking distance to major attractions</span>
                </div>
              </div>
              
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">24/7 Emergency Assistance</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            For any urgent matters or emergencies, our staff is available around the clock to assist you. 
            Your safety and comfort are our top priorities.
          </p>
          <div className="bg-amber-600 rounded-xl p-6 inline-block">
            <p className="text-xl font-bold mb-2">
              Emergency Hotline
            </p>
            <p className="text-2xl font-bold">
              +1 (555) 911-HELP
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;