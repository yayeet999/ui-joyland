
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Copy, ArrowRight, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import CategorySidebar from "@/components/CategorySidebar";

// Mock component data (imported from CategoryPage to ensure consistency)
// In a real application, this would be fetched from an API or a shared data source
const mockComponents = {
  sliders: [
    { 
      id: 1, 
      name: "Responsive Carousel Slider", 
      code: "<div>Carousel Slider Code Here</div>",
      html: "<div class=\"carousel\"><!-- HTML structure --></div>",
      css: ".carousel {\n  /* CSS styles */\n}"
    },
    { 
      id: 2, 
      name: "Range Slider with Labels", 
      code: "<div>Range Slider Code Here</div>",
      html: "<div class=\"range-slider\"><!-- HTML structure --></div>",
      css: ".range-slider {\n  /* CSS styles */\n}"
    },
    { 
      id: 3, 
      name: "Image Comparison Slider", 
      code: "<div>Image Comparison Code Here</div>",
      html: "<div class=\"comparison-slider\"><!-- HTML structure --></div>",
      css: ".comparison-slider {\n  /* CSS styles */\n}"
    },
    { 
      id: 4, 
      name: "Multi-handle Slider", 
      code: "<div>Multi-handle Slider Code Here</div>",
      html: "<div class=\"multi-handle\"><!-- HTML structure --></div>",
      css: ".multi-handle {\n  /* CSS styles */\n}"
    },
  ],
  forms: [
    { 
      id: 1, 
      name: "Contact Form with Validation", 
      code: "<div>Contact Form Code Here</div>",
      html: "<form class=\"contact-form\"><!-- HTML structure --></form>",
      css: ".contact-form {\n  /* CSS styles */\n}"
    },
    { 
      id: 2, 
      name: "Multi-step Form", 
      code: "<div>Multi-step Form Code Here</div>",
      html: "<form class=\"multi-step\"><!-- HTML structure --></form>",
      css: ".multi-step {\n  /* CSS styles */\n}"
    },
    { 
      id: 3, 
      name: "Subscription Form", 
      code: "<div>Subscription Form Code Here</div>",
      html: "<form class=\"subscription\"><!-- HTML structure --></form>",
      css: ".subscription {\n  /* CSS styles */\n}"
    },
    { 
      id: 4, 
      name: "Inline Editing Form", 
      code: "<div>Inline Editing Form Code Here</div>",
      html: "<form class=\"inline-edit\"><!-- HTML structure --></form>",
      css: ".inline-edit {\n  /* CSS styles */\n}"
    },
  ],
  // Including the same pattern for other categories
  pricing: [
    { 
      id: 1, 
      name: "Tiered Pricing Table", 
      code: "<div>Tiered Pricing Table Code Here</div>",
      html: "<div class=\"pricing-table\"><!-- HTML structure --></div>",
      css: ".pricing-table {\n  /* CSS styles */\n}"
    },
    { 
      id: 2, 
      name: "Comparison Pricing Grid", 
      code: "<div>Comparison Pricing Grid Code Here</div>",
      html: "<div class=\"pricing-grid\"><!-- HTML structure --></div>",
      css: ".pricing-grid {\n  /* CSS styles */\n}"
    },
    { 
      id: 3, 
      name: "Toggle Monthly/Annual Pricing", 
      code: "<div>Toggle Pricing Code Here</div>",
      html: "<div class=\"toggle-pricing\"><!-- HTML structure --></div>",
      css: ".toggle-pricing {\n  /* CSS styles */\n}"
    },
    { 
      id: 4, 
      name: "Feature-focused Pricing Table", 
      code: "<div>Feature Pricing Code Here</div>",
      html: "<div class=\"feature-pricing\"><!-- HTML structure --></div>",
      css: ".feature-pricing {\n  /* CSS styles */\n}"
    },
  ],
  // Abbreviated for brevity - you would continue for all categories
  accordions: [
    { 
      id: 1, 
      name: "Simple Accordion", 
      code: "<div>Simple Accordion Code Here</div>",
      html: "<div class=\"accordion\"><!-- HTML structure --></div>",
      css: ".accordion {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  charts: [
    { 
      id: 1, 
      name: "Bar Chart", 
      code: "<div>Bar Chart Code Here</div>",
      html: "<div class=\"bar-chart\"><!-- HTML structure --></div>",
      css: ".bar-chart {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  galleries: [
    { 
      id: 1, 
      name: "Masonry Gallery", 
      code: "<div>Masonry Gallery Code Here</div>",
      html: "<div class=\"masonry\"><!-- HTML structure --></div>",
      css: ".masonry {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  buttons: [
    { 
      id: 1, 
      name: "Facebook Auth Button", 
      code: "<button class=\"facebook-auth-btn\">\n  <div class=\"facebook-icon-wrapper\">\n    <svg class=\"facebook-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Facebook</span>\n</button>",
      html: "<button class=\"facebook-auth-btn\">\n  <div class=\"facebook-icon-wrapper\">\n    <svg class=\"facebook-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Facebook</span>\n</button>",
      css: ".facebook-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #1877F2;\n  border-radius: 4px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.facebook-auth-btn:active {\n  background-color: #0b5fcc;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.facebook-auth-btn:hover {\n  background-color: #166fe5;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.facebook-icon-wrapper {\n  position: absolute;\n  left: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.facebook-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.button-text {\n  margin-left: 30px;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}"
    },
    { 
      id: 2, 
      name: "X Auth Button", 
      code: "<button class=\"x-auth-btn\">\n  <div class=\"x-icon-wrapper\">\n    <svg class=\"x-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with X</span>\n</button>",
      html: "<button class=\"x-auth-btn\">\n  <div class=\"x-icon-wrapper\">\n    <svg class=\"x-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with X</span>\n</button>",
      css: ".x-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #000000;\n  border-radius: 4px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.x-auth-btn:active {\n  background-color: #333333;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.x-auth-btn:hover {\n  background-color: #222222;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.x-icon-wrapper {\n  position: absolute;\n  left: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.x-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.button-text {\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}"
    },
    { 
      id: 3, 
      name: "Github Auth Button", 
      code: "<button class=\"github-auth-btn\">\n  <div class=\"github-icon-wrapper\">\n    <svg class=\"github-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with GitHub</span>\n</button>",
      html: "<button class=\"github-auth-btn\">\n  <div class=\"github-icon-wrapper\">\n    <svg class=\"github-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with GitHub</span>\n</button>",
      css: ".github-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #24292e;\n  border-radius: 6px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.github-auth-btn:active {\n  background-color: #1a1e22;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.github-auth-btn:hover {\n  background-color: #2b3137;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.github-icon-wrapper {\n  position: absolute;\n  left: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.github-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.button-text {\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}"
    },
    { 
      id: 4, 
      name: "Google Auth Button", 
      code: "<button class=\"google-auth-btn\">\n  <div class=\"google-icon-wrapper\">\n    <svg class=\"google-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\n      <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"/>\n      <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"/>\n      <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"/>\n      <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Google</span>\n</button>",
      html: "<button class=\"google-auth-btn\">\n  <div class=\"google-icon-wrapper\">\n    <svg class=\"google-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\n      <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"/>\n      <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"/>\n      <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"/>\n      <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Google</span>\n</button>",
      css: ".google-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #4285f4;\n  border-radius: 2px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.google-auth-btn:active {\n  background-color: #3367d6;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.google-auth-btn:hover {\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.google-icon-wrapper {\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.google-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.button-text {\n  margin-left: 30px;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: 'Roboto', sans-serif;\n  letter-spacing: 0.2px;\n}"
    },
    { 
      id: 5, 
      name: "Apple Auth Button", 
      code: "<button class=\"apple-auth-btn\">\n  <div class=\"apple-icon-wrapper\">\n    <svg class=\"apple-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\">\n      <path fill=\"#ffffff\" d=\"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Apple</span>\n</button>",
      html: "<button class=\"apple-auth-btn\">\n  <div class=\"apple-icon-wrapper\">\n    <svg class=\"apple-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\">\n      <path fill=\"#ffffff\" d=\"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Apple</span>\n</button>",
      css: ".apple-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #000000;\n  border-radius: 6px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.apple-auth-btn:active {\n  background-color: #1a1a1a;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.apple-auth-btn:hover {\n  background-color: #333333;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.apple-icon-wrapper {\n  position: absolute;\n  left: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.apple-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.button-text {\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}"
    },
    // Additional components...
  ],
  modals: [
    { 
      id: 1, 
      name: "Basic Modal", 
      code: "<div>Basic Modal Code Here</div>",
      html: "<div class=\"modal\"><!-- HTML structure --></div>",
      css: ".modal {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  navigation: [
    { 
      id: 1, 
      name: "Responsive Navbar", 
      code: "<div>Responsive Navbar Code Here</div>",
      html: "<nav class=\"navbar\"><!-- HTML structure --></nav>",
      css: ".navbar {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
  footers: [
    { 
      id: 1, 
      name: "Simple Footer", 
      code: "<div>Simple Footer Code Here</div>",
      html: "<footer class=\"footer\"><!-- HTML structure --></footer>",
      css: ".footer {\n  /* CSS styles */\n}"
    },
    // Additional components...
  ],
};

// Helper function to get a user-friendly category name
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

// CodeBlock component for rendering code with syntax highlighting
const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => {
  const handleCopyCode = () => {
    try {
      // Use the clipboard API with fallback
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code)
          .then(() => {
            toast.success(`${language} code copied to clipboard!`);
          })
          .catch((error) => {
            console.error('Failed to copy: ', error);
            fallbackCopyTextToClipboard(code);
          });
      } else {
        fallbackCopyTextToClipboard(code);
      }
    } catch (error) {
      console.error('Copy failed:', error);
      toast.error('Failed to copy code. Please try again.');
    }
  };

  // Fallback method for older browsers
  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        toast.success(`${language} code copied to clipboard!`);
      } else {
        toast.error('Failed to copy code. Please try again.');
      }
    } catch (err) {
      toast.error('Failed to copy code. Please try again.');
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="relative rounded-md bg-gray-900 text-gray-100 overflow-hidden h-[400px]">
      <div className="absolute top-2 right-2">
        <Button 
          size="sm" 
          variant="ghost" 
          className="text-gray-400 hover:text-white"
          onClick={handleCopyCode}
        >
          <Copy className="w-4 h-4" />
          <span className="ml-1 text-xs">Copy</span>
        </Button>
      </div>
      <pre className="p-4 pt-10 overflow-auto h-full">
        <code className={`language-${language.toLowerCase()}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

const ComponentDetail: React.FC = () => {
  const { category, componentId } = useParams<{ category: string; componentId: string }>();
  const [activeTab, setActiveTab] = useState<string>("html");
  
  // Find the component
  const categoryKey = category || '';
  const components = mockComponents[categoryKey as keyof typeof mockComponents] || [];
  const component = components.find(c => c.id.toString() === componentId);
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
          <Button asChild>
            <Link to={`/components/${category}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {categoryName}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <style>
        {`
         .google-auth-btn-preview {
           width: 240px;
           height: 42px;
           background-color: #4285f4;
           border-radius: 2px;
           box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
           cursor: pointer;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: all 0.2s ease;
           border: none;
           position: relative;
         }
 
         .google-auth-btn-preview:active {
           background-color: #3367d6;
           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
           transform: translateY(1px);
         }
 
         .google-auth-btn-preview:hover {
           box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
         }
 
         .google-icon-wrapper-preview {
           position: absolute;
           left: 1px;
           top: 1px;
           width: 40px;
           height: 40px;
           border-radius: 2px;
           background-color: white;
           display: flex;
           justify-content: center;
           align-items: center;
         }
 
         .google-icon-preview {
           width: 18px;
           height: 18px;
         }

         .button-text-preview {
           margin-left: 30px;
           color: white;
           font-size: 14px;
           font-weight: 500;
           font-family: 'Roboto', sans-serif;
           letter-spacing: 0.2px;
         }

         .github-auth-btn-preview {
           width: 240px;
           height: 42px;
           background-color: #24292e;
           border-radius: 6px;
           box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
           cursor: pointer;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: all 0.2s ease;
           border: none;
           position: relative;
         }
 
         .github-auth-btn-preview:active {
           background-color: #1a1e22;
           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
           transform: translateY(1px);
         }
 
         .github-auth-btn-preview:hover {
           background-color: #2b3137;
           box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
         }
 
         .github-icon-wrapper-preview {
           position: absolute;
           left: 16px;
           display: flex;
           justify-content: center;
           align-items: center;
         }
 
         .github-icon-preview {
           width: 20px;
           height: 20px;
         }

         .x-auth-btn-preview {
           width: 240px;
           height: 42px;
           background-color: #000000;
           border-radius: 4px;
           box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
           cursor: pointer;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: all 0.2s ease;
           border: none;
           position: relative;
         }
 
         .x-auth-btn-preview:active {
           background-color: #333333;
           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
           transform: translateY(1px);
         }
 
         .x-auth-btn-preview:hover {
           background-color: #222222;
           box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
         }
 
         .x-icon-wrapper-preview {
           position: absolute;
           left: 16px;
           display: flex;
           justify-content: center;
           align-items: center;
         }
 
         .x-icon-preview {
           width: 18px;
           height: 18px;
         }

         .facebook-auth-btn-preview {
           width: 240px;
           height: 42px;
           background-color: #1877F2;
           border-radius: 4px;
           box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
           cursor: pointer;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: all 0.2s ease;
           border: none;
           position: relative;
         }
 
         .facebook-auth-btn-preview:active {
           background-color: #0b5fcc;
           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
           transform: translateY(1px);
         }
 
         .facebook-auth-btn-preview:hover {
           background-color: #166fe5;
           box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
         }
 
         .facebook-icon-wrapper-preview {
           position: absolute;
           left: 16px;
           display: flex;
           justify-content: center;
           align-items: center;
         }
 
         .facebook-icon-preview {
           width: 20px;
           height: 20px;
         }

         .apple-auth-btn-preview {
           width: 240px;
           height: 42px;
           background-color: #000000;
           border-radius: 6px;
           box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
           cursor: pointer;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: all 0.2s ease;
           border: none;
           position: relative;
         }

         .apple-auth-btn-preview:active {
           background-color: #1a1a1a;
           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
           transform: translateY(1px);
         }

         .apple-auth-btn-preview:hover {
           background-color: #333333;
           box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
         }

         .apple-icon-wrapper-preview {
           position: absolute;
           left: 16px;
           display: flex;
           justify-content: center;
           align-items: center;
         }

         .apple-icon-preview {
           width: 18px;
           height: 18px;
         }
        `}
      </style>
      <div className="flex">
        {/* Category Sidebar */}
        <CategorySidebar />
        
        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb & Back Button */}
            <div className="flex items-center mb-8">
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  variant="outline" 
                  size="default" 
                  asChild 
                  className="flex items-center bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 shadow-sm transition-all hover:shadow-md dark:bg-blue-900/20 dark:hover:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 rounded-lg px-4 py-2 group"
                >
                  <Link to={`/components/${category}`} className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm md:text-base font-medium">Back to {categoryName}</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Component Title */}
            <h1 className="text-3xl font-bold mb-8">{component.name}</h1>
            
            {/* Component Preview & Code - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Component Preview - Left Column */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex items-center justify-center shadow-md min-h-[300px]">
                {component.name === "Facebook Auth Button" ? (
                  <button className="facebook-auth-btn-preview">
                    <div className="facebook-icon-wrapper-preview">
                      <svg className="facebook-icon-preview" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="button-text-preview">Sign in with Facebook</span>
                  </button>
                ) : component.name === "X Auth Button" ? (
                  <button className="x-auth-btn-preview">
                    <div className="x-icon-wrapper-preview">
                      <svg className="x-icon-preview" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <span className="button-text-preview">Sign in with X</span>
                  </button>
                ) : component.name === "Github Auth Button" ? (
                  <button className="github-auth-btn-preview">
                    <div className="github-icon-wrapper-preview">
                      <svg className="github-icon-preview" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="button-text-preview">Sign in with GitHub</span>
                  </button>
                ) : component.name === "Google Auth Button" ? (
                  <button className="google-auth-btn-preview">
                    <div className="google-icon-wrapper-preview">
                      <svg className="google-icon-preview" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                    </div>
                    <span className="button-text-preview">Sign in with Google</span>
                  </button>
                ) : component.name === "Apple Auth Button" ? (
                  <button className="apple-auth-btn-preview">
                    <div className="apple-icon-wrapper-preview">
                      <svg className="apple-icon-preview" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                    </div>
                    <span className="button-text-preview">Sign in with Apple</span>
                  </button>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <p className="text-sm">[Interactive {component.name} Preview]</p>
                  </div>
                )}
              </div>
              
              {/* Code Tabs - Right Column */}
              <div>
                <Tabs defaultValue="html" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="html">HTML</TabsTrigger>
                    <TabsTrigger value="css">CSS</TabsTrigger>
                    <TabsTrigger value="full">Full Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="html">
                    <CodeBlock code={component.html} language="HTML" />
                  </TabsContent>
                  <TabsContent value="css">
                    <CodeBlock code={component.css} language="CSS" />
                  </TabsContent>
                  <TabsContent value="full">
                    <CodeBlock code={component.code} language="HTML" />
                  </TabsContent>
                </Tabs>
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
