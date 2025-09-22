import React, { useState, useRef } from 'react';
import { 
  Plus, Trash2, Move, Copy, Eye, Code, Layers, 
  Type, Image, Grid, Box, Star, Users, BarChart3 
} from 'lucide-react';

const PageBuilder = ({ initialSections = [], onSave }) => {
  const [sections, setSections] = useState(initialSections);
  const [selectedSection, setSelectedSection] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const dragRef = useRef(null);

  const sectionTypes = [
    {
      type: 'hero',
      name: 'Hero Section',
      icon: Star,
      defaultProps: {
        title: 'Your Amazing Headline',
        subtitle: 'Compelling subtitle that converts',
        backgroundImage: '',
        ctaText: 'Get Started',
        ctaLink: '#'
      }
    },
    {
      type: 'text',
      name: 'Text Block',
      icon: Type,
      defaultProps: {
        heading: 'Section Heading',
        content: 'Your content goes here...',
        alignment: 'left'
      }
    },
    {
      type: 'image',
      name: 'Image Block',
      icon: Image,
      defaultProps: {
        src: '',
        alt: 'Image description',
        caption: '',
        alignment: 'center'
      }
    },
    {
      type: 'grid',
      name: 'Content Grid',
      icon: Grid,
      defaultProps: {
        columns: 3,
        items: [
          { title: 'Item 1', content: 'Description 1' },
          { title: 'Item 2', content: 'Description 2' },
          { title: 'Item 3', content: 'Description 3' }
        ]
      }
    },
    {
      type: 'stats',
      name: 'Statistics',
      icon: BarChart3,
      defaultProps: {
        stats: [
          { number: '100+', label: 'Projects Completed' },
          { number: '50+', label: 'Happy Clients' },
          { number: '15+', label: 'Years Experience' }
        ]
      }
    },
    {
      type: 'testimonials',
      name: 'Testimonials',
      icon: Users,
      defaultProps: {
        testimonials: [
          {
            text: 'Amazing work and professional service.',
            author: 'John Doe',
            position: 'CEO, Company'
          }
        ]
      }
    }
  ];

  const addSection = (sectionType) => {
    const newSection = {
      id: Date.now().toString(),
      type: sectionType.type,
      props: { ...sectionType.defaultProps }
    };
    setSections([...sections, newSection]);
  };

  const removeSection = (sectionId) => {
    setSections(sections.filter(section => section.id !== sectionId));
    if (selectedSection?.id === sectionId) {
      setSelectedSection(null);
    }
  };

  const duplicateSection = (section) => {
    const duplicated = {
      ...section,
      id: Date.now().toString()
    };
    const index = sections.findIndex(s => s.id === section.id);
    const newSections = [...sections];
    newSections.splice(index + 1, 0, duplicated);
    setSections(newSections);
  };

  const moveSection = (fromIndex, toIndex) => {
    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);
    newSections.splice(toIndex, 0, movedSection);
    setSections(newSections);
  };

  const updateSectionProps = (sectionId, newProps) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? { ...section, props: { ...section.props, ...newProps } }
        : section
    ));
  };

  const handleDragStart = (e, sectionIndex) => {
    setDraggedItem(sectionIndex);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedItem !== null && draggedItem !== dropIndex) {
      moveSection(draggedItem, dropIndex);
    }
    setDraggedItem(null);
  };

  const renderSection = (section, isPreview = false) => {
    const commonClasses = isPreview ? '' : 'border-2 border-dashed border-transparent hover:border-red-300 relative group';
    
    switch (section.type) {
      case 'hero':
        return (
          <div className={`${commonClasses} bg-gradient-to-r from-blue-50 to-gray-50 py-20`}>
            <div className="max-w-4xl mx-auto text-center px-6">
              <h1 className="text-5xl font-light text-gray-900 mb-6">
                {section.props.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {section.props.subtitle}
              </p>
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
                {section.props.ctaText}
              </button>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className={`${commonClasses} py-12 px-6`}>
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-light text-gray-900 mb-6 text-${section.props.alignment}`}>
                {section.props.heading}
              </h2>
              <div className={`text-gray-600 leading-relaxed text-${section.props.alignment}`}>
                {section.props.content}
              </div>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className={`${commonClasses} py-12 px-6`}>
            <div className={`max-w-4xl mx-auto text-${section.props.alignment}`}>
              <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
                {section.props.src ? (
                  <img src={section.props.src} alt={section.props.alt} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <span className="text-gray-400">Image Placeholder</span>
                )}
              </div>
              {section.props.caption && (
                <p className="text-sm text-gray-500 mt-4">{section.props.caption}</p>
              )}
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className={`${commonClasses} py-12 px-6`}>
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 md:grid-cols-${section.props.columns} gap-8`}>
                {section.props.items.map((item, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className={`${commonClasses} py-12 px-6 bg-gray-50`}>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {section.props.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-light text-red-500 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className={`${commonClasses} py-12 px-6`}>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.props.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${commonClasses} py-12 px-6 bg-gray-100`}>
            <div className="text-center text-gray-500">Unknown section type</div>
          </div>
        );
    }
  };

  const renderSectionControls = (section, index) => (
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
      <button
        onClick={() => setSelectedSection(section)}
        className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        title="Edit"
      >
        <Code size={14} />
      </button>
      <button
        onClick={() => duplicateSection(section)}
        className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
        title="Duplicate"
      >
        <Copy size={14} />
      </button>
      <button
        onClick={() => removeSection(section.id)}
        className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
        title="Delete"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );

  const renderPropertyEditor = () => {
    if (!selectedSection) return null;

    return (
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">Edit Section</h3>
          <button
            onClick={() => setSelectedSection(null)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          {Object.entries(selectedSection.props).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </label>
              
              {key === 'content' || key === 'text' ? (
                <textarea
                  value={value}
                  onChange={(e) => updateSectionProps(selectedSection.id, { [key]: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows="4"
                />
              ) : key === 'alignment' ? (
                <select
                  value={value}
                  onChange={(e) => updateSectionProps(selectedSection.id, { [key]: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              ) : key === 'columns' ? (
                <select
                  value={value}
                  onChange={(e) => updateSectionProps(selectedSection.id, { [key]: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="1">1 Column</option>
                  <option value="2">2 Columns</option>
                  <option value="3">3 Columns</option>
                  <option value="4">4 Columns</option>
                </select>
              ) : Array.isArray(value) ? (
                <div className="space-y-2">
                  {value.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded p-3">
                      {Object.entries(item).map(([itemKey, itemValue]) => (
                        <input
                          key={itemKey}
                          type="text"
                          value={itemValue}
                          onChange={(e) => {
                            const newArray = [...value];
                            newArray[index] = { ...newArray[index], [itemKey]: e.target.value };
                            updateSectionProps(selectedSection.id, { [key]: newArray });
                          }}
                          placeholder={itemKey}
                          className="w-full px-3 py-1 border border-gray-300 rounded mb-2 text-sm"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => updateSectionProps(selectedSection.id, { [key]: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toolbar */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-medium text-gray-900">Page Builder</h1>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    previewMode 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Eye size={16} className="inline mr-2" />
                  {previewMode ? 'Edit Mode' : 'Preview'}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{sections.length} sections</span>
              <button
                onClick={() => onSave && onSave(sections)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Save Page
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar - Component Library */}
        {!previewMode && (
          <div className="w-64 bg-white shadow-sm h-screen sticky top-16 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Layers size={20} className="mr-2" />
                Components
              </h3>
              <div className="space-y-2">
                {sectionTypes.map((sectionType) => (
                  <button
                    key={sectionType.type}
                    onClick={() => addSection(sectionType)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors text-left"
                  >
                    <sectionType.icon size={20} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">{sectionType.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-1 ${previewMode ? '' : 'pr-6'}`}>
          {sections.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Box size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No sections yet</h3>
                <p className="text-gray-600 mb-4">Add your first component from the sidebar</p>
              </div>
            </div>
          ) : (
            <div className={previewMode ? '' : 'py-6'}>
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  draggable={!previewMode}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                  className={`relative ${!previewMode ? 'mb-4' : ''}`}
                >
                  {renderSection(section, previewMode)}
                  {!previewMode && renderSectionControls(section, index)}
                  
                  {!previewMode && (
                    <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                        <Move size={12} />
                        <span>{section.type}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Property Editor */}
      {renderPropertyEditor()}
    </div>
  );
};

export default PageBuilder;