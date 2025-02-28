import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  href: string;
  delay?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, name, href, delay = 0 }) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className="flex flex-col items-center"
    >
      <Link 
        to={href}
        className="w-full flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 
                hover:shadow-md hover:border-accent-purple/30 dark:hover:border-accent-purple/30 transition-all duration-300 cursor-pointer group"
      >
        <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 group-hover:from-accent-purple/10 group-hover:to-accent-blue/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-accent-purple group-hover:text-accent-blue transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-medium text-center group-hover:text-accent-purple transition-colors duration-300">{name}</h3>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
