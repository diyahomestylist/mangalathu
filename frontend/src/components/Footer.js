import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = ({ company }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                M<span className="text-red-500">angalathu</span>
              </h3>
              <p className="text-gray-400 mt-2">
                Builders and Contractors
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {company.description}
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                "About Us",
                "Our Services", 
                "Projects",
                "Careers",
                "Blog",
                "Contact"
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <nav className="space-y-3">
              {[
                "Residential Construction",
                "Commercial Buildings",
                "Interior Design",
                "Project Management",
                "Architectural Planning",
                "Quality Assurance"
              ].map((service, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-medium mb-2">Get In Touch</h5>
              <p className="text-gray-400 text-sm">
                Kerala, India
              </p>
              <p className="text-gray-400 text-sm">{company.email}</p>
              <p className="text-gray-400 text-sm">{company.phone}</p>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Work Inquiries</h5>
              <p className="text-gray-400 text-sm">
                projects@mangalathugroup.com
              </p>
              <p className="text-gray-400 text-sm">+91 9876543210</p>
            </div>
            
            <div className="flex items-center justify-start md:justify-end">
              <button
                onClick={scrollToTop}
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Mangalathu Builders and Contractors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;