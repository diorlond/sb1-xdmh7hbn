import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Calendar, Users, Shield, Crown } from 'lucide-react';

const Home = () => {
  const featuredBlogs = [
    {
      id: 1,
      slug: 'how-to-book-london-escorts-2025',
      title: 'How to Book London Escorts in 2025: The Complete Guide',
      excerpt: 'Navigate the modern landscape of premium companionship services in London with our comprehensive guide.',
      image: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      slug: 'london-escort-booking-etiquette-2025',
      title: 'London Escort Booking Etiquette in 2025',
      excerpt: 'Master the art of respectful and professional booking practices for premium companionship services.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    }
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Discretion Guaranteed',
      description: 'Complete privacy and confidentiality in all our services'
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'Only the finest companions with exceptional standards'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Professional Service',
      description: 'Experienced team dedicated to your satisfaction'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: '24/7 Availability',
      description: 'Round-the-clock booking and customer support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-elegant-900 via-elegant-800 to-elegant-900 py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gold-500 mb-6">
            London Elite
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of sophisticated companionship in London. 
            Discretion, elegance, and unparalleled service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/locations"
              className="bg-gold-500 text-elegant-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Explore Locations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/blog"
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500 hover:text-elegant-900 transition-colors duration-200"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-elegant-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gold-500 mb-4">Featured Articles</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stay informed with our expert insights and comprehensive guides
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <div key={blog.id} className="bg-elegant-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-crimson-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gold-500 mb-3">{blog.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{blog.excerpt}</p>
                  <Link 
                    to={`/blog/${blog.slug}`}
                    className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-elegant-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gold-500 mb-4">Why Choose London Elite</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We set the gold standard for premium companionship services in London
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gold-500 text-elegant-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gold-500 mb-2">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-elegant-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gold-500 mb-4">Our Partners</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Trusted collaborations with London's finest establishments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-elegant-700 p-8 rounded-xl text-center hover:bg-elegant-600 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Boa London Escorts</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Premium escort services with an exceptional reputation for quality and discretion.
              </p>
              <a 
                href="https://boaescorts.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold-500 text-elegant-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 inline-flex items-center"
              >
                Visit Boa Escorts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-elegant-700 p-8 rounded-xl text-center hover:bg-elegant-600 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Cleopatra Escorts London</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Elegant companions offering sophisticated services throughout London.
              </p>
              <a 
                href="https://www.cleopatraescorts.co.uk/london-escorts-gallery/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold-500 text-elegant-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 inline-flex items-center"
              >
                Visit Cleopatra Escorts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-elegant-900 mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-elegant-900 text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discover the finest companionship services London has to offer
          </p>
          <Link
            to="/contact"
            className="bg-elegant-900 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-elegant-800 transition-colors duration-200 inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;