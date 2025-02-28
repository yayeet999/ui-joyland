
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
        className="w-full flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md 
                hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <div className="mb-4 p-3 rounded-full bg-gray-100 dark:bg-gray-700">
          <Icon className="w-8 h-8 text-accent-purple" />
        </div>
        <h3 className="text-lg font-medium text-center">{name}</h3>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
