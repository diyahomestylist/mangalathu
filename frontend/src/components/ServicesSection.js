import React from 'react';
import { Building, Home, Palette } from 'lucide-react';

const ServicesSection = ({ services }) => {
  const icons = [Home, Building, Palette];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 mb-4">Our Services</p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900 max-w-4xl mx-auto">
            Full-service <span className="italic">construction</span> and{' '}
            <span className="italic">architecture</span> office.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 group-hover:bg-red-50 transition-colors">
                  <Icon size={28} className="text-gray-600 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              Studio that gets excited about.
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Architectural Design & Planning</h4>
                <p className="text-gray-600 leading-relaxed">
                  Using year-over-year design approaches and latest techs, we will ensure that your new building{' '}
                  <strong>will be visible, accessible, and built to last</strong>.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Project Management</h4>
                <p className="text-gray-600 leading-relaxed">
                  Complete project oversight from conception to completion, ensuring timely delivery and quality standards throughout the construction process.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Quality Assurance</h4>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous quality control measures at every stage of construction, ensuring the highest standards of workmanship and materials.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-light text-gray-900">25</div>
              <div className="text-sm text-gray-600">
                <div className="font-medium">years of experience</div>
                <div>in construction industry</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-light text-gray-900">150</div>
              <div className="text-sm text-gray-600">
                <div className="font-medium">completed projects</div>
                <div>across Kerala and India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;