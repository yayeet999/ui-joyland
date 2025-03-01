// Category names mapping
export const categoryNames: { [key: string]: string } = {
  galleries: "Galleries",
  charts: "Charts",
  forms: "Forms",
  pricing: "Pricing Tables",
  buttons: "Buttons",
  modals: "Modals",
};

// Helper function to get a user-friendly category name
export const getCategoryName = (category: string): string => {
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
