import React from 'react';
import { Shield, Crown, Users, Award, Heart, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Discretion & Privacy',
      description: 'Absolute confidentiality and privacy protection for all our clients and companions.'
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'Only the finest companions who meet our exceptional standards of elegance and sophistication.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Professional Service',
      description: 'Experienced team dedicated to providing exceptional customer service and satisfaction.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Commitment to excellence in every aspect of our service delivery and client experience.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Genuine Care',
      description: 'Authentic concern for the well-being and satisfaction of both clients and companions.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Reputation',
      description: 'Built on years of trust, reliability, and exceptional service in London\'s elite circles.'
    }
  ];

  return (
    <div className="min-h-screen bg-elegant-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-elegant-900 via-elegant-800 to-elegant-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gold-500 mb-6">
            About London Elite
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Setting the gold standard for premium companionship services in London since our establishment. 
            We combine traditional British elegance with modern sophistication.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gold-500 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  London Elite was founded with a vision to redefine premium companionship services in London. 
                  We recognized the need for a service that combines absolute discretion with exceptional quality, 
                  catering to discerning clients who expect nothing but the finest experiences.
                </p>
                <p>
                  Our journey began with a simple principle: to create meaningful connections between sophisticated 
                  individuals while maintaining the highest standards of professionalism and respect. Over the years, 
                  we have built a reputation as London's most trusted and exclusive companionship service.
                </p>
                <p>
                  Today, we continue to set industry standards through our commitment to excellence, our carefully 
                  vetted selection of companions, and our unwavering dedication to client satisfaction and safety.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="London Elite Experience"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gold-500 mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as an organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-elegant-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gold-500 text-elegant-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gold-500 mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <div className="bg-elegant-800 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-gold-500 mb-4">Our Approach</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                How we ensure exceptional experiences for every client
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gold-500 text-elegant-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gold-500 mb-3">Careful Selection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every companion undergoes rigorous screening to ensure they meet our exceptional standards 
                  of elegance, intelligence, and professionalism.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gold-500 text-elegant-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gold-500 mb-3">Personalized Matching</h3>
                <p className="text-gray-300 leading-relaxed">
                  We take time to understand your preferences and requirements to ensure perfect compatibility 
                  and memorable experiences.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gold-500 text-elegant-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gold-500 mb-3">Ongoing Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our dedicated team provides continuous support to ensure your complete satisfaction 
                  and address any requirements you may have.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Premium Service"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-gold-500 mb-6">Why Choose London Elite?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gold-400 font-semibold mb-2">Unmatched Discretion</h3>
                    <p className="text-gray-300">
                      Complete confidentiality and privacy protection, ensuring your personal information 
                      and encounters remain absolutely private.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gold-400 font-semibold mb-2">Exceptional Quality</h3>
                    <p className="text-gray-300">
                      Our companions are carefully selected for their beauty, intelligence, and sophistication, 
                      ensuring extraordinary experiences every time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gold-400 font-semibold mb-2">Professional Service</h3>
                    <p className="text-gray-300">
                      Years of experience in providing premium companionship services with impeccable 
                      customer service and attention to detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gold-400 font-semibold mb-2">24/7 Availability</h3>
                    <p className="text-gray-300">
                      Round-the-clock booking and customer support to accommodate your schedule 
                      an ensure seamless service delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-elegant-900 mb-4">
            Experience the London Elite Difference
          </h2>
          <p className="text-elegant-900 text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our distinguished clientele and discover why we are London's premier choice 
            for sophisticated companionship services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-elegant-900 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-elegant-800 transition-colors duration-200"
            >
              Contact Us Today
            </a>
            <a
              href="/locations"
              className="border-2 border-elegant-900 text-elegant-900 px-8 py-4 rounded-lg font-semibold hover:bg-elegant-900 hover:text-gold-500 transition-colors duration-200"
            >
              Explore Locations
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;