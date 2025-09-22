import React, { useState } from 'react';
import Header from '../components/Header';
import SliderRevolution from '../components/SliderRevolution';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import PortfolioManager from '../components/PortfolioManager';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import AdvancedContactForm from '../components/AdvancedContactForm';
import Footer from '../components/Footer';
import { mockData } from '../mock';

const HomePage = () => {
  const [currentHero, setCurrentHero] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigation={mockData.navigation} />
      
      {/* Advanced Slider Revolution Hero */}
      <SliderRevolution 
        slides={mockData.sliderRevolutionData}
        autoPlay={true}
        duration={6000}
        showControls={true}
      />
      
      <ServicesSection services={mockData.services} />
      <StatsSection stats={mockData.stats} />
      
      {/* Advanced Portfolio Manager */}
      <PortfolioManager 
        projects={mockData.projects}
        categories={mockData.portfolioCategories}
      />
      
      <TestimonialsSection testimonials={mockData.testimonials} />
      <BlogSection posts={mockData.blogPosts} />
      
      {/* Advanced Contact Form */}
      <AdvancedContactForm company={mockData.company} />
      
      <Footer company={mockData.company} />
    </div>
  );
};

export default HomePage;