import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { 
  Sliders, 
  Image as GalleryIcon,
  ChevronDown,
  BarChart3,
  FileText,
  DollarSign,
  Square,
  Layers,
  Menu as MenuIcon,
  ArrowDown,
  ChevronRight
} from "lucide-react";

// Categories data - from original sidebar
const categories = [
  { id: "sliders", name: "Sliders", icon: Sliders, href: "/components/sliders" },
  { id: "galleries", name: "Galleries", icon: GalleryIcon, href: "/components/galleries" },
  { id: "accordions", name: "Accordions", icon: ChevronDown, href: "/components/accordions" },
  { id: "charts", name: "Charts", icon: BarChart3, href: "/components/charts" },
  { id: "forms", name: "Forms", icon: FileText, href: "/components/forms" },
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
  { id: "navigation", name: "Navigation Bars", icon: MenuIcon, href: "/components/navigation" },
  { id: "footers", name: "Footers", icon: ArrowDown, href: "/components/footers" },
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
    // Open subcategories dropdown if main category is active or if any subcategory is active
    if (isActive && hasSubCategories) {
      setIsSubcategoryOpen(true);
    } else if (hasSubCategories && category.subCategories?.some(sub => sub.href === currentPath)) {
      setIsSubcategoryOpen(true);
    }
  }, [isActive, hasSubCategories, category.subCategories, currentPath]);

  return (
    <div>
      <Link 
        to={category.href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group ${
          isActive 
            ? "bg-accent-purple/10 text-accent-purple" 
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
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
        <Icon className={`w-5 h-5 ${isActive ? "text-accent-purple" : "text-gray-500 dark:text-gray-400 group-hover:text-accent-purple/70"}`} />
        <span className="font-medium flex-1">{category.name}</span>
        {hasSubCategories && (
          <ChevronRight className={`w-4 h-4 transition-transform ${isSubcategoryOpen ? "rotate-90" : ""} text-gray-500 dark:text-gray-400`} />
        )}
      </Link>
      
      {hasSubCategories && isSubcategoryOpen && (
        <div className="ml-6 pl-4 border-l border-gray-200 dark:border-gray-700 mt-1 space-y-1">
          {category.subCategories.map((subCategory) => {
            const isSubActive = subCategory.href === currentPath;
            return (
              <Link
                key={subCategory.id}
                to={subCategory.href}
                className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors duration-200 
                  ${isSubActive 
                    ? "bg-accent-purple/10 text-accent-purple font-medium" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                  }`}
                onClick={onItemClick}
              >
                <span>{subCategory.name}</span>
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
  
  // Force re-evaluation of active state when location changes
  useEffect(() => {
    // This ensures the component re-renders when location changes
  }, [location]);
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Categories</h2>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-1">
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