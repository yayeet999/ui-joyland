
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import AuthWithGoogleFormPreview from '@/components/previews/forms/AuthWithGoogleFormPreview';
import RetroAuthFormPreview from '@/components/previews/forms/RetroAuthFormPreview';

interface FormCardProps {
  component: any;
  delay: number;
  category: string;
}

const FormCard: React.FC<FormCardProps> = ({
  component,
  delay,
  category
}) => {
  // Determine if the component is an auth form
  const isAuthForm = component.type === 'auth';

  // Render correct form preview based on component name
  const renderFormPreview = () => {
    switch (component.name) {
      case "Auth with Google Form":
        return <AuthWithGoogleFormPreview />;
      case "Retro-game Auth Form":
        return <RetroAuthFormPreview />;
      default:
        return <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">[Interactive {component.name} Preview]</p>
        </div>;
    }
  };

  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4,
    delay: delay * 0.1
  }} className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden ${isAuthForm ? 'col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2' : 'col-span-1'}`}>
      {/* Component Preview */}
      <div className="relative">
        <div className="absolute top-2 right-2 z-10">
          <Button size="sm" variant="secondary" className="flex items-center gap-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 font-medium py-2 px-3 shadow-sm hover:shadow rounded-md transition-all duration-200" asChild>
            <Link to={`/components/${category}/${component.id}`}>
              <span className="text-sm">Code</span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
            </Link>
          </Button>
        </div>
        <div className={`relative ${isAuthForm ? 'aspect-[18/14] md:aspect-[16/14] lg:aspect-[16/13]' // Mobile adjustment
      : 'min-h-[200px]'} bg-gray-50 dark:bg-gray-900`}>
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-6 lg:p-8 overflow-hidden py-0">
            <div className={`w-full ${isAuthForm ? 'max-w-md md:max-w-lg lg:max-w-xl transform scale-95 md:scale-100' : ''}`}>
              {renderFormPreview()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Component Information */}
      <div className="p-4">
        <h3 className="font-medium text-base">{component.name}</h3>
      </div>
    </motion.div>;
};

export default FormCard;
