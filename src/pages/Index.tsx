
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ComponentGrid from "@/components/ComponentGrid";
import { useToast } from "@/hooks/use-toast";
import { ComponentCategory, UIComponent } from "@/types/components";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredComponents, setFilteredComponents] = useState<UIComponent[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ComponentCategory | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Mock data for UI components
  const components: UIComponent[] = [
    {
      id: "1",
      name: "Gradient Button",
      description: "A sleek button with gradient styling",
      category: "buttons",
      preview: "/component-previews/gradient-button.png",
      code: `<button className="px-6 py-2 font-medium rounded-lg 
      bg-gradient-to-r from-accent-purple to-accent-blue text-white 
      transition-all hover:shadow-lg">
  Button
</button>`,
    },
    {
      id: "2",
      name: "Hover Card",
      description: "An elegant card with hover effects",
      category: "cards",
      preview: "/component-previews/hover-card.png",
      code: `<div className="p-6 max-w-sm mx-auto rounded-xl shadow-md 
      transition-all duration-300 hover:shadow-xl bg-white 
      dark:bg-neutral-800">
  <div className="flex items-center space-x-4">
    <div className="shrink-0">
      <span className="h-12 w-12 rounded-full bg-accent-purple"></span>
    </div>
    <div>
      <h3 className="text-xl font-medium dark:text-white">Card Title</h3>
      <p className="text-gray-500 dark:text-gray-300">Card description goes here</p>
    </div>
  </div>
</div>`,
    },
    {
      id: "3",
      name: "Simple Form",
      description: "Clean, minimal form with floating labels",
      category: "forms",
      preview: "/component-previews/simple-form.png",
      code: `<form className="space-y-6">
  <div className="relative">
    <input id="email" type="email" placeholder=" " 
      className="w-full px-3 py-3 bg-transparent border-b border-gray-300 
      focus:border-accent-purple outline-none transition-all peer" />
    <label htmlFor="email" 
      className="absolute left-3 -top-3 text-sm text-gray-500 
      transition-all peer-placeholder-shown:top-3 
      peer-placeholder-shown:text-base peer-focus:-top-3 
      peer-focus:text-sm">
      Email
    </label>
  </div>
  <div className="relative">
    <input id="password" type="password" placeholder=" " 
      className="w-full px-3 py-3 bg-transparent border-b border-gray-300 
      focus:border-accent-purple outline-none transition-all peer" />
    <label htmlFor="password" 
      className="absolute left-3 -top-3 text-sm text-gray-500 
      transition-all peer-placeholder-shown:top-3 
      peer-placeholder-shown:text-base peer-focus:-top-3 
      peer-focus:text-sm">
      Password
    </label>
  </div>
  <button type="submit" 
    className="w-full py-3 font-medium rounded-lg 
    bg-accent-purple text-white transition-all 
    hover:shadow-lg">
    Submit
  </button>
</form>`,
    },
    {
      id: "4",
      name: "Accordion",
      description: "Minimal accordion with smooth transitions",
      category: "accordions",
      preview: "/component-previews/accordion.png",
      code: `<div className="space-y-2">
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left font-medium flex justify-between items-center">
      <span>Section 1</span>
      <span>+</span>
    </button>
    <div className="px-4 pb-4">
      <p className="text-gray-500 dark:text-gray-300">
        Content for section 1 goes here. You can put any content here.
      </p>
    </div>
  </div>
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left font-medium flex justify-between items-center">
      <span>Section 2</span>
      <span>+</span>
    </button>
    <div className="px-4 pb-4">
      <p className="text-gray-500 dark:text-gray-300">
        Content for section 2 goes here. You can put any content here.
      </p>
    </div>
  </div>
</div>`,
    },
    {
      id: "5",
      name: "Switch",
      description: "Modern toggle switch with animation",
      category: "forms",
      preview: "/component-previews/switch.png",
      code: `<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer 
    dark:bg-gray-700 peer-checked:after:translate-x-full 
    peer-checked:after:border-white after:content-[''] 
    after:absolute after:top-[2px] after:left-[2px] 
    after:bg-white after:border-gray-300 after:border 
    after:rounded-full after:h-5 after:w-5 after:transition-all 
    dark:border-gray-600 peer-checked:bg-accent-purple"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
    Toggle
  </span>
</label>`,
    },
    {
      id: "6",
      name: "Pricing Table",
      description: "Clean pricing table with highlighted tier",
      category: "pricing",
      preview: "/component-previews/pricing-table.png",
      code: `<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-semibold mb-2">Basic</h3>
    <div className="text-3xl font-bold mb-4">$19<span className="text-lg font-normal text-gray-500">/mo</span></div>
    <ul className="space-y-3 mb-6">
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        Feature one
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        Feature two
      </li>
    </ul>
    <button className="w-full py-2 px-4 bg-white dark:bg-gray-800 text-accent-purple border border-accent-purple rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
      Choose Plan
    </button>
  </div>
  <div className="p-6 rounded-xl border-2 border-accent-purple relative">
    <span className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-accent-purple text-white px-3 py-1 text-xs rounded-full uppercase font-semibold">Popular</span>
    <h3 className="text-xl font-semibold mb-2">Pro</h3>
    <div className="text-3xl font-bold mb-4">$49<span className="text-lg font-normal text-gray-500">/mo</span></div>
    <ul className="space-y-3 mb-6">
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        All Basic features
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        Pro feature one
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        Pro feature two
      </li>
    </ul>
    <button className="w-full py-2 px-4 bg-accent-purple text-white rounded-lg hover:shadow-lg transition-all">
      Choose Plan
    </button>
  </div>
  <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
    <div className="text-3xl font-bold mb-4">$99<span className="text-lg font-normal text-gray-500">/mo</span></div>
    <ul className="space-y-3 mb-6">
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        All Pro features
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        Enterprise feature one
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-accent-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        24/7 Support
      </li>
    </ul>
    <button className="w-full py-2 px-4 bg-white dark:bg-gray-800 text-accent-purple border border-accent-purple rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
      Contact Sales
    </button>
  </div>
</div>`,
    },
  ];

  const categories: ComponentCategory[] = [
    { id: "buttons", name: "Buttons" },
    { id: "cards", name: "Cards" },
    { id: "forms", name: "Forms & Inputs" },
    { id: "accordions", name: "Accordions" },
    { id: "pricing", name: "Pricing Tables" },
  ];

  // Filter components based on search query and selected category
  useEffect(() => {
    let filtered = components;
    
    if (searchQuery) {
      filtered = filtered.filter(
        (component) =>
          component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          component.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter((component) => component.category === selectedCategory.id);
    }
    
    setFilteredComponents(filtered);
  }, [searchQuery, selectedCategory]);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Initialize with all components
  useEffect(() => {
    setFilteredComponents(components);
  }, []);

  const handleCategorySelect = (category: ComponentCategory | null) => {
    setSelectedCategory(category);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleCopyCode = (code: string) => {
    // In a real app, this would check auth status
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "The component code is now in your clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              ComponentUI
            </h1>
          </div>

          <div className="flex-1 mx-4 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 dark:border-gray-700 
                           bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-purple 
                           dark:text-white transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button className="bg-accent-purple hover:bg-accent-purple/90 text-white">
              Sign In
            </Button>
          </div>
        </div>
        
        {/* Mobile search */}
        {isMobile && (
          <div className="px-4 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 dark:border-gray-700 
                          bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-purple 
                          dark:text-white transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}
      </header>

      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar - Desktop */}
        {!isMobile && (
          <aside className="w-64 pr-8">
            <nav className="space-y-1">
              <button
                onClick={() => handleCategorySelect(null)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === null
                    ? "bg-accent-purple/10 text-accent-purple font-medium"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                All Components
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory?.id === category.id
                      ? "bg-accent-purple/10 text-accent-purple font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </aside>
        )}

        {/* Mobile sidebar */}
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 p-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Categories</h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <nav className="space-y-1">
                <button
                  onClick={() => handleCategorySelect(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === null
                      ? "bg-accent-purple/10 text-accent-purple font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  All Components
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory?.id === category.id
                        ? "bg-accent-purple/10 text-accent-purple font-medium"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}

        {/* Main content */}
        <main className="flex-1">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {selectedCategory ? selectedCategory.name : "All Components"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredComponents.length} components available in this category
            </p>
          </div>

          <ComponentGrid 
            components={filteredComponents} 
            onCopyCode={handleCopyCode} 
          />
        </main>
      </div>
    </div>
  );
};

export default Index;
