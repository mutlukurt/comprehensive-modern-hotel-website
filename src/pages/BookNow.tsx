import React, { useState } from 'react';
import { Calendar, Users, MapPin, CreditCard, Shield, Clock } from 'lucide-react';

const BookNow = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'standard',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
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
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '2',
        roomType: 'standard',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
    }, 5000);
  };

  const roomTypes = [
    { value: 'standard', name: 'Standard Room', price: 149 },
    { value: 'junior', name: 'Junior Suite', price: 179 },
    { value: 'executive', name: 'Executive Room', price: 199 },
    { value: 'family', name: 'Family Room', price: 249 },
    { value: 'deluxe', name: 'Deluxe Suite', price: 299 },
    { value: 'presidential', name: 'Presidential Suite', price: 599 }
  ];

  const selectedRoom = roomTypes.find(room => room.value === formData.roomType);

  if (isSubmitted) {
    return (
      <div className="pt-16">
        <section className="py-20 bg-gray-900 text-white min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Booking Confirmed!</h1>
                <p className="text-xl mb-6">Thank you for choosing Grand Vista Hotel. We've received your reservation request.</p>
                <p className="text-lg mb-8">A confirmation email has been sent to your email address. Our team will contact you within 24 hours to confirm your booking details and arrange any special requests.</p>
              </div>
              
              <div className="bg-amber-600 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Reservation Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="font-semibold">Reservation ID:</p>
                    <p>GVH-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Guest Name:</p>
                    <p>{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Check-in:</p>
                    <p>{formData.checkIn}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Check-out:</p>
                    <p>{formData.checkOut}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Room Type:</p>
                    <p>{selectedRoom?.name}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Guests:</p>
                    <p>{formData.guests} {parseInt(formData.guests) === 1 ? 'Guest' : 'Guests'}</p>
                  </div>
                </div>
              </div>

              <div className="text-gray-300">
                <p className="mb-4">Need to make changes to your reservation?</p>
                <p>Call us at <span className="text-amber-400 font-semibold">+1 (555) 123-4567</span></p>
                <p>or email <span className="text-amber-400 font-semibold">reservations@grandvistahotel.com</span></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Your Stay
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your luxury experience at Grand Vista Hotel. Complete the form below to secure your perfect getaway.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-amber-600 text-white p-6">
                <h2 className="text-2xl font-bold text-center">Reservation Details</h2>
              </div>

              <div className="p-8">
                {/* Date and Guest Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Users size={16} className="inline mr-2" />
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Room Type Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-4">
                    <MapPin size={16} className="inline mr-2" />
                    Room Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {roomTypes.map((room) => (
                      <div
                        key={room.value}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                          formData.roomType === room.value
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, roomType: room.value }))}
                      >
                        <input
                          type="radio"
                          name="roomType"
                          value={room.value}
                          checked={formData.roomType === room.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <h3 className="font-bold text-gray-900 mb-1">{room.name}</h3>
                          <p className="text-amber-600 font-bold">${room.price}/night</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Guest Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Any special requests or preferences (room location, dietary requirements, celebration arrangements, etc.)"
                    />
                  </div>
                </div>

                {/* Security & Payment Info */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center space-x-8 text-gray-600">
                    <div className="flex items-center">
                      <Shield size={20} className="mr-2 text-green-600" />
                      <span className="text-sm">Secure Booking</span>
                    </div>
                    <div className="flex items-center">
                      <CreditCard size={20} className="mr-2 text-blue-600" />
                      <span className="text-sm">No Payment Required</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={20} className="mr-2 text-amber-600" />
                      <span className="text-sm">Free Cancellation</span>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-6">
                    By submitting this form, you agree to our{' '}
                    <button className="text-amber-600 hover:underline">Terms of Service</button> and{' '}
                    <button className="text-amber-600 hover:underline">Privacy Policy</button>.
                    No payment is required at this time. We will contact you to confirm your reservation.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      'Complete Booking Request'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Book Direct?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enjoy exclusive benefits when you book directly with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Rate Guarantee</h3>
              <p className="text-gray-600">We guarantee the lowest rates when you book directly with us</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Perks</h3>
              <p className="text-gray-600">Complimentary upgrades, late checkout, and special amenities</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Cancellation</h3>
              <p className="text-gray-600">Free cancellation up to 24 hours before arrival</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;