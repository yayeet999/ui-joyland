import React from "react";
import { cn } from "@/lib/utils";
import CategorySidebarContent from "./CategorySidebarContent";

interface CategorySidebarProps {
  className?: string;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ className }) => {
  return (
    <div className={cn("hidden lg:block h-[calc(100vh-64px)] border-r sticky top-[64px] w-64 shrink-0", className)}>
      <CategorySidebarContent />
    </div>
  );
};

export default CategorySidebar; 