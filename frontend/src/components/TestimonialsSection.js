import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 mb-4">Our Clients</p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900 max-w-4xl mx-auto">
            We're going to <span className="italic">become partners</span>{' '}
            for the long run.
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Our clients consistently praise us <strong>for delivering exceptional construction experiences</strong>{' '}
            through meticulous project management and quality craftsmanship.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 mb-16 opacity-60">
          {[
            "Tata Group", "Infosys", "Kerala Govt", 
            "Tech Parks", "Hospitality", "Education"
          ].map((client, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <div className="bg-white rounded-lg p-4 w-full h-full flex items-center justify-center shadow-sm">
                <span className="text-xs font-medium text-gray-600">{client}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 border border-gray-300 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 border border-gray-300 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                }`}
              >
                <div className="mb-6">
                  <Quote size={32} className="text-red-500 mb-4" />
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {testimonial.category}
                  </h4>
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <h5 className="font-medium text-gray-900">
                    {testimonial.author}
                  </h5>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;