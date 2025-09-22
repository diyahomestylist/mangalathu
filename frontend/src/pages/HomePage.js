import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { mockData } from '../mock';

const HomePage = () => {
  const [currentHero, setCurrentHero] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigation={mockData.navigation} />
      <HeroSection 
        heroData={mockData.hero} 
        currentHero={currentHero}
        setCurrentHero={setCurrentHero}
      />
      <ServicesSection services={mockData.services} />
      <StatsSection stats={mockData.stats} />
      <ProjectsSection projects={mockData.projects} />
      <TestimonialsSection testimonials={mockData.testimonials} />
      <BlogSection posts={mockData.blogPosts} />
      <ContactSection company={mockData.company} />
      <Footer company={mockData.company} />
    </div>
  );
};

export default HomePage;