<lov-code>
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CategorySidebar from "@/components/CategorySidebar";

// Define component type
interface ComponentItem {
  id: number;
  name: string;
  code: string;
  type?: string;
}

// Mock component data (to be replaced with actual data in the future)
const mockComponents: Record<string, ComponentItem[]> = {
  sliders: [
    { id: 1, name: "Responsive Carousel Slider", code: "<div>Carousel Slider Code Here</div>" },
    { id: 2, name: "Range Slider with Labels", code: "<div>Range Slider Code Here</div>" },
    { id: 3, name: "Image Comparison Slider", code: "<div>Image Comparison Code Here</div>" },
    { id: 4, name: "Multi-handle Slider", code: "<div>Multi-handle Slider Code Here</div>" },
  ],
  forms: [
    { id: 1, name: "Contact Form with Validation", code: "<div>Contact Form Code Here</div>" },
    { id: 2, name: "Multi-step Form", code: "<div>Multi-step Form Code Here</div>" },
    { id: 3, name: "Subscription Form", code: "<div>Subscription Form Code Here</div>" },
    { id: 4, name: "Inline Editing Form", code: "<div>Inline Editing Form Code Here</div>" },
  ],
  pricing: [
    { id: 1, name: "Tiered Pricing Table", code: "<div>Tiered Pricing Table Code Here</div>" },
    { id: 2, name: "Comparison Pricing Grid", code: "<div>Comparison Pricing Grid Code Here</div>" },
    { id: 3, name: "Toggle Monthly/Annual Pricing", code: "<div>Toggle Pricing Code Here</div>" },
    { id: 4, name: "Feature-focused Pricing Table", code: "<div>Feature Pricing Code Here</div>" },
  ],
  accordions: [
    { id: 1, name: "Simple Accordion", code: "<div>Simple Accordion Code Here</div>" },
    { id: 2, name: "Nested Accordion", code: "<div>Nested Accordion Code Here</div>" },
    { id: 3, name: "FAQ Accordion", code: "<div>FAQ Accordion Code Here</div>" },
    { id: 4, name: "Animated Accordion", code: "<div>Animated Accordion Code Here</div>" },
  ],
  charts: [
    { id: 1, name: "Bar Chart", code: "<div>Bar Chart Code Here</div>" },
    { id: 2, name: "Line Chart", code: "<div>Line Chart Code Here</div>" },
    { id: 3, name: "Pie Chart", code: "<div>Pie Chart Code Here</div>" },
    { id: 4, name: "Area Chart", code: "<div>Area Chart Code Here</div>" },
  ],
  galleries: [
    { id: 1, name: "Masonry Gallery", code: "<div>Masonry Gallery Code Here</div>" },
    { id: 2, name: "Lightbox Gallery", code: "<div>Lightbox Gallery Code Here</div>" },
    { id: 3, name: "Carousel Gallery", code: "<div>Carousel Gallery Code Here</div>" },
    { id: 4, name: "Grid Gallery", code: "<div>Grid Gallery Code Here</div>" },
  ],
  buttons: [
    // Social buttons
    { id: 1, name: "Facebook Auth Button", code: "<div>Facebook Auth Button Code Here</div>", type: "social" },
    { id: 2, name: "X Auth Button", code: "<div>X Auth Button Code Here</div>", type: "social" },
    { id: 3, name: "Github Auth Button", code: "<div>Github Auth Button Code Here</div>", type: "social" },
    { id: 4, name: "Google Auth Button", code: "<div>Google Auth Button Code Here</div>", type: "social" },
    { id: 5, name: "Apple Auth Button", code: "<div>Apple Auth Button Code Here</div>", type: "social" },
    // Functional buttons
    { id: 6, name: "Submit Button", code: `<div class="button-wrapper">
  <button class="elegant-submit">
    <span class="button-content">
      <span class="button-text">Submit</span>
      <span class="button-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </span>
    <span class="button-border"></span>
    <span class="button-shadow"></span>
  </button>
</div>

<style>
@keyframes borderRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes successPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@keyframes buttonSuccess {
  0% {
    width: 180px;
  }
  15% {
    width: 50px;
    border-radius: 25px;
  }
  70% {
    width: 50px;
    border-radius: 25px;
  }
  100% {
    width: 180px;
    border-radius: 8px;
  }
}

@keyframes checkmark {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  70% {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  85% {
    opacity: 1;
    transform: scale(1.2) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes shadowPulse {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(145deg, #f6f8fb, #e8eaec);
  border-radius: 16px;
}

.elegant-submit {
  position: relative;
  width: 180px;
  height: 50px;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  overflow: visible;
  transform-style: preserve-3d;
  transition: transform 0.2s ease;
}

.button-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #111827;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 7px;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 1px 1px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform, box-shadow, background-color;
}

.button-text {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  font-kerning: normal;
}

.button-icon {
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.button-border {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  margin: -2px 0 0 -2px;
  border-radius: 10px;
  background: linear-gradient(90deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%, #FF3CAC 200%);
  background-size: 300% 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease;
  backface-visibility: hidden;
  will-change: opacity, background-position;
}

.button-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translateY(4px) translateZ(-1px);
  will-change: opacity, transform;
}

/* Hover state */
.elegant-submit:hover .button-content {
  box-shadow: 
    0 2px 12px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateY(-1px) translateZ(0);
}

.elegant-submit:hover .button-text {
  transform: translateX(-8px);
}

.elegant-submit:hover .button-icon {
  opacity: 1;
  transform: translateX(0);
}

.elegant-submit:hover .button-border {
  opacity: 1;
  animation: borderRotate 6s linear infinite;
}

.elegant-submit:hover .button-shadow {
  opacity: 1;
  transform: translateY(2px) translateZ(-1px);
}

/* Active/Clicked state */
.elegant-submit:active .button-content {
  transform: translateY(1px) translateZ(0) scale(0.98);
  background-color: #f8f9fb;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.04),
    inset 0 1px 2px rgba(0, 0, 0, 0.03);
  transition-duration: 0.1s;
}

.elegant-submit:active .button-shadow {
  opacity: 0.5;
  transform: translateY(0) translateZ(-1px);
  transition-duration: 0.1s;
}

/* Success state (applied with JavaScript) */
.elegant-submit.success .button-content {
  background-color: #10B981;
  color: white;
  box-shadow: 
    0 2px 10px rgba(16, 185, 129, 0.3),
    0 1px 3px rgba(16, 185, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  animation: buttonSuccess 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, successPulse 1s ease-in-out;
}

.elegant-submit.success::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin: -25px 0 0 -25px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.1);
  z-index: 0;
  animation: shadowPulse 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.elegant-submit.success .button-text {
  opacity: 0;
  transform: translateY(10px);
}

.elegant-submit.success .button-icon {
  position: static;
  opacity: 1;
  transform: translateX(0);
  animation: checkmark 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.elegant-submit.success .button-icon svg {
  stroke: white;
  stroke-width: 2.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.elegant-submit.success .button-border {
  opacity: 0;
  animation: none;
}

.elegant-submit.success .button-shadow {
  opacity: 0.8;
  transform: translateY(2px) translateZ(-1px) scale(1.05);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.25);
}

/* Focus state for accessibility */
.elegant-submit:focus-visible {
  outline: none;
}

.elegant-submit:focus-visible .button-border {
  opacity: 1;
  animation: borderRotate 6s linear infinite;
}
</style>

<script>
  document.querySelector('.elegant-submit').addEventListener('click', function() {
    const button = this;
    const icon = button.querySelector('.button-icon svg');
    const originalPath = icon.innerHTML;
    
    // Prevent multiple clicks
    if (button.classList.contains('success')) return;
    
    button.classList.add('success');
    
    // Change the icon to checkmark after animation starts
    setTimeout(() => {
      icon.innerHTML = '<path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
    }, 300);
    
    // Reset after animation
    setTimeout(() => {
      button.classList.remove('success');
      setTimeout(() => {
        icon.innerHTML = originalPath;
      }, 300);
    }, 2500);
  });
</script>`, type: "functional" },
    { id: 7, name: "Download Button", code: "<div>Download Button Code Here</div>", type: "functional" },
    // Creative buttons
    { id: 8, name: "Neon Button", code: "<div>Neon Button Code Here</div>", type: "creative" },
    { id: 9, name: "3D Button", code: "<div>3D Button Code Here</div>", type: "creative" },
  ],
  modals: [
    { id: 1, name: "Basic Modal", code: "<div>Basic Modal Code Here</div>" },
    { id: 2, name: "Confirmation Modal", code: "<div>Confirmation Modal Code Here</div>" },
    { id: 3, name: "Fullscreen Modal", code: "<div>Fullscreen Modal Code Here</div>" },
    { id: 4, name: "Drawer Modal", code: "<div>Drawer Modal Code Here</div>" },
  ],
  navigation: [
    { id: 1, name: "Responsive Navbar", code: "<div>Responsive Navbar Code Here</div>" },
    { id: 2, name: "Sidebar Navigation", code: "<div>Sidebar Navigation Code Here</div>" },
    { id: 3, name: "Breadcrumbs", code: "<div>Breadcrumbs Code Here</div>" },
    { id: 4, name: "Tab Navigation", code: "<div>Tab Navigation Code Here</div>" },
  ],
  footers: [
    { id: 1, name: "Simple Footer", code: "<div>Simple Footer Code Here</div>" },
    { id: 2, name: "Multi-column Footer", code: "<div>Multi-column Footer Code Here</div>" },
    { id: 3, name: "Dark Footer with Newsletter", code: "<div>Dark Footer Code Here</div>" },
    { id: 4, name: "Sticky Footer", code: "<div>Sticky Footer Code Here</div>" },
  ],
};

const ComponentDetail: React.FC = () => {
  const { category, componentId } = useParams<{ category: string; componentId: string }>();
  const navigate = useNavigate();
  const [component, setComponent] = useState<ComponentItem | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<"full" | "html" | "css" | "js">("full");

  useEffect(() => {
    if (componentId && category) {
      const categoryComponents = mockComponents[category as keyof typeof mockComponents] || [];
      const selectedComponent = categoryComponents.find(c => c.id === Number(componentId));
      
      if (selectedComponent) {
        setComponent(selectedComponent);
        
        // Special handling for the Submit Button - initialize with interactive behavior
        if (selectedComponent.name === "Submit Button" && category === "buttons") {
          document.title = `${selectedComponent.name} Component | UIverse.ai`;
          
          // Wait for the DOM to be ready
          setTimeout(() => {
            const submitButton = document.querySelector('#submit-button-preview .elegant-submit');
            if (submitButton) {
              submitButton.addEventListener('click', function(this: any) {
                const button = this;
                const icon = button.querySelector('.button-icon svg');
                const originalPath = icon.innerHTML;
                
                // Prevent multiple clicks
                if (button.classList.contains('success')) return;
                
                button.classList.add('success');
                
                // Change the icon to checkmark after animation starts
                setTimeout(() => {
                  icon.innerHTML = '<path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
                }, 300);
                
                // Reset after animation
                setTimeout(() => {
                  button.classList.remove('success');
                  setTimeout(() => {
                    icon.innerHTML = originalPath;
                  }, 300);
                }, 2500);
              });
            }
          }, 500);
        } else {
          document.title = `${selectedComponent.name} Component | UIverse.ai`;
        }
      } else {
        navigate('/not-found');
      }
    }
  }, [componentId, category, navigate]);

  const handleCopyCode = () => {
    if (component) {
      navigator.clipboard.writeText(component.code)
        .then(() => toast.success("Code copied to clipboard!"))
        .catch(() => toast.error("Failed to copy code. Please try again."));
    }
  };

  if (!component) {
    return (
      <Layout>
        <div className="flex">
          <CategorySidebar />
          <div className="flex-1 p-8">
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">Component Not Found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                The requested component could not be found.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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

  const categoryName = getCategoryName(category);

  // Function to handle the Submit Button's HTML display in the tab
  const getSubmitButtonHTML = () => {
    return `<div class="button-wrapper">
  <button class="elegant-submit">
    <span class="button-content">
      <span class="button-text">Submit</span>
      <span class="button-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </span>
    <span class="button-border"></span>
    <span class="button-shadow"></span>
  </button>
</div>`;
  };

  // Function to handle the Submit Button's CSS display in the tab
  const getSubmitButtonCSS = () => {
    return `@keyframes borderRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes successPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@keyframes buttonSuccess {
  0% {
    width: 180px;
  }
  15% {
    width: 50px;
    border-radius: 25px;
  }
  70% {
    width: 50px;
    border-radius: 25px;
  }
  100% {
    width: 180px;
    border-radius: 8px;
  }
}

@keyframes checkmark {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  70% {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  85% {
    opacity: 1;
    transform: scale(1.2) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes shadowPulse {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(145deg, #f6f8fb, #e8eaec);
  border-radius: 16px;
}

.elegant-submit {
  position: relative;
  width: 180px;
  height: 50px;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  overflow: visible;
  transform-style: preserve-3d;
  transition: transform 0.2s ease;
}

.button-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #111827;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 7px;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 1px 1px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform, box-shadow, background-color;
}

.button-text {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  font-kerning: normal;
}

.button-icon {
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.button-border {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  margin: -2px 0 0 -2px;
  border-radius: 10px;
  background: linear-gradient(90deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%, #FF3CAC 200%);
  background-size: 300% 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease;
  backface-visibility: hidden;
  will-change: opacity, background-position;
}

.button-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translateY(4px) translateZ(-1px);
  will-change: opacity, transform;
}

/* Hover state */
.elegant-submit:hover .button-content {
  box-shadow: 
    0 2px 12px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateY(-1px) translateZ(0);
}

.elegant-submit:hover .button-text {
  transform: translateX(-8px);
}

.elegant-submit:hover .button-icon {
  opacity: 1;
  transform: translateX(0);
}

.elegant-submit:hover .button-border {
  opacity: 1;
  animation: borderRotate 6s linear infinite;
}

.elegant-submit:hover .button-shadow {
  opacity: 1;
  transform: translateY(2px) translateZ(-1px);
}

/* Active/Clicked state */
.elegant-submit:active .button-content {
  transform: translateY(1px) translateZ(0) scale(0.98);
  background-color: #f8f9fb;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.04),
    inset 0 1px 2px rgba(0, 0, 0, 0.03);
  transition-duration: 0.1s;
}

.elegant-submit:active .button-shadow {
  opacity: 0.5;
  transform: translateY(0) translateZ(-1px);
  transition-duration: 0.1s;
}

/* Success state (applied with JavaScript) */
.elegant-submit.success .button-content {
  background-color: #10B981;
  color: white;
  box-shadow: 
    0 2px 10px rgba(16, 185, 129, 0.3),
    0 1px 3px rgba(16, 185, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  animation: buttonSuccess 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, successPulse 1s ease-in-out;
}

.elegant-submit.success::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin: -25px 0 0 -25px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.1);
  z-index: 0;
  animation: shadowPulse 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.elegant-submit.success .button-text {
  opacity: 0;
  transform: translateY(10px);
}

.elegant-submit.success .button-icon {
  position: static;
  opacity: 1;
  transform: translateX(0);
  animation: checkmark 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.elegant-submit.success .button-icon svg {
  stroke: white;
  stroke-width: 2.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.elegant-submit.success .button-border {
  opacity: 0;
  animation: none;
}

.elegant-submit.success .button-shadow {
  opacity: 0.8;
  transform: translateY(2px) translateZ(-1px) scale(1.05);
  box-shadow: 0 6px
