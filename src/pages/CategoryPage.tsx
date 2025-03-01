import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import CategorySidebar from "@/components/CategorySidebar";

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
    // Social buttons
    { id: 1, name: "Facebook Auth Button", code: "<div>Facebook Auth Button Code Here</div>", type: "social" },
    { id: 2, name: "X Auth Button", code: "<div>X Auth Button Code Here</div>", type: "social" },
    { id: 3, name: "Github Auth Button", code: "<div>Github Auth Button Code Here</div>", type: "social" },
    { id: 4, name: "Google Auth Button", code: "<div>Google Auth Button Code Here</div>", type: "social" },
    { id: 5, name: "Apple Auth Button", code: "<div>Apple Auth Button Code Here</div>", type: "social" },
    { id: 6, name: "Reddit Auth Button", code: "<div>Reddit Auth Button Code Here</div>", type: "social" },
    // Functional buttons
    { id: 7, name: "Submit Button", code: "<div>Submit Button Code Here</div>", type: "functional" },
    { id: 8, name: "Download Button", code: "<div>Download Button Code Here</div>", type: "functional" },
    // Creative buttons
    { id: 9, name: "Neon Button", code: "<div>Neon Button Code Here</div>", type: "creative" },
    { id: 10, name: "3D Button", code: "<div>3D Button Code Here</div>", type: "creative" },
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

const ComponentCard: React.FC<{ component: any; delay: number; category: string }> = ({ component, delay, category }) => {
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
          {component.name === "Facebook Auth Button" ? (
            <button className="facebook-auth-btn-card">
              <div className="facebook-icon-wrapper-card">
                <svg className="facebook-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with Facebook</span>
            </button>
          ) : component.name === "X Auth Button" ? (
            <button className="x-auth-btn-card">
              <div className="x-icon-wrapper-card">
                <svg className="x-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with X</span>
            </button>
          ) : component.name === "Github Auth Button" ? (
            <button className="github-auth-btn-card">
              <div className="github-icon-wrapper-card">
                <svg className="github-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with GitHub</span>
            </button>
          ) : component.name === "Google Auth Button" ? (
            <button className="google-auth-btn-card">
              <div className="google-icon-wrapper-card">
                <svg className="google-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with Google</span>
            </button>
          ) : component.name === "Apple Auth Button" ? (
            <button className="apple-auth-btn-card">
              <div className="apple-icon-wrapper-card">
                <svg className="apple-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with Apple</span>
            </button>
          ) : component.name === "Reddit Auth Button" ? (
            <button className="reddit-auth-btn-card">
              <div className="reddit-icon-wrapper-card">
                <svg className="reddit-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with Reddit</span>
            </button>
          ) : component.name === "Submit Button" ? (
            <button className="px-6 py-2 font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md">
              Submit
            </button>
          ) : component.name === "Download Button" ? (
            <button className="px-6 py-2 font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </button>
          ) : component.name === "Neon Button" ? (
            <button className="relative px-6 py-2 font-medium text-white bg-purple-600 rounded-lg shadow-[0_0_10px_rgba(139,92,246,0.8),0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_15px_rgba(139,92,246,1),0_0_30px_rgba(139,92,246,0.8)] transition-shadow duration-300">
              Neon Effect
            </button>
          ) : component.name === "3D Button" ? (
            <button className="px-6 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-[0_6px_0_rgb(67,56,202)] hover:shadow-[0_3px_0_rgb(67,56,202)] transition-all duration-200 ease-in-out active:translate-y-3 active:shadow-none">
              3D Effect
            </button>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm">[Interactive {component.name} Preview]</p>
            </div>
          )}
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const buttonType = queryParams.get('type');
  
  const categoryKey = category || '';
  let components = mockComponents[categoryKey as keyof typeof mockComponents] || [];
  
  // Filter components based on button type if we're on the buttons page and have a type query param
  if (categoryKey === 'buttons' && buttonType) {
    // Filter buttons by their type property
    if (buttonType === 'social') {
      // Show only social buttons
      components = components.filter(comp => comp.type === 'social');
    } else if (buttonType === 'functional') {
      // Show only functional buttons
      components = components.filter(comp => comp.type === 'functional');
    } else if (buttonType === 'creative') {
      // Show only creative buttons
      components = components.filter(comp => comp.type === 'creative');
    }
  }
  
  const categoryName = getCategoryName(categoryKey);
  const buttonTypeLabel = buttonType ? ` - ${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}` : '';

  // Set page title
  useEffect(() => {
    document.title = `${categoryName}${buttonTypeLabel} | UIverse.ai`;
  }, [categoryName, buttonTypeLabel]);

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
    <Layout>
      <style>
        {`
          .google-auth-btn-card {
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

          .google-auth-btn-card:active {
            background-color: #3367d6;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
            transform: translateY(1px);
          }

          .google-auth-btn-card:hover {
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
          }

          .google-icon-wrapper-card {
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

          .google-icon-card {
            width: 18px;
            height: 18px;
          }

          .button-text-card {
            margin-left: 30px;
            color: white;
            font-size: 14px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            letter-spacing: 0.2px;
          }

          .github-auth-btn-card {
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

          .github-auth-btn-card:active {
            background-color: #1a1e22;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
            transform: translateY(1px);
          }

          .github-auth-btn-card:hover {
            background-color: #2b3137;
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
          }

          .github-icon-wrapper-card {
            position: absolute;
            left: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .github-icon-card {
            width: 20px;
            height: 20px;
          }

          .x-auth-btn-card {
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

          .x-auth-btn-card:active {
            background-color: #333333;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
            transform: translateY(1px);
          }

          .
