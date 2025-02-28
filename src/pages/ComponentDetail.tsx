import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Copy, ArrowRight, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import CategorySidebar from "@/components/CategorySidebar";

// Mock component data (imported from CategoryPage to ensure consistency)
// In a real application, this would be fetched from an API or a shared data source
const mockComponents = {
  sliders: [
    { 
      id: 1, 
      name: "Responsive Carousel Slider", 
      code: "<div>Carousel Slider Code Here</div>",
      html: "<div class=\"carousel\"><!-- HTML structure --></div>",
      css: ".carousel {\n  /* CSS styles */\n}"
    },
    { 
      id: 2, 
      name: "Range Slider with Labels", 
      code: "<div>Range Slider Code Here</div>",
      html: "<div class=\"range-slider\"><!-- HTML structure --></div>",
      css: ".range-slider {\n  /* CSS styles */\n}"
    },
    { 
      id: 3, 
      name: "Image Comparison Slider", 
      code: "<div>Image Comparison Code Here</div>",
      html: "<div class=\"comparison-slider\"><!-- HTML structure --></div>",
      css: ".comparison-slider {\n  /* CSS styles */\n}"
    },
    { 
      id: 4, 
      name: "Multi-handle Slider", 
      code: "<div>Multi-handle Slider Code Here</div>",
      html: "<div class=\"multi-handle\"><!-- HTML structure --></div>",
      css: ".multi-handle {\n  /* CSS styles */\n}"
    },
  ],
  forms: [
    { 
      id: 1, 
      name: "Contact Form with Validation", 
      code: "<div>Contact Form Code Here</div>",
      html: "<form class=\"contact-form\"><!-- HTML structure --></form>",
      css: ".contact-form {\n  /* CSS styles */\n}"
    },
    { 
      id: 2, 
      name: "Multi-step Form", 
      code: "<div>Multi-step Form Code Here</div>",
      html: "<form class=\"multi-step\"><!-- HTML structure --></form>",
      css: ".multi-step {\n  /* CSS styles */\n}"
    },
    { 
      id: 3, 
      name: "Subscription Form", 
      code: "<div>Subscription Form Code Here</div>",
      html: "<form class=\"subscription\"><!-- HTML structure --></form>",
      css: ".subscription {\n  /* CSS styles */\n}"
    },
    { 
      id: 4, 
      name: "Inline Editing Form", 
      code: "<div>Inline Editing Form Code Here</div>",
      html: "<form class=\"inline-edit\"><!-- HTML structure --></form>",
      css: ".inline-edit {\n  /* CSS styles */\n}"
    },
  ],
  // Including the same pattern for other categories
  pricing: [
    { 
      id: 1, 
      name: "Tiered Pricing Table", 
      code: "<div>Tiered Pricing Table Code Here</div>",
      html: "<div class=\"pricing-table\"><!-- HTML structure --></div>",
      css: ".pricing-table {\n  /* CSS styles */\n}"
    },
    { 
      id: 2, 
      name: "Comparison Pricing Grid", 
      code: "<div>Comparison Pricing Grid Code Here</div>",
      html: "<div class=\"pricing-grid\"><!-- HTML structure --></div>",
      css: ".pricing-grid {\n  /* CSS styles */\n}"
    },
    { 
      id: 3, 
      name: "Toggle Monthly/Annual Pricing", 
      code: "<div>Toggle Pricing Code Here</div>",
      html: "<div class=\"toggle-pricing\"><!-- HTML structure --></div>",
      css: ".toggle-pricing {\n  /* CSS styles */\n}"
    },
    { 
      id: 4, 
      name: "Feature-focused Pricing Table", 
      code: "<div>Feature Pricing Code Here</div>",
      html: "<div class=\"feature-pricing\"><!-- HTML structure --></div>",
      css: ".feature-pricing {\n  /* CSS styles */\n}"
    },
  ],
  // Abbreviated for brevity - you would continue for all categories
  accordions: [
    { 
      id: 1, 
      name: "Simple Accordion", 
      code: "<div>Simple Accordion Code Here</div>",
      html: "<div class=\"accordion\"><!-- HTML structure --></div>",
      css: ".accordion {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  charts: [
    { 
      id: 1, 
      name: "Bar Chart", 
      code: "<div>Bar Chart Code Here</div>",
      html: "<div class=\"bar-chart\"><!-- HTML structure --></div>",
      css: ".bar-chart {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  galleries: [
    { 
      id: 1, 
      name: "Masonry Gallery", 
      code: "<div>Masonry Gallery Code Here</div>",
      html: "<div class=\"masonry\"><!-- HTML structure --></div>",
      css: ".masonry {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  buttons: [
    { 
      id: 1, 
      name: "Gradient Buttons", 
      code: "<div>Gradient Buttons Code Here</div>",
      html: "<button class=\"gradient-btn\">Button</button>",
      css: ".gradient-btn {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  modals: [
    { 
      id: 1, 
      name: "Basic Modal", 
      code: "<div>Basic Modal Code Here</div>",
      html: "<div class=\"modal\"><!-- HTML structure --></div>",
      css: ".modal {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  navigation: [
    { 
      id: 1, 
      name: "Responsive Navbar", 
      code: "<div>Responsive Navbar Code Here</div>",
      html: "<nav class=\"navbar\"><!-- HTML structure --></nav>",
      css: ".navbar {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  footers: [
    { 
      id: 1, 
      name: "Simple Footer", 
      code: "<div>Simple Footer Code Here</div>",
      html: "<footer class=\"footer\"><!-- HTML structure --></footer>",
      css: ".footer {\n  /* CSS styles */\n}"
    },
    // Additional components...
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

// CodeBlock component for rendering code with syntax highlighting
const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast.success(`${language} code copied to clipboard!`);
  };

  return (
    <div className="relative rounded-md bg-gray-900 text-gray-100 overflow-hidden">
      <div className="absolute top-2 right-2">
        <Button 
          size="sm" 
          variant="ghost" 
          className="text-gray-400 hover:text-white"
          onClick={handleCopyCode}
        >
          <Copy className="w-4 h-4" />
          <span className="ml-1 text-xs">Copy</span>
        </Button>
      </div>
      <pre className="p-4 pt-10 overflow-auto">
        <code className={`language-${language.toLowerCase()}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

const ComponentDetail: React.FC = () => {
  const { category, componentId } = useParams<{ category: string; componentId: string }>();
  const [activeTab, setActiveTab] = useState<string>("html");
  
  // Find the component
  const categoryKey = category || '';
  const components = mockComponents[categoryKey as keyof typeof mockComponents] || [];
  const component = components.find(c => c.id.toString() === componentId);
  const categoryName = getCategoryName(categoryKey);

  // Set page title
  useEffect(() => {
    if (component) {
      document.title = `${component.name} | ${categoryName} | UIverse.ai`;
    }
  }, [component, categoryName]);

  if (!component) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Component Not Found</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            The component you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to={`/components/${category}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {categoryName}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex">
        {/* Category Sidebar */}
        <CategorySidebar />
        
        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb & Back Button */}
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link to={`/components/${category}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {categoryName}
                </Link>
              </Button>
            </div>
            
            {/* Component Title */}
            <h1 className="text-3xl font-bold mb-8">{component.name}</h1>
            
            {/* Component Preview & Code - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Component Preview - Left Column */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex items-center justify-center shadow-md min-h-[300px]">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">[Interactive {component.name} Preview]</p>
                </div>
              </div>
              
              {/* Code Tabs - Right Column */}
              <div>
                <Tabs defaultValue="html" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="html">HTML</TabsTrigger>
                    <TabsTrigger value="css">CSS</TabsTrigger>
                    <TabsTrigger value="full">Full Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="html">
                    <CodeBlock code={component.html} language="HTML" />
                  </TabsContent>
                  <TabsContent value="css">
                    <CodeBlock code={component.css} language="CSS" />
                  </TabsContent>
                  <TabsContent value="full">
                    <CodeBlock code={component.code} language="HTML" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Mobile Layout Adjustments for Small Screens */}
            <div className="block lg:hidden mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Tip: Rotate your device for a better view of the code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComponentDetail; 