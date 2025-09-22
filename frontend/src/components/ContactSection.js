import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = ({ company }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 mb-4">Work inquiries</p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900 max-w-4xl mx-auto">
            Questions? Get in touch.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">Kerala Office</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-500 mt-1" size={20} />
                  <div>
                    <p className="text-gray-900 font-medium">Mangalathu Builders</p>
                    <p className="text-gray-600">Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-red-500" size={20} />
                  <a 
                    href={`mailto:${company.email}`}
                    className="text-gray-900 hover:text-red-500 transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-red-500" size={20} />
                  <a 
                    href={`tel:${company.phone}`}
                    className="text-gray-900 hover:text-red-500 transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">Branch Office</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-500 mt-1" size={20} />
                  <div>
                    <p className="text-gray-900 font-medium">Mangalathu Projects</p>
                    <p className="text-gray-600">Bangalore, Karnataka</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-red-500" size={20} />
                  <a 
                    href="mailto:bangalore@mangalathugroup.com"
                    className="text-gray-900 hover:text-red-500 transition-colors"
                  >
                    bangalore@mangalathugroup.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-red-500" size={20} />
                  <a 
                    href="tel:+919876543210"
                    className="text-gray-900 hover:text-red-500 transition-colors"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-8">Start Your Project</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors">
                  <option>Select project type</option>
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Interior Design</option>
                  <option>Renovation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;