import { useState } from "react";
import CategoryGrid from "@/components/CategoryGrid";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Sparkles, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <Layout>
      {/* Hero Section with gradient background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute inset-y-0 left-1/3 w-1/3 bg-accent-purple/5 transform -skew-x-12"></div>
          <div className="absolute inset-y-0 right-1/4 w-1/5 bg-accent-blue/5 transform skew-x-12"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm"
            >
              <span className="text-accent-purple font-medium text-sm flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Beautiful UI Components for React
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-blue dark:from-accent-purple dark:to-accent-blue">
              Build Better Interfaces Faster
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover a collection of free, modern, and customizable UI components to use in your next project.
              Copy, paste, and create stunning interfaces in minutes.
            </p>
            
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSearch} className="relative w-full max-w-xl">
                <div className="relative rounded-full shadow-md overflow-hidden bg-white dark:bg-gray-800">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search components..."
                    className="pl-12 pr-4 py-3 h-14 w-full border-none focus:ring-2 focus:ring-accent-purple bg-transparent rounded-full text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Try searching for "buttons", "cards", "forms" or browse categories below
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div id="categories" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Explore Components by Category</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Browse our collection of UI components organized by category. Click on any category to explore.
          </p>
        </motion.div>
        
        <CategoryGrid />
      </div>
    </Layout>
  );
};

export default Index;
