
import React from 'react';

interface GalleryPreviewProps {
  name: string;
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ name }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm">[Interactive {name} Preview]</p>
        <p className="text-xs mt-2">Gallery preview will be displayed here</p>
      </div>
    </div>
  );
};

export default GalleryPreview;
