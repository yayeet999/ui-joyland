
import React from 'react';
import { galleries } from '@/data/components/galleries';

interface GalleryPreviewProps {
  name: string;
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ name }) => {
  // Find the gallery by name
  const gallery = galleries.find(g => g.name === name);
  
  if (!gallery) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">Gallery not found</p>
        </div>
      </div>
    );
  }
  
  // Create a markup from the HTML for rendering
  const createMarkup = () => {
    return { __html: gallery.html || '<div>No preview available</div>' };
  };
  
  // If CSS is provided, include it
  const galleryStyles = gallery.css ? 
    <style dangerouslySetInnerHTML={{ __html: gallery.css }} /> : 
    null;
  
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      {galleryStyles}
      <div className="preview-container" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default GalleryPreview;
