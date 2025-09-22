import React from 'react';
import PageBuilder from '../components/PageBuilder';
import { mockData } from '../mock';

const PageBuilderPage = () => {
  const handleSave = (sections) => {
    console.log('Saving page sections:', sections);
    // Here you would typically save to your backend
    alert('Page saved successfully!');
  };

  return (
    <PageBuilder 
      initialSections={mockData.pageBuilderSections}
      onSave={handleSave}
    />
  );
};

export default PageBuilderPage;