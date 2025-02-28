
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

// Mock component data (to be replaced with actual data in the future)
const mockComponents = {
  sliders: [
    { id: 1, name: "Responsive Carousel Slider", code: "<div>Carousel Slider Code Here</div>" },
    { id: 2, name: "Range Slider with Labels", code: "<div>Range Slider Code Here</div>" },
    { id: 3, name: "Image Comparison Slider", code: "<div>Image Comparison Code Here</div>" },
    { id: 4, name: "Multi-handle Slider", code: "<div>Multi-handle Slider Code Here</div>" },
  ],
  forms: [
    { id: 1, name: "Contact Form with Validation", code: "<div>Contact Form Code Here</div>" },
    { id: 2, name: "Multi-step Form", code: "<div>Multi-step Form Code Here</div>" },
    { id: 3, name: "Subscription Form", code: "<div>Subscription Form Code Here</div>" },
    { id: 4, name: "Inline Editing Form", code: "<div>Inline Editing Form Code Here</div>" },
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
  buttons: [
    { id: 1, name: "Gradient Buttons", code: "<div>Gradient Buttons Code Here</div>" },
    { id: 2, name: "Icon Buttons", code: "<div>Icon Buttons Code Here</div>" },
    { id: 3, name: "Animated Buttons", code: "<div>Animated Buttons Code Here</div>" },
    { id: 4, name: "Social Media Buttons", code: "<div>Social Media Buttons Code Here</div>" },
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

// Helper function to get a user-friendly category name
const getCategoryName = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    sliders: "Sliders",
    forms: "Forms",
    pricing: "Pricing Tables",
    accordions: "Accordions",
    charts: "Charts",
    galleries: "Galleries",
    buttons: "Buttons",
    modals: "Modals",
    navigation: "Navigation Bars",
    footers: "Footers",
  };
  
  return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
};

const ComponentCard: React.FC<{ component: any; delay: number }> = ({ component, delay }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(component.code);
    toast.success("Code copied to clipboard!");
  };

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
            className="flex items-center gap-1 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm"
            onClick={handleCopyCode}
          >
            <Copy className="w-4 h-4" />
            <span className="text-xs">Copy</span>
          </Button>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-[200px] flex items-center justify-center">
          {/* This will be replaced with the actual interactive component */}
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

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryKey = category || '';
  const components = mockComponents[categoryKey as keyof typeof mockComponents] || [];
  const categoryName = getCategoryName(categoryKey);

  // Set page title
  useEffect(() => {
    document.title = `${categoryName} | UIverse.ai`;
  }, [categoryName]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent-purple dark:hover:text-accent-purple transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold mt-4">{categoryName}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Browse and copy our collection of {categoryName.toLowerCase()} components
        </p>
      </div>

      {components.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {components.map((component, index) => (
            <ComponentCard key={component.id} component={component} delay={index} />
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
  );
};

export default CategoryPage;
