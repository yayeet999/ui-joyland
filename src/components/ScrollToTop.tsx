import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop is a utility component that scrolls the window to the top
 * whenever the route changes. It solves the common issue in SPAs where
 * the scroll position is maintained between page navigations.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
} 