
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import CategorySidebar from "@/components/CategorySidebar";
import { ComponentCardFactory } from "@/utils/component-factory";
import { getCategoryName } from "@/utils/category";
import { buttons } from "@/data/components/buttons";
import { forms } from "@/data/components/forms";

// Import styles
import '@/styles/components/buttons/social-buttons-card.css';

// Define component type with optional 'type' property
interface ComponentItem {
  id: number;
  name: string;
  code: string;
  type?: string;
}

// Mock component data (to be replaced with actual data in the future)
const mockComponents: Record<string, ComponentItem[]> = {
  sliders: [
    { id: 1, name: "Responsive Carousel Slider", code: "<div>Carousel Slider Code Here</div>" },
    { id: 2, name: "Range Slider with Labels", code: "<div>Range Slider Code Here</div>" },
    { id: 3, name: "Image Comparison Slider", code: "<div>Image Comparison Code Here</div>" },
    { id: 4, name: "Multi-handle Slider", code: "<div>Multi-handle Slider Code Here</div>" },
  ],
  pricing: [
    { id: 1, name: "Tiered Pricing Table", code: "<div>Tiered Pricing Table Code Here</div>" },
    { id: 2, name: "Comparison Pricing Grid", code: "<div>Comparison Pricing Grid Code Here</div>" },
    { id: 3, name: "Toggle Monthly/Annual Pricing", code: "<div>Toggle Pricing Code Here</div>" },
    { id: 4, name: "Feature-focused Pricing Table", code: "<div>Feature Pricing Code Here</div>" },
  ],
  accordions: [
    { id: 1, name: "Simple Accordion", code: "<div>Simple Accordion Code Here</div>" },
    { id: 2, name: "Nested Accordion", code: "<div>Nested Accordion Code Here</div>" },
    { id: 3, name: "FAQ Accordion", code: "<div>FAQ Accordion Code Here</div>" },
    { id: 4, name: "Animated Accordion", code: "<div>Animated Accordion Code Here</div>" },
  ],
  charts: [
    { id: 1, name: "Bar Chart", code: "<div>Bar Chart Code Here</div>" },
    { id: 2, name: "Line Chart", code: "<div>Line Chart Code Here</div>" },
    { id: 3, name: "Pie Chart", code: "<div>Pie Chart Code Here</div>" },
    { id: 4, name: "Area Chart", code: "<div>Area Chart Code Here</div>" },
  ],
  galleries: [
    { id: 1, name: "Masonry Gallery", code: "<div>Masonry Gallery Code Here</div>" },
    { id: 2, name: "Lightbox Gallery", code: "<div>Lightbox Gallery Code Here</div>" },
    { id: 3, name: "Carousel Gallery", code: "<div>Carousel Gallery Code Here</div>" },
    { id: 4, name: "Grid Gallery", code: "<div>Grid Gallery Code Here</div>" },
  ],
  modals: [
    { id: 1, name: "Basic Modal", code: "<div>Basic Modal Code Here</div>" },
    { id: 2, name: "Confirmation Modal", code: "<div>Confirmation Modal Code Here</div>" },
    { id: 3, name: "Fullscreen Modal", code: "<div>Fullscreen Modal Code Here</div>" },
    { id: 4, name: "Drawer Modal", code: "<div>Drawer Modal Code Here</div>" },
  ],
  navigation: [
    { id: 1, name: "Responsive Navbar", code: "<div>Responsive Navbar Code Here</div>" },
    { id: 2, name: "Sidebar Navigation", code: "<div>Sidebar Navigation Code Here</div>" },
    { id: 3, name: "Breadcrumbs", code: "<div>Breadcrumbs Code Here</div>" },
    { id: 4, name: "Tab Navigation", code: "<div>Tab Navigation Code Here</div>" },
  ],
  footers: [
    { id: 1, name: "Simple Footer", code: "<div>Simple Footer Code Here</div>" },
    { id: 2, name: "Multi-column Footer", code: "<div>Multi-column Footer Code Here</div>" },
    { id: 3, name: "Dark Footer with Newsletter", code: "<div>Dark Footer Code Here</div>" },
    { id: 4, name: "Sticky Footer", code: "<div>Sticky Footer Code Here</div>" },
  ],
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const componentType = queryParams.get('type');
  
  const categoryKey = category || '';
  let components = categoryKey === 'buttons' 
    ? buttons 
    : categoryKey === 'forms'
    ? forms
    : mockComponents[categoryKey as keyof typeof mockComponents] || [];
  
  // Filter components based on type if we're on the buttons or forms page and have a type query param
  if (componentType) {
    if (categoryKey === 'buttons' || categoryKey === 'forms') {
      // Filter components by their type property
      components = components.filter(comp => comp.type === componentType);
    }
  }
  
  const categoryName = getCategoryName(categoryKey);
  const typeLabel = componentType ? ` - ${componentType.charAt(0).toUpperCase() + componentType.slice(1)}` : '';

  // Set page title
  useEffect(() => {
    document.title = `${categoryName}${typeLabel} | UIverse.ai`;
  }, [categoryName, typeLabel]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Determine if we're showing auth forms to adjust grid columns
  const hasAuthForms = categoryKey === 'forms' && 
    (componentType === 'auth' || (!componentType && components.some(comp => comp.type === 'auth')));

  return (
    <Layout>
      <div className="flex">
        {/* Category Sidebar (desktop) + Mobile Menu */}
        <CategorySidebar />
        
        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="w-full px-0 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center mb-8">
              {/* Mobile category menu button rendered within CategorySidebar */}
              <div className="lg:hidden">
                {/* Space reserved for the mobile menu button */}
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold">
                  {categoryName}{typeLabel && <span className="text-accent-purple"> - {typeLabel.charAt(0).toUpperCase() + typeLabel.slice(1)}</span>}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Browse and copy our collection of {categoryName.toLowerCase()}{typeLabel && ` ${typeLabel}`} components
                </p>
              </div>
            </div>
            
            {components.length > 0 ? (
              <motion.div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 ${
                  hasAuthForms ? 'md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2' : ''
                }`}
                variants={container}
                initial="hidden"
                animate="show"
              >
                {components.map((component, index) => (
                  <ComponentCardFactory
                    key={component.id}
                    component={component}
                    delay={index}
                    category={categoryKey}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No components found</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This category doesn't have any components yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
