import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Languages, Heart, ArrowRight } from 'lucide-react';
import { getLocation } from '../data/locations';

const LocationDetail = () => {
  const { location } = useParams<{ location: string }>();
  const navigate = useNavigate();
  
  if (!location) {
    navigate('/locations');
    return null;
  }

  const locationData = getLocation(location);
  
  if (!locationData) {
    return (
      <div className="min-h-screen bg-elegant-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold-500 mb-4">Location Not Found</h1>
          <p className="text-gray-300 mb-6">The location you're looking for doesn't exist.</p>
          <Link 
            to="/locations" 
            className="bg-gold-500 text-elegant-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-elegant-900">
      {/* Header */}
      <div className="relative">
        <img 
          src={locationData.image} 
          alt={locationData.name}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/locations"
              className="text-gold-400 hover:text-gold-300 inline-flex items-center mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Locations
            </Link>
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-gold-500 mr-3" />
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gold-500">
                {locationData.name}
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              {locationData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Location Highlights */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gold-500 mb-8">Location Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationData.highlights.map((highlight, index) => (
              <div key={index} className="bg-elegant-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Companions */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gold-500 mb-8">Our Companions in {locationData.name}</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {locationData.companions.map((companion) => (
              <div key={companion.id} className="bg-elegant-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={companion.image} 
                    alt={companion.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-elegant-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Age {companion.age}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-gold-500 mb-3">
                    {companion.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {companion.description}
                  </p>
                  
                  {/* Languages */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Languages className="h-4 w-4 text-gold-500 mr-2" />
                      <span className="text-gold-400 font-semibold text-sm">Languages:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {companion.languages.map((lang) => (
                        <span key={lang} className="bg-elegant-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Heart className="h-4 w-4 text-gold-500 mr-2" />
                      <span className="text-gold-400 font-semibold text-sm">Specialties:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {companion.specialties.map((specialty) => (
                        <span key={specialty} className="bg-crimson-500/20 text-crimson-300 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gold-500 text-elegant-900 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200">
                    Contact for Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Venues */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gold-500 mb-8">Popular Venues in {locationData.name}</h2>
          <div className="bg-elegant-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {locationData.venues.map((venue, index) => (
                <div key={index} className="flex items-center p-4 bg-elegant-700 rounded-lg">
                  <Star className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{venue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transport Information */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gold-500 mb-8">Getting Around</h2>
          <div className="bg-elegant-800 rounded-2xl p-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-gold-400 font-semibold mb-2">Transport Links</h3>
                <p className="text-gray-300 leading-relaxed">{locationData.transport}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-elegant-900 mb-4">
            Ready to Experience {locationData.name}?
          </h2>
          <p className="text-elegant-900 text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to arrange your perfect companionship experience in {locationData.name}
          </p>
          <Link
            to="/contact"
            className="bg-elegant-900 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-elegant-800 transition-colors duration-200 inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default LocationDetail;