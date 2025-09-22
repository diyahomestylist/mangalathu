import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Public'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-4">Showcase</p>
            <h2 className="text-4xl font-light text-gray-900">Selected works.</h2>
          </div>
          <button className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors mt-6 lg:mt-0">
            Show All Works →
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-2">
                    <ExternalLink size={16} className="text-gray-900" />
                  </div>
                </div>
                {/* Placeholder for project image */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Project Image</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat, index) => (
                    <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{project.description}</p>
                <button className="text-sm font-medium text-red-500 mt-3 hover:underline">
                  Show project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;