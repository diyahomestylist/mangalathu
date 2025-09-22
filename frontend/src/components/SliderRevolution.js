import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

const SliderRevolution = ({ slides, autoPlay = true, duration = 6000, showControls = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearInterval(interval);
  }, [isPlaying, duration, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100">
      {/* Background Layer with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image/Video */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: slide.backgroundImage ? `url(${slide.backgroundImage})` : undefined,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
                transition: 'transform 8s ease-out'
              }}
            >
              {slide.backgroundVideo && (
                <video
                  autoPlay
                  loop
                  muted={isMuted}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={slide.backgroundVideo} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Animated Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {slide.geometricShapes?.map((shape, shapeIndex) => (
                <div
                  key={shapeIndex}
                  className={`absolute ${shape.className} transition-all duration-2000 ${
                    index === currentSlide ? shape.animateIn : shape.animateOut
                  }`}
                  style={{
                    ...shape.style,
                    transitionDelay: `${shapeIndex * 200}ms`
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-12 gap-8 items-center h-full">
            {/* Left Content with Advanced Animations */}
            <div className="col-span-12 lg:col-span-7">
              <div className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {/* Play/Pause Button with Animation */}
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={togglePlayPause}
                    className="relative bg-black text-white rounded-full p-4 hover:bg-gray-800 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {isPlaying ? (
                        <Pause size={20} className="transition-transform group-hover:scale-110" fill="white" />
                      ) : (
                        <Play size={20} className="ml-1 transition-transform group-hover:scale-110" fill="white" />
                      )}
                    </div>
                  </button>
                  <span className="text-sm font-medium text-gray-600">
                    {isPlaying ? 'Pause' : 'Play'} Promo
                  </span>
                </div>

                {/* Animated Headlines */}
                <div className="space-y-4 overflow-hidden">
                  <h1 className={`text-5xl lg:text-7xl font-light leading-none text-gray-900 transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}>
                    {currentSlideData.title.split('\n').map((line, index) => (
                      <div key={index} className={`transition-all duration-1000 delay-${400 + index * 100}`}>
                        {line.includes('italic') ? (
                          <span className="italic">{line.replace('italic', '')}</span>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </h1>
                  
                  <p className={`text-lg text-gray-600 max-w-md transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}>
                    {currentSlideData.subtitle}
                  </p>
                </div>

                {/* Animated Project Details */}
                <div className={`flex items-center space-x-12 text-sm transition-all duration-1000 delay-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  {[
                    { label: 'Year', value: currentSlideData.year },
                    { label: 'Location', value: currentSlideData.location },
                    { label: 'Client', value: currentSlideData.client }
                  ].map((item, index) => (
                    <div key={item.label} className={`transition-all duration-500 delay-${900 + index * 100}`}>
                      <span className="text-gray-400 block text-xs uppercase tracking-wide">{item.label}</span>
                      <div className="font-medium text-gray-900 mt-1">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Call to Action Buttons */}
                <div className={`flex items-center space-x-4 transition-all duration-1000 delay-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <button className="bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View Project
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content with Enhanced Animations */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between h-full">
              {/* Slide Navigation */}
              <div className="flex justify-end">
                <div className="space-y-2 text-right">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`block text-sm font-medium transition-all duration-300 hover:scale-110 ${
                        index === currentSlide 
                          ? 'text-red-500 transform scale-110' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}.
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Content with Glass Morphism */}
              <div className="space-y-8">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 max-w-sm ml-auto shadow-xl">
                  <div className="text-right space-y-3">
                    <div className="text-3xl font-light text-gray-900">
                      {currentSlideData.year}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {currentSlideData.location.split(',')[0]},<br />
                      {currentSlideData.location.split(',')[1]}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {currentSlideData.client}
                    </div>
                  </div>
                </div>

                {/* Large Project Title with Typewriter Effect */}
                <div className="text-right">
                  <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900">
                    {currentSlideData.projectTitle || 'Commercial\nbuilding\nconcept in\nVillage.'}
                  </h2>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="space-y-6">
                {/* About Section with Hover Effect */}
                <div className="bg-black text-white p-6 max-w-md ml-auto rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <h3 className="text-lg font-medium mb-3 flex items-center justify-between">
                    About
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {currentSlideData.description}
                  </p>
                </div>

                {/* Enhanced Navigation Controls */}
                <div className="flex items-center justify-end space-x-3">
                  <button
                    onClick={prevSlide}
                    className="p-3 border border-gray-300 rounded-full hover:bg-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 border border-gray-300 rounded-full hover:bg-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <ChevronRight size={18} />
                  </button>
                  {currentSlideData.backgroundVideo && (
                    <button
                      onClick={toggleMute}
                      className="p-3 border border-gray-300 rounded-full hover:bg-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
          >
            <div className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-red-500' : 'bg-gray-400'
            }`}>
              {index === currentSlide && isPlaying && (
                <div 
                  className="absolute top-0 left-0 h-full bg-red-600 rounded-full transition-all ease-linear"
                  style={{
                    width: '100%',
                    animation: `progress ${duration}ms linear infinite`
                  }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Side Elements */}
      <div className="absolute bottom-8 right-8 transform rotate-90 origin-bottom-right text-xs text-gray-500 font-medium tracking-wider">
        Follow Us
      </div>
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center text-xs text-gray-500 font-medium tracking-wider">
        {isPlaying ? 'Auto' : 'Manual'}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SliderRevolution;