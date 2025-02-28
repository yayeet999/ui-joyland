
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import { motion } from "framer-motion";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beautiful UI Components for React Developers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover a collection of free, modern, and customizable UI components to use in your next project.
            Copy, paste, and create stunning interfaces in minutes.
          </p>
        </motion.div>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Explore Components by Category</h2>
          <CategoryGrid />
        </motion.div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          <p>© 2023 UIverse.ai - Beautiful UI Components</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
