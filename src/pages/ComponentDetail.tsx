
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CategorySidebar from "@/components/CategorySidebar";
import { getCategoryName } from "@/utils/category";
import { componentData, ComponentCategory } from "@/data/components/index";
import DetailHeader from "@/components/component-detail/DetailHeader";
import PreviewSection from "@/components/component-detail/PreviewSection";
import CodeTabsSection from "@/components/component-detail/CodeTabsSection";

const ComponentDetail: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [activeTab, setActiveTab] = useState<string>("html");
  
  // Find the component - fixed parameter name to match the route parameter
  const categoryKey = category as ComponentCategory || 'buttons';
  const components = componentData[categoryKey] || [];
  const component = components.find(c => c.id.toString() === id);
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
          <Link 
            to={`/components/${category}`}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Back to {categoryName}
          </Link>
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
            {/* Header with back button and title */}
            <DetailHeader 
              categoryName={categoryName} 
              componentName={component.name} 
              categorySlug={category || ''} 
            />
            
            {/* Component Preview & Code - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Component Preview - Left Column */}
              <PreviewSection category={categoryKey} componentName={component.name} />
              
              {/* Code Tabs - Right Column */}
              <div>
                <CodeTabsSection 
                  component={component} 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab} 
                />
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
