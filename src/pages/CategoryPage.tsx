
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import ComponentGrid from "@/components/ComponentGrid";
import ComponentCard from "@/components/ComponentCard";
import CategorySidebar from "@/components/CategorySidebar";

// Mock data for components - in a real application, this would be fetched from an API
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
    // Social Buttons
    { id: 1, name: "Facebook Auth Button", type: "social" },
    { id: 2, name: "X Auth Button", type: "social" },
    { id: 3, name: "Github Auth Button", type: "social" },
    { id: 4, name: "Google Auth Button", type: "social" },
    { id: 5, name: "Apple Auth Button", type: "social" },
    // Interactive Buttons
    { id: 6, name: "Submit Button", type: "interactive" },
    { id: 7, name: "Download Button", type: "interactive" },
    { id: 8, name: "Like Button", type: "interactive" },
    // Creative Buttons
    { id: 9, name: "Glowing Button", type: "creative" },
    { id: 10, name: "Particle Button", type: "creative" },
    { id: 11, name: "Hover Effect Button", type: "creative" },
    { id: 12, name: "3D Button", type: "creative" },
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

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const categoryKey = category || '';
  const categoryName = getCategoryName(categoryKey);
  const components = mockComponents[categoryKey as keyof typeof mockComponents] || [];
  
  // Group components by type for buttons category
  const buttonGroups = categoryKey === 'buttons' 
    ? {
        social: components.filter(c => c.type === 'social'),
        interactive: components.filter(c => c.type === 'interactive'),
        creative: components.filter(c => c.type === 'creative')
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
                  <ComponentGrid>
                    {buttonGroups.social.map((component) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: component.id * 0.05 }}
                      >
                        <ComponentCard
                          title={component.name}
                          description="A customizable social authentication button."
                          preview={
                            component.name === "Facebook Auth Button" ? (
                              <div className="flex items-center justify-center w-full h-full">
                                <button className="facebook-auth-btn">
                                  <div className="facebook-icon-wrapper">
                                    <svg className="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                  </div>
                                  <span className="button-text">Sign in with Facebook</span>
                                </button>
                              </div>
                            ) : component.name === "X Auth Button" ? (
                              <div className="flex items-center justify-center w-full h-full">
                                <button className="x-auth-btn">
                                  <div className="x-icon-wrapper">
                                    <svg className="x-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                  </div>
                                  <span className="button-text">Sign in with X</span>
                                </button>
                              </div>
                            ) : component.name === "Github Auth Button" ? (
                              <div className="flex items-center justify-center w-full h-full">
                                <button className="github-auth-btn">
                                  <div className="github-icon-wrapper">
                                    <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                  </div>
                                  <span className="button-text">Sign in with GitHub</span>
                                </button>
                              </div>
                            ) : component.name === "Google Auth Button" ? (
                              <div className="flex items-center justify-center w-full h-full">
                                <button className="google-auth-btn">
                                  <div className="google-icon-wrapper">
                                    <svg className="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                    </svg>
                                  </div>
                                  <span className="button-text">Sign in with Google</span>
                                </button>
                              </div>
                            ) : component.name === "Apple Auth Button" ? (
                              <div className="flex items-center justify-center w-full h-full">
                                <button className="apple-auth-btn">
                                  <div className="apple-icon-wrapper">
                                    <svg className="apple-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                      <path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                                    </svg>
                                  </div>
                                  <span className="button-text">Sign in with Apple</span>
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center w-full h-full">
                                <div className="text-gray-400 dark:text-gray-600 font-medium">Preview not available</div>
                              </div>
                            )
                          }
                          link={`/components/${categoryKey}/${component.id}`}
                        />
                      </motion.div>
                    ))}
                  </ComponentGrid>
                </div>
                
                {/* Interactive Buttons */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-gray-700">Interactive Buttons</h2>
                  <ComponentGrid>
                    {buttonGroups.interactive.map((component) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: component.id * 0.05 }}
                      >
                        <ComponentCard
                          title={component.name}
                          description="An interactive button with animation effects."
                          preview={
                            component.name === "Submit Button" ? (
                              <div className="flex items-center justify-center w-full h-full">
                                <button className="submit-button">
                                  <span className="button-text">Submit</span>
                                  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                  </svg>
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center w-full h-full">
                                <div className="text-gray-400 dark:text-gray-600 font-medium">Preview not available</div>
                              </div>
                            )
                          }
                          link={`/components/${categoryKey}/${component.id}`}
                        />
                      </motion.div>
                    ))}
                  </ComponentGrid>
                </div>
                
                {/* Creative Buttons */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-gray-700">Creative Buttons</h2>
                  <ComponentGrid>
                    {buttonGroups.creative.map((component) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: component.id * 0.05 }}
                      >
                        <ComponentCard
                          title={component.name}
                          description="A creative button with unique visual effects."
                          preview={
                            <div className="flex items-center justify-center w-full h-full">
                              <div className="text-gray-400 dark:text-gray-600 font-medium">Preview not available</div>
                            </div>
                          }
                          link={`/components/${categoryKey}/${component.id}`}
                        />
                      </motion.div>
                    ))}
                  </ComponentGrid>
                </div>
              </div>
            ) : (
              // Default grid for other categories
              <ComponentGrid>
                {components.map((component) => (
                  <motion.div
                    key={component.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: component.id * 0.05 }}
                  >
                    <ComponentCard
                      title={component.name}
                      description={`A customizable ${component.name.toLowerCase()} component.`}
                      preview={
                        <div className="flex items-center justify-center w-full h-full">
                          <div className="text-gray-400 dark:text-gray-600 font-medium">Preview not available</div>
                        </div>
                      }
                      link={`/components/${categoryKey}/${component.id}`}
                    />
                  </motion.div>
                ))}
              </ComponentGrid>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
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
      `}</style>
    </Layout>
  );
};

export default CategoryPage;
