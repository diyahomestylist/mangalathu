import React from 'react';
import { Award, Users, Building2, Trophy } from 'lucide-react';

const StatsSection = ({ stats }) => {
  const icons = [Building2, Users, Trophy, Award];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900 max-w-4xl mx-auto">
            The achievements <span className="italic">recognized</span> by our{' '}
            <span className="italic">industry</span>.
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Our clients consistently praise us <strong>for delivering exceptional construction experiences</strong>{' '}
            through meticulous project management and quality craftsmanship.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:bg-red-50 transition-colors shadow-sm">
                  <Icon size={28} className="text-gray-600 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 mb-4">Awards & Honors</p>
            <h3 className="text-3xl font-light text-gray-900">
              The awards <span className="italic">won</span> by our{' '}
              <span className="italic">projects</span>.
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { count: "3x", title: "Best Construction Award" },
              { count: "2x", title: "Excellence in Design" },
              { count: "5x", title: "Quality Assurance" },
              { count: "1x", title: "Sustainable Building" },
              { count: "4x", title: "Client Satisfaction" }
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Trophy size={24} className="text-gray-600" />
                </div>
                <div className="text-xl font-medium text-gray-900 mb-1">
                  {award.count}
                </div>
                <div className="text-sm text-gray-600">
                  {award.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;