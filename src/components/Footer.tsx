import React from 'react';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-elegant-800 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="h-8 w-8 text-gold-500" />
              <span className="font-serif text-xl font-bold text-gold-500">
                London Elite
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium lifestyle and companionship services in London. 
              Discretion, elegance, and sophistication guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-300 hover:text-gold-400 transition-colors">Blog</a></li>
              <li><a href="/locations" className="text-gray-300 hover:text-gold-400 transition-colors">Locations</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Our Partners</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://boaescorts.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Boa London Escorts
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cleopatraescorts.co.uk/london-escorts-gallery/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Cleopatra Escorts London
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300 text-sm">info@londonelite.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300 text-sm">+44 20 7946 0958</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300 text-sm">Central London, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 London Elite. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;