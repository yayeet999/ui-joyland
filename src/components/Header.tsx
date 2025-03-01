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
import { Dispatch, SetStateAction } from "react";

// Categories data - reused from CategorySidebarContent to ensure consistency
const categories = [
  { id: "galleries", name: "Galleries", href: "/components/galleries" },
  { id: "charts", name: "Charts", href: "/components/charts" },
  { 
    id: "forms", 
    name: "Forms", 
    href: "/components/forms",
    subCategories: [
      { id: "auth", name: "Auth", href: "/components/forms?type=auth" },
      { id: "misc", name: "Misc", href: "/components/forms?type=misc" }
    ]
  },
  { id: "pricing", name: "Pricing Tables", href: "/components/pricing" },
  { 
    id: "buttons", 
    name: "Buttons", 
    href: "/components/buttons",
    subCategories: [
      { id: "social", name: "Social", href: "/components/buttons?type=social" },
      { id: "functional", name: "Functional", href: "/components/buttons?type=functional" },
      { id: "creative", name: "Creative", href: "/components/buttons?type=creative" }
    ]
  },
  { id: "modals", name: "Modals", href: "/components/modals" },
  { id: "footers", name: "Footers", href: "/components/footers" },
];

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const Header = ({ darkMode, setDarkMode, searchQuery, setSearchQuery }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname + location.search;
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

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="w-full px-0 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl lg:text-2xl flex items-center gap-1">
            <span className="text-accent-purple">UI</span>Arcade
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
                  category.subCategories ? (
                    <div key={category.id}>
                      <DropdownMenuItem asChild className={`text-base font-medium ${category.href === currentPath ? "bg-accent-purple/10 text-accent-purple" : ""}`}>
                        <Link to={category.href} className="w-full">
                          {category.name}
                        </Link>
                      </DropdownMenuItem>
                      <div className="pl-4 py-1">
                        {category.subCategories.map((subCategory) => {
                          const isActive = subCategory.href === currentPath;
                          return (
                            <DropdownMenuItem key={subCategory.id} asChild className={`text-sm ${isActive ? "bg-accent-purple/10 text-accent-purple" : ""}`}>
                              <Link to={subCategory.href} className="w-full">
                                {subCategory.name}
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <DropdownMenuItem key={category.id} asChild className={`text-base ${category.href === currentPath ? "bg-accent-purple/10 text-accent-purple" : ""}`}>
                      <Link to={category.href} className="w-full">
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  )
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
