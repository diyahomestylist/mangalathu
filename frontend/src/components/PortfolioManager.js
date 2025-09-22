import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, ExternalLink, Heart, Share2, Eye } from 'lucide-react';

const PortfolioManager = ({ projects, categories = [] }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'oldest', 'name', 'category'
  const [selectedProject, setSelectedProject] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Filter and search logic
  useEffect(() => {
    setIsLoading(true);
    let filtered = projects;

    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => 
        project.category.includes(activeFilter)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort projects
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date || '2024-01-01') - new Date(a.date || '2024-01-01');
        case 'oldest':
          return new Date(a.date || '2024-01-01') - new Date(b.date || '2024-01-01');
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category[0]?.localeCompare(b.category[0] || '');
        default:
          return 0;
      }
    });

    setTimeout(() => {
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);
  }, [projects, activeFilter, searchTerm, sortBy]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleFavorite = (projectId) => {
    setFavorites(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const shareProject = (project) => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href + '#project-' + project.id
      });
    }
  };

  const allCategories = ['All', ...categories];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 mb-4">Portfolio Management</p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900 max-w-4xl mx-auto">
            Our <span className="italic">creative</span> work showcase.
          </h2>
        </div>

        {/* Advanced Controls */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gray-500" />
                <select
                  value={activeFilter}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {allCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort Control */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name A-Z</option>
                <option value="category">By Category</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-red-500 text-white' : 'text-gray-600'} rounded-l-lg transition-colors`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-red-500 text-white' : 'text-gray-600'} rounded-r-lg transition-colors`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-sm text-gray-600">Active filters:</span>
            {activeFilter !== 'All' && (
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                {activeFilter}
                <button 
                  onClick={() => setActiveFilter('All')}
                  className="ml-2 text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Search: "{searchTerm}"
                <button 
                  onClick={() => setSearchTerm('')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>

          {/* Results Counter */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>
        )}

        {/* Projects Grid/List */}
        {!isLoading && (
          <div className={`transition-all duration-500 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex items-center space-x-6 bg-gray-50 rounded-xl p-6' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden rounded-xl ${
                  viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-[4/5] mb-6'
                } bg-gray-200`}>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Project Image</div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(project.id);
                          }}
                          className={`p-2 rounded-full transition-colors ${
                            favorites.includes(project.id) 
                              ? 'bg-red-500 text-white' 
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <Heart size={16} fill={favorites.includes(project.id) ? 'currentColor' : 'none'} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            shareProject(project);
                          }}
                          className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Share2 size={16} />
                        </button>
                      </div>
                      <button className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  {/* View Counter */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Eye size={12} />
                    <span>{project.views || Math.floor(Math.random() * 1000) + 100}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat, index) => (
                      <span key={index} className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{project.date || '2024'}</span>
                    <span>{project.client || 'Private Client'}</span>
                  </div>

                  {/* Action Button */}
                  <button className="mt-4 text-sm font-medium text-red-500 hover:text-red-600 transition-colors flex items-center space-x-1">
                    <span>View Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results State */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
              }}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {!isLoading && filteredProjects.length > 0 && filteredProjects.length < projects.length && (
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Load More Projects
            </button>
          </div>
        )}
      </div>

      {/* Project Modal/Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.category.map((cat, index) => (
                      <span key={index} className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400">Project Gallery</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Client</span>
                  <div className="font-medium">{selectedProject.client || 'Private Client'}</div>
                </div>
                <div>
                  <span className="text-gray-500">Date</span>
                  <div className="font-medium">{selectedProject.date || '2024'}</div>
                </div>
                <div>
                  <span className="text-gray-500">Services</span>
                  <div className="font-medium">{selectedProject.category.join(', ')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Status</span>
                  <div className="font-medium text-green-600">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioManager;