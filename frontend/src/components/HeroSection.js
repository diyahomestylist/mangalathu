import React, { useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = ({ heroData, currentHero, setCurrentHero }) => {
  const currentData = heroData[currentHero];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroData.length, setCurrentHero]);

  const nextSlide = () => {
    setCurrentHero((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setCurrentHero((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  return (
    <section className="relative min-h-screen bg-gray-100 overflow-hidden">
      <div className="relative h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-200"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f3f4f6"/><path d="M0 400 L800 300 L800 600 L0 600 Z" fill="%23e5e7eb"/></svg>')`
          }}
        >
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Play Button */}
            <div className="flex items-center space-x-4 mb-8">
              <button className="bg-black text-white rounded-full p-4 hover:bg-gray-800 transition-colors group">
                <Play size={24} className="ml-1 group-hover:scale-110 transition-transform" fill="white" />
              </button>
              <span className="text-sm font-medium text-gray-600">Play Promo</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light leading-tight text-gray-900">
              {currentData.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              {currentData.subtitle}
            </p>

            {/* Year and Location */}
            <div className="flex items-center space-x-8 text-sm">
              <div>
                <span className="text-gray-400">Year</span>
                <div className="font-medium text-gray-900">{currentData.year}</div>
              </div>
              <div>
                <span className="text-gray-400">Location</span>
                <div className="font-medium text-gray-900">{currentData.location}</div>
              </div>
              <div>
                <span className="text-gray-400">Client</span>
                <div className="font-medium text-gray-900">{currentData.client}</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Project Numbers */}
            <div className="absolute top-0 right-0 space-y-4 text-right z-10">
              {heroData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHero(index)}
                  className={`block text-sm font-medium transition-colors ${
                    index === currentHero ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {String(index + 2).padStart(2, '0')}.
                </button>
              ))}
            </div>

            {/* Project Info */}
            <div className="bg-black text-white p-8 max-w-md">
              <h3 className="text-xl font-light mb-4">About</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {currentData.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentHero ? 'bg-red-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 transform rotate-90 text-xs text-gray-500">
        Follow Us →
      </div>
    </section>
  );
};

export default HeroSection;