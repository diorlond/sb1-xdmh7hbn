import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Users, Star } from 'lucide-react';
import { londonLocations } from '../data/locations';

const Locations = () => {
  return (
    <div className="min-h-screen bg-elegant-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-gold-500 mb-6">
            London Locations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover sophisticated companionship services across London's most prestigious districts. 
            Each location offers unique experiences with carefully selected companions.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {londonLocations.map((location) => (
            <div key={location.id} className="bg-elegant-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-elegant-900 px-4 py-2 rounded-full font-semibold flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {location.name}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-elegant-800/90 text-gold-500 px-3 py-1 rounded-full text-sm flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {location.companions.length} Companions
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="font-serif text-3xl font-bold text-gold-500 mb-4">
                  {location.name}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {location.description}
                </p>
                
                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-gold-400 font-semibold mb-3">Location Highlights:</h3>
                  <ul className="space-y-2">
                    {location.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start">
                        <Star className="h-4 w-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Companions Preview */}
                <div className="mb-6">
                  <h3 className="text-gold-400 font-semibold mb-3">Featured Companions:</h3>
                  <div className="flex -space-x-2">
                    {location.companions.slice(0, 3).map((companion) => (
                      <div key={companion.id} className="relative">
                        <img 
                          src={companion.image} 
                          alt={companion.name}
                          className="w-12 h-12 rounded-full border-2 border-gold-500 object-cover"
                        />
                      </div>
                    ))}
                    {location.companions.length > 3 && (
                      <div className="w-12 h-12 rounded-full border-2 border-gold-500 bg-elegant-700 flex items-center justify-center text-gold-500 text-xs font-semibold">
                        +{location.companions.length - 3}
                      </div>
                    )}
                  </div>
                </div>

                {/* Transport Info */}
                <div className="bg-elegant-700 p-4 rounded-lg mb-6">
                  <h4 className="text-gold-400 font-semibold mb-2">Transport:</h4>
                  <p className="text-gray-300 text-sm">{location.transport}</p>
                </div>

                <Link
                  to={`/locations/${location.id}`}
                  className="bg-gold-500 text-elegant-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 inline-flex items-center w-full justify-center"
                >
                  Explore {location.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-elegant-900 mb-4">
            Ready to Explore London?
          </h2>
          <p className="text-elegant-900 text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us to arrange your perfect companionship experience in any of these prestigious London locations
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

export default Locations;