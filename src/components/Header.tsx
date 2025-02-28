import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { isCategoryPage } from "@/lib/utils";
import CategorySidebarContent from "./CategorySidebarContent";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserMenu } from "@/components/UserMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Categories data - reused from CategorySidebarContent to ensure consistency
const categories = [
  { id: "sliders", name: "Sliders", href: "/components/sliders" },
  { id: "galleries", name: "Galleries", href: "/components/galleries" },
  { id: "accordions", name: "Accordions", href: "/components/accordions" },
  { id: "charts", name: "Charts", href: "/components/charts" },
  { id: "forms", name: "Forms", href: "/components/forms" },
  { id: "pricing", name: "Pricing Tables", href: "/components/pricing" },
  { id: "buttons", name: "Buttons", href: "/components/buttons" },
  { id: "modals", name: "Modals", href: "/components/modals" },
  { id: "navigation", name: "Navigation Bars", href: "/components/navigation" },
  { id: "footers", name: "Footers", href: "/components/footers" },
];

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || 
    (!localStorage.getItem("theme") && 
     window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isCategory = isCategoryPage(location.pathname);

  const closeSidebar = () => setIsSidebarOpen(false);

  // Close sidebar when location changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Initialize dark mode on first render
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl flex items-center gap-1">
            <span className="text-accent-purple">UI</span>Joyland
          </Link>
          
          {/* UI Components Dropdown - Only visible on large screens */}
          <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-base font-medium flex items-center gap-1">
                  UI Components
                  <ChevronDown className="h-5 w-5 ml-1 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild className="text-base">
                    <Link to={category.href} className="w-full">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Templates (Coming Soon) - Greyed out and unclickable */}
            <div className="text-base font-medium text-gray-400 cursor-not-allowed select-none">
              Templates (coming soon)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="ml-1"
          >
            {darkMode ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* User Menu / Auth Button */}
          <UserMenu />
          
          {/* Category Menu (only for category pages) - Moved AFTER UserMenu for mobile */}
          {isCategory && (
            <div className="lg:hidden">
              <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-1">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle category menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[350px] p-0">
                  <CategorySidebarContent onItemClick={closeSidebar} />
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Also export as default for backward compatibility with existing imports
export default Header;
