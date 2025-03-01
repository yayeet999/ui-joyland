import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import FacebookButtonPreview from '@/components/previews/buttons/FacebookButtonPreview';
import XButtonPreview from '@/components/previews/buttons/XButtonPreview';
import GithubButtonPreview from '@/components/previews/buttons/GithubButtonPreview';
import GoogleButtonPreview from '@/components/previews/buttons/GoogleButtonPreview';
import GoogleAuth2ButtonPreview from '@/components/previews/buttons/GoogleAuth2ButtonPreview';
import AppleButtonPreview from '@/components/previews/buttons/AppleButtonPreview';
import DownloadButtonPreview from '@/components/previews/buttons/DownloadButtonPreview';
import DownloadProgressButtonPreview from '@/components/previews/buttons/DownloadProgressButtonPreview';
import XAuth2ButtonPreview from '@/components/previews/buttons/XAuth2ButtonPreview';
import AnimatedSubmitButtonPreview from '@/components/previews/buttons/AnimatedSubmitButtonPreview';
import AddToCartButtonPreview from '../previews/buttons/AddToCartButtonPreview';

interface ButtonCardProps {
  component: any;
  delay: number;
  category: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ component, delay, category }) => {
  // Render correct button preview based on component name
  const renderButtonPreview = () => {
    switch (component.name) {
      case "Facebook Auth Button":
        return <FacebookButtonPreview />;
      case "X Auth Button":
        return <XButtonPreview />;
      case "Github Auth Button":
        return <GithubButtonPreview />;
      case "Google Auth Button":
        return <GoogleButtonPreview />;
      case "Google Auth2 Button":
        return <GoogleAuth2ButtonPreview />;
      case "Apple Auth Button":
        return <AppleButtonPreview />;
      case "Download Button":
        return <DownloadButtonPreview />;
      case "Download Progress Button":
        return <DownloadProgressButtonPreview />;
      case "X Auth2 Button":
        return <XAuth2ButtonPreview />;
      case "Animated Submit Button":
        return <AnimatedSubmitButtonPreview />;
      case "Add-to-Cart Button":
        return <AddToCartButtonPreview />;
      default:
        return <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">[Interactive {component.name} Preview]</p>
        </div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden col-span-1"
    >
      {/* Component Preview */}
      <div className="relative">
        <div className="absolute top-2 right-2 z-10">
          <Button
            size="sm"
            variant="secondary"
            className="flex items-center gap-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 font-medium py-2 px-3 shadow-sm hover:shadow rounded-md transition-all duration-200"
            asChild
          >
            <Link to={`/components/${category}/${component.id}`}>
              <span className="text-sm">Code</span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
            </Link>
          </Button>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-[200px] flex items-center justify-center">
          {renderButtonPreview()}
        </div>
      </div>
      
      {/* Component Information */}
      <div className="p-4">
        <h3 className="font-medium text-base">{component.name}</h3>
      </div>
    </motion.div>
  );
};

export default ButtonCard;
