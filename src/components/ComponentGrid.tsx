
import { useState } from "react";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CodePreview from "@/components/CodePreview";
import { UIComponent } from "@/types/components";

interface ComponentGridProps {
  components: UIComponent[];
  onCopyCode: (code: string) => void;
}

const ComponentGrid: React.FC<ComponentGridProps> = ({ components, onCopyCode }) => {
  const [expandedComponent, setExpandedComponent] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedComponent(expandedComponent === id ? null : id);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // Filter out the Submit Button component
  const filteredComponents = components.filter(component => component.name !== "Submit Button");

  if (filteredComponents.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium mb-2">No components found</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {filteredComponents.map((component) => (
        <motion.div
          key={component.id}
          className={`rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-800 
                    transition-all duration-300 hover:shadow-md ${
                      expandedComponent === component.id ? "md:col-span-2 lg:col-span-3" : ""
                    }`}
          variants={item}
          layoutId={`component-${component.id}`}
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div>
              <h3 className="font-medium">{component.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {component.description}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onCopyCode(component.code)}
                className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Copy size={18} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleExpand(component.id)}
                className="text-xs"
              >
                {expandedComponent === component.id ? "Collapse" : "Expand"}
              </Button>
            </div>
          </div>

          <div className="p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 min-h-[200px]">
            <div className="w-full max-w-md">
              <CodePreview code={component.code} />
            </div>
          </div>

          {expandedComponent === component.id && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium mb-2">Code</h4>
              <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{component.code}</code>
              </pre>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ComponentGrid;
