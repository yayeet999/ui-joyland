
import { useState, useEffect } from "react";
import { Search, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = ({
  searchQuery,
  setSearchQuery,
  darkMode,
  setDarkMode,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    toast({
      title: "Authentication Coming Soon",
      description: "Login functionality will be added in a future update",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo and Nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-accent-purple to-accent-blue"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                UIverse.ai
              </h1>
            </div>
            
            {/* Mobile nav buttons */}
            {isMobile && (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-full"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogin}
                  className="rounded-full"
                >
                  <User size={20} />
                </Button>
              </div>
            )}
          </div>

          {/* Search bar */}
          <div className="w-full md:max-w-md lg:max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 rounded-xl border border-gray-200 dark:border-gray-700 
                        bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-purple 
                        dark:text-white transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Nav Links & Account */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6 mr-4">
                <a href="/" className="font-medium hover:text-accent-purple transition-colors">Home</a>
                <a href="/favorites" className="font-medium hover:text-accent-purple transition-colors">Favorites</a>
              </nav>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              
              <Button 
                className="bg-accent-purple hover:bg-accent-purple/90 text-white"
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
