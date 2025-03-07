import { 
  Image as GalleryIcon,
  BarChart3,
  FileText,
  DollarSign,
  Square,
  Layers
} from "lucide-react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const CategoryGrid = () => {
  const categories = [
    { id: "galleries", name: "Galleries", icon: GalleryIcon, href: "/components/galleries" },
    { id: "charts", name: "Charts", icon: BarChart3, href: "/components/charts" },
    { id: "forms", name: "Forms", icon: FileText, href: "/components/forms" },
    { id: "pricing", name: "Pricing Tables", icon: DollarSign, href: "/components/pricing" },
    { id: "buttons", name: "Buttons", icon: Square, href: "/components/buttons" },
    { id: "modals", name: "Modals", icon: Layers, href: "/components/modals" },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
    >
      {categories.map((category, index) => (
        <CategoryCard
          key={category.id}
          icon={category.icon}
          name={category.name}
          href={category.href}
          delay={index}
        />
      ))}
    </motion.div>
  );
};

export default CategoryGrid;
