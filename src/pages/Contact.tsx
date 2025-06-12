import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
    preferredContact: 'email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-elegant-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-elegant-900 via-elegant-800 to-elegant-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gold-500 mb-6">
            Contact London Elite
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Begin your journey with London's premier companionship service. 
            Discretion and professionalism guaranteed.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-elegant-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <Send className="h-6 w-6 text-gold-500 mr-3" />
              <h2 className="font-serif text-3xl font-bold text-gold-500">Get In Touch</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gold-400 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-elegant-700 border border-elegant-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gold-400 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-elegant-700 border border-elegant-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gold-400 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-elegant-700 border border-elegant-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="+44 20 xxxx xxxx"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-gold-400 font-semibold mb-2">
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-elegant-700 border border-elegant-600 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a location</option>
                    <option value="mayfair">Mayfair</option>
                    <option value="kensington">Kensington</option>
                    <option value="chelsea">Chelsea</option>
                    <option value="canary-wharf">Canary Wharf</option>
                    <option value="covent-garden">Covent Garden</option>
                    <option value="shoreditch">Shoreditch</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-gold-400 font-semibold mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="text-gold-500 focus:ring-gold-500"
                    />
                    <span className="ml-2 text-gray-300">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="text-gold-500 focus:ring-gold-500"
                    />
                    <span className="ml-2 text-gray-300">Phone</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gold-400 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-elegant-700 border border-elegant-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your requirements, preferred dates, and any specific preferences..."
                ></textarea>
              </div>

              <div className="bg-elegant-700 p-4 rounded-lg">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    All communications are strictly confidential. We respect your privacy and 
                    will never share your information with third parties.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 text-elegant-900 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-elegant-800 rounded-2xl p-8 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-gold-500 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gold-400 font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@londonelite.co.uk</p>
                    <p className="text-gray-400 text-sm mt-1">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gold-400 font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+44 20 7946 0958</p>
                    <p className="text-gray-400 text-sm mt-1">24/7 availability</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gold-400 font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Central London, UK</p>
                    <p className="text-gray-400 text-sm mt-1">Serving all London areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gold-400 font-semibold mb-1">Availability</h4>
                    <p className="text-gray-300">24 hours, 7 days a week</p>
                    <p className="text-gray-400 text-sm mt-1">Advance booking recommended</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-elegant-800 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-gold-500 mr-3" />
                <h3 className="font-serif text-2xl font-bold text-gold-500">Privacy & Discretion</h3>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Your privacy is our absolute priority. All communications and personal information 
                  are handled with the utmost confidentiality and discretion.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    Secure, encrypted communication channels
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    Strict confidentiality agreements with all staff
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    No information sharing with third parties
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    Professional screening and verification processes
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-elegant-800 rounded-2xl p-8 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-gold-500 mb-6">Quick Links</h3>
              
              <div className="space-y-3">
                <a href="/blog/how-to-book-london-escorts-2025" className="block text-gold-400 hover:text-gold-300 transition-colors">
                  → How to Book London Escorts in 2025
                </a>
                <a href="/locations" className="block text-gold-400 hover:text-gold-300 transition-colors">
                  → Browse All Locations
                </a>
                <a href="/blog" className="block text-gold-400 hover:text-gold-300 transition-colors">
                  → Read Our Blog
                </a>
                <a href="/about" className="block text-gold-400 hover:text-gold-300 transition-colors">
                  → About London Elite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;