import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { 
  Image as GalleryIcon,
  BarChart3,
  FileText,
  DollarSign,
  Square,
  Layers,
  ChevronRight
} from "lucide-react";

// Categories data - from original sidebar
const categories = [
  { id: "galleries", name: "Galleries", icon: GalleryIcon, href: "/components/galleries" },
  { id: "charts", name: "Charts", icon: BarChart3, href: "/components/charts" },
  { 
    id: "forms", 
    name: "Forms", 
    icon: FileText, 
    href: "/components/forms",
    subCategories: [
      { id: "auth", name: "Auth", href: "/components/forms?type=auth" },
      { id: "misc", name: "Misc", href: "/components/forms?type=misc" }
    ]
  },
  { id: "pricing", name: "Pricing Tables", icon: DollarSign, href: "/components/pricing" },
  { 
    id: "buttons", 
    name: "Buttons", 
    icon: Square, 
    href: "/components/buttons",
    subCategories: [
      { id: "social", name: "Social", href: "/components/buttons?type=social" },
      { id: "functional", name: "Functional", href: "/components/buttons?type=functional" },
      { id: "creative", name: "Creative", href: "/components/buttons?type=creative" }
    ]
  },
  { id: "modals", name: "Modals", icon: Layers, href: "/components/modals" },
];

interface CategoryItemProps {
  category: {
    id: string;
    name: string;
    icon: React.FC<any>;
    href: string;
    subCategories?: { id: string; name: string; href: string }[];
  };
  isActive: boolean;
  onItemClick?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, isActive, onItemClick }) => {
  const Icon = category.icon;
  const [isSubcategoryOpen, setIsSubcategoryOpen] = React.useState(isActive);
  const hasSubCategories = category.subCategories && category.subCategories.length > 0;
  const location = useLocation();
  const currentPath = location.pathname + location.search;
  
  React.useEffect(() => {
    if (isActive && hasSubCategories) {
      setIsSubcategoryOpen(true);
    } else if (hasSubCategories && category.subCategories?.some(sub => sub.href === currentPath)) {
      setIsSubcategoryOpen(true);
    }
  }, [isActive, hasSubCategories, category.subCategories, currentPath]);

  return (
    <div className="relative group">
      <Link 
        to={category.href}
        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
          isActive 
            ? "bg-gradient-to-r from-accent-purple/15 to-accent-purple/5 text-accent-purple shadow-sm" 
            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent"
        }`}
        onClick={(e) => {
          if (hasSubCategories) {
            e.preventDefault();
            setIsSubcategoryOpen(!isSubcategoryOpen);
          } else if (onItemClick) {
            onItemClick();
          }
        }}
      >
        <div className={`p-1.5 rounded-lg transition-all duration-300 ${
          isActive 
            ? "bg-accent-purple/10" 
            : "bg-gray-100 dark:bg-gray-800 group-hover:bg-accent-purple/5"
        }`}>
          <Icon className={`w-5 h-5 transition-colors duration-300 ${
            isActive 
              ? "text-accent-purple" 
              : "text-gray-600 dark:text-gray-400 group-hover:text-accent-purple/70"
          }`} />
        </div>
        <span className="font-medium flex-1 text-[15px]">{category.name}</span>
        {hasSubCategories && (
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
            isSubcategoryOpen ? "rotate-90" : ""
          } ${isActive ? "text-accent-purple" : "text-gray-400 dark:text-gray-500"}`} />
        )}
      </Link>
      
      {hasSubCategories && isSubcategoryOpen && (
        <div className="ml-6 pl-4 border-l-2 border-dashed border-gray-200 dark:border-gray-700/50 mt-1 space-y-1 transition-all duration-300">
          {category.subCategories.map((subCategory) => {
            const isSubActive = subCategory.href === currentPath;
            return (
              <Link
                key={subCategory.id}
                to={subCategory.href}
                className={`flex items-center gap-2 py-2.5 px-4 rounded-lg text-[13px] transition-all duration-300 
                  ${isSubActive 
                    ? "bg-accent-purple/10 text-accent-purple font-medium shadow-sm" 
                    : "hover:bg-gray-100/50 dark:hover:bg-gray-800/30 text-gray-600 dark:text-gray-400 hover:text-accent-purple/90"
                  }`}
                onClick={onItemClick}
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isSubActive 
                    ? "bg-accent-purple" 
                    : "bg-gray-400 dark:bg-gray-600"
                }`} />
                <span className="font-medium">{subCategory.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

interface CategorySidebarContentProps {
  onItemClick?: () => void;
}

const CategorySidebarContent: React.FC<CategorySidebarContentProps> = ({ onItemClick }) => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  
  useEffect(() => {
    // This ensures the component re-renders when location changes
  }, [location]);
  
  return (
    <div className="flex flex-col h-full bg-[url('/grid-pattern.svg')] bg-fixed bg-repeat">
      <div className="p-5 border-b bg-gradient-to-r from-accent-purple/5 to-transparent backdrop-blur-sm">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">Categories</h2>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-2">
        {categories.map((cat) => (
          <CategoryItem 
            key={cat.id} 
            category={cat} 
            isActive={cat.id === category}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySidebarContent; 