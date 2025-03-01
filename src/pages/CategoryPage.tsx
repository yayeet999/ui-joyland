
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import ComponentGrid from "@/components/ComponentGrid";
import ComponentCard from "@/components/ComponentCard";
import CategorySidebar from "@/components/CategorySidebar";

// Updated mock data with type property for button components
export const mockComponents = {
  sliders: [
    { id: 1, name: "Responsive Carousel Slider" },
    { id: 2, name: "Range Slider with Labels" },
    { id: 3, name: "Image Comparison Slider" },
    { id: 4, name: "Multi-handle Slider" },
  ],
  forms: [
    { id: 1, name: "Contact Form with Validation" },
    { id: 2, name: "Multi-step Form" },
    { id: 3, name: "Subscription Form" },
    { id: 4, name: "Inline Editing Form" },
  ],
  pricing: [
    { id: 1, name: "Tiered Pricing Table" },
    { id: 2, name: "Comparison Pricing Grid" },
    { id: 3, name: "Toggle Monthly/Annual Pricing" },
    { id: 4, name: "Feature-focused Pricing Table" },
  ],
  accordions: [
    { id: 1, name: "Simple Accordion" },
    { id: 2, name: "Nested Accordion" },
    { id: 3, name: "FAQ Accordion" },
    { id: 4, name: "Animated Accordion" },
  ],
  charts: [
    { id: 1, name: "Bar Chart" },
    { id: 2, name: "Line Chart" },
    { id: 3, name: "Pie Chart" },
    { id: 4, name: "Area Chart" },
  ],
  galleries: [
    { id: 1, name: "Masonry Gallery" },
    { id: 2, name: "Lightbox Gallery" },
    { id: 3, name: "Carousel Gallery" },
    { id: 4, name: "Grid Gallery" },
  ],
  buttons: [
    // Social Buttons - adding type property
    { id: 1, name: "Facebook Auth Button", type: "social", code: "// Facebook Auth Button code" },
    { id: 2, name: "X Auth Button", type: "social", code: "// X Auth Button code" },
    { id: 3, name: "Github Auth Button", type: "social", code: "// Github Auth Button code" },
    { id: 4, name: "Google Auth Button", type: "social", code: "// Google Auth Button code" },
    { id: 5, name: "Apple Auth Button", type: "social", code: "// Apple Auth Button code" },
    // Interactive Buttons - adding type property
    { id: 6, name: "Submit Button", type: "interactive", code: "// Submit Button code" },
    { id: 7, name: "Download Button", type: "interactive", code: "// Download Button code" },
    { id: 8, name: "Like Button", type: "interactive", code: "// Like Button code" },
    // Creative Buttons - adding type property
    { id: 9, name: "Glowing Button", type: "creative", code: "// Glowing Button code" },
    { id: 10, name: "Particle Button", type: "creative", code: "// Particle Button code" },
    { id: 11, name: "Hover Effect Button", type: "creative", code: "// Hover Effect Button code" },
    { id: 12, name: "3D Button", type: "creative", code: "// 3D Button code" },
  ],
  modals: [
    { id: 1, name: "Basic Modal" },
    { id: 2, name: "Confirmation Modal" },
    { id: 3, name: "Fullscreen Modal" },
    { id: 4, name: "Drawer Modal" },
  ],
  navigation: [
    { id: 1, name: "Responsive Navbar" },
    { id: 2, name: "Sidebar Navigation" },
    { id: 3, name: "Tabbed Navigation" },
    { id: 4, name: "Footer Navigation" },
  ],
  footers: [
    { id: 1, name: "Simple Footer" },
    { id: 2, name: "Multi-column Footer" },
    { id: 3, name: "Responsive Footer" },
    { id: 4, name: "Newsletter Footer" },
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

// Mock function for handling copy code
const handleCopyCode = (code: string) => {
  navigator.clipboard.writeText(code);
  // You could add toast notification here
};

// Simplified version of ComponentGrid that accepts children directly
const SimplifiedComponentGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const categoryKey = category || '';
  const categoryName = getCategoryName(categoryKey);
  const components = mockComponents[categoryKey as keyof typeof mockComponents] || [];
  
  // Group components by type for buttons category
  const buttonGroups = categoryKey === 'buttons' 
    ? {
        social: components.filter(c => (c as any).type === 'social'),
        interactive: components.filter(c => (c as any).type === 'interactive'),
        creative: components.filter(c => (c as any).type === 'creative')
      }
    : null;

  return (
    <Layout>
      <div className="flex">
        {/* Category Sidebar */}
        <CategorySidebar />
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                    <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      <span>Home</span>
                    </Link>
                  </Button>
                  <span className="text-gray-500 dark:text-gray-400">/</span>
                  <span className="text-gray-700 dark:text-gray-300">Components</span>
                  <span className="text-gray-500 dark:text-gray-400">/</span>
                  <span className="text-gray-900 dark:text-white font-medium">{categoryName}</span>
                </div>
                <h1 className="text-3xl font-bold">{categoryName}</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Browse our collection of {categoryName.toLowerCase()} components ready to use in your projects.
                </p>
              </div>
              
              <div>
                <Badge variant="outline" className="text-xs px-3 py-1 border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-700">
                  {components.length} components available
                </Badge>
              </div>
            </div>

            {/* If buttons category, display grouped by type */}
            {categoryKey === 'buttons' && buttonGroups ? (
              <div className="space-y-10">
                {/* Social Buttons */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-gray-700">Social Buttons</h2>
                  <SimplifiedComponentGrid>
                    {buttonGroups.social.map((component) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: component.id * 0.05 }}
                      >
                        <ComponentCard
                          component={{
                            id: component.id,
                            name: component.name,
                            description: "A customizable social authentication button."
                          }}
                          delay={component.id * 0.05}
                        />
                      </motion.div>
                    ))}
                  </SimplifiedComponentGrid>
                </div>
                
                {/* Interactive Buttons */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-gray-700">Interactive Buttons</h2>
                  <SimplifiedComponentGrid>
                    {buttonGroups.interactive.map((component) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: component.id * 0.05 }}
                      >
                        <ComponentCard
                          component={{
                            id: component.id,
                            name: component.name,
                            description: "An interactive button with animation effects."
                          }}
                          delay={component.id * 0.05}
                        />
                      </motion.div>
                    ))}
                  </SimplifiedComponentGrid>
                </div>
                
                {/* Creative Buttons */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-gray-700">Creative Buttons</h2>
                  <SimplifiedComponentGrid>
                    {buttonGroups.creative.map((component) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: component.id * 0.05 }}
                      >
                        <ComponentCard
                          component={{
                            id: component.id,
                            name: component.name,
                            description: "A creative button with unique visual effects."
                          }}
                          delay={component.id * 0.05}
                        />
                      </motion.div>
                    ))}
                  </SimplifiedComponentGrid>
                </div>
              </div>
            ) : (
              // Default grid for other categories
              <SimplifiedComponentGrid>
                {components.map((component) => (
                  <motion.div
                    key={component.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: component.id * 0.05 }}
                  >
                    <ComponentCard
                      component={{
                        id: component.id,
                        name: component.name,
                        description: `A customizable ${component.name.toLowerCase()} component.`
                      }}
                      delay={component.id * 0.05}
                    />
                  </motion.div>
                ))}
              </SimplifiedComponentGrid>
            )}
          </div>
        </div>
      </div>
      
      <style>
        {`
        .facebook-auth-btn {
          width: 220px;
          height: 42px;
          background-color: #1877F2;
          border-radius: 4px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          position: relative;
        }
        
        .facebook-auth-btn:active {
          background-color: #0b5fcc;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
          transform: translateY(1px);
        }
        
        .facebook-auth-btn:hover {
          background-color: #166fe5;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
        }
        
        .facebook-icon-wrapper {
          position: absolute;
          left: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .facebook-icon {
          width: 20px;
          height: 20px;
        }
        
        .x-auth-btn {
          width: 220px;
          height: 42px;
          background-color: #000000;
          border-radius: 4px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          position: relative;
        }
        
        .x-auth-btn:active {
          background-color: #333333;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
          transform: translateY(1px);
        }
        
        .x-auth-btn:hover {
          background-color: #222222;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
        }
        
        .x-icon-wrapper {
          position: absolute;
          left: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .x-icon {
          width: 18px;
          height: 18px;
        }
        
        .github-auth-btn {
          width: 220px;
          height: 42px;
          background-color: #24292e;
          border-radius: 6px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          position: relative;
        }
        
        .github-auth-btn:active {
          background-color: #1a1e22;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
          transform: translateY(1px);
        }
        
        .github-auth-btn:hover {
          background-color: #2b3137;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
        }
        
        .github-icon-wrapper {
          position: absolute;
          left: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .github-icon {
          width: 20px;
          height: 20px;
        }
        
        .google-auth-btn {
          width: 220px;
          height: 42px;
          background-color: #4285f4;
          border-radius: 2px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          position: relative;
        }
        
        .google-auth-btn:active {
          background-color: #3367d6;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
          transform: translateY(1px);
        }
        
        .google-auth-btn:hover {
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
        }
        
        .google-icon-wrapper {
          position: absolute;
          left: 1px;
          top: 1px;
          width: 40px;
          height: 40px;
          border-radius: 2px;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .google-icon {
          width: 18px;
          height: 18px;
        }
        
        .apple-auth-btn {
          width: 220px;
          height: 42px;
          background-color: #000000;
          border-radius: 6px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          position: relative;
        }
        
        .apple-auth-btn:active {
          background-color: #1a1a1a;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
          transform: translateY(1px);
        }
        
        .apple-auth-btn:hover {
          background-color: #333333;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
        }
        
        .apple-icon-wrapper {
          position: absolute;
          left: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .apple-icon {
          width: 18px;
          height: 18px;
        }
        
        .button-text {
          margin-left: 16px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          letter-spacing: 0.2px;
        }

        .submit-button {
          width: 140px;
          height: 48px;
          background-color: #4f46e5;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          padding: 0 24px;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }
        
        .submit-button:active {
          background-color: #4338ca;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transform: translateY(1px);
        }
        
        .submit-button:hover {
          background-color: #4338ca;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .submit-button:hover .arrow-icon {
          transform: translateX(4px);
        }
        
        .arrow-icon {
          width: 18px;
          height: 18px;
          stroke: white;
          transition: transform 0.2s ease;
        }
        `}
      </style>
    </Layout>
  );
};

export default CategoryPage;
