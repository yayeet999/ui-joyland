
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface DetailHeaderProps {
  categoryName: string;
  componentName: string;
  categorySlug: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ categoryName, componentName, categorySlug }) => {
  return (
    <>
      {/* Breadcrumb & Back Button */}
      <div className="flex items-center mb-8">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            variant="outline" 
            size="default" 
            asChild 
            className="flex items-center bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 shadow-sm transition-all hover:shadow-md dark:bg-blue-900/20 dark:hover:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 rounded-lg px-4 py-2 group"
          >
            <Link to={`/components/${categorySlug}`} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm md:text-base font-medium">Back to {categoryName}</span>
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Component Title */}
      <h1 className="text-3xl font-bold mb-8">{componentName}</h1>
    </>
  );
};

export default DetailHeader;
