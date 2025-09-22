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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 overflow-hidden">
      {/* Background architectural image - positioned bottom left */}
      <div className="absolute bottom-0 left-0 w-1/2 h-3/4">
        <div className="relative w-full h-full">
          {/* Architectural building image */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-gray-300 to-gray-200"
            style={{
              clipPath: 'polygon(0 60%, 40% 20%, 80% 40%, 100% 30%, 100% 100%, 0 100%)'
            }}
          ></div>
          {/* Glass building facade */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-200 to-gray-300 opacity-80"
            style={{
              clipPath: 'polygon(0 65%, 35% 25%, 70% 45%, 90% 35%, 100% 100%, 0 100%)'
            }}
          ></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-12 gap-8 items-center h-full">
            {/* Left side - Main content */}
            <div className="col-span-12 lg:col-span-7 space-y-8">
              {/* Play Button */}
              <div className="flex items-center space-x-4">
                <button className="bg-black text-white rounded-full p-4 hover:bg-gray-800 transition-colors group">
                  <Play size={20} className="ml-1 group-hover:scale-110 transition-transform" fill="white" />
                </button>
                <span className="text-sm font-medium text-gray-600">Play Promo</span>
              </div>

              {/* Main headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-light leading-none text-gray-900">
                  Get an inspiration<br />
                  <span className="italic">when its matter</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Explore the residential community in Kerala.
                </p>
              </div>

              {/* Project details */}
              <div className="flex items-center space-x-12 text-sm">
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

            {/* Right side - Project info and navigation */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between h-full">
              {/* Project numbers */}
              <div className="flex justify-end">
                <div className="space-y-2 text-right">
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
              </div>

              {/* Center content */}
              <div className="space-y-8">
                {/* Current project info */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-sm ml-auto">
                  <div className="text-right space-y-2">
                    <div className="text-2xl font-light text-gray-900">
                      {currentData.year}
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentData.location.split(',')[0]},<br />
                      {currentData.location.split(',')[1]}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {currentData.client}
                    </div>
                  </div>
                </div>

                {/* Main project title */}
                <div className="text-right">
                  <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900">
                    Commercial<br />
                    building<br />
                    concept in<br />
                    Village.
                  </h2>
                </div>
              </div>

              {/* Bottom content */}
              <div className="space-y-6">
                {/* About section */}
                <div className="bg-black text-white p-6 max-w-md ml-auto">
                  <h3 className="text-lg font-medium mb-3">About</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Founded in Kerala with offices across India. Mangalathu Group creates 
                    exceptional residential and commercial spaces with innovative design approaches.
                  </p>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center justify-end space-x-3">
                  <button
                    onClick={prevSlide}
                    className="p-2 border border-gray-300 rounded-full hover:bg-white hover:shadow-sm transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 border border-gray-300 rounded-full hover:bg-white hover:shadow-sm transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
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

      {/* Vertical text - Follow Us */}
      <div className="absolute bottom-8 right-8 transform rotate-90 origin-bottom-right text-xs text-gray-500 font-medium">
        Follow Us
      </div>

      {/* Left vertical text - Dark/Light */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center text-xs text-gray-500 font-medium">
        Dark
      </div>
    </section>
  );
};

export default HeroSection;