
import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the current viewport is mobile
 * @param breakpoint The breakpoint to consider as mobile (in pixels)
 * @returns Boolean indicating if the current viewport is mobile
 */
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Check on mount
    checkIsMobile();
    
    // Set up event listener for window resize
    window.addEventListener("resize", checkIsMobile);
    
    // Clean up event listener
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};
