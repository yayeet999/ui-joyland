
import React from 'react';
import ButtonPreview from './ButtonPreview';

interface PreviewSectionProps {
  category: string;
  componentName: string;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ category, componentName }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex items-center justify-center shadow-md min-h-[300px]">
      {category === 'buttons' ? (
        <ButtonPreview name={componentName} />
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">[Interactive {componentName} Preview]</p>
        </div>
      )}
    </div>
  );
};

export default PreviewSection;
