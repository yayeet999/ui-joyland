
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

interface GenericComponentCardProps {
  component: any;
  delay: number;
  category: string;
}

const GenericComponentCard: React.FC<GenericComponentCardProps> = ({ component, delay, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
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
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm">[Interactive {component.name} Preview]</p>
          </div>
        </div>
      </div>
      
      {/* Component Information */}
      <div className="p-4">
        <h3 className="font-medium text-base">{component.name}</h3>
      </div>
    </motion.div>
  );
};

export default GenericComponentCard;
