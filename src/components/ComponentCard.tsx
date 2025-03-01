
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ComponentCardProps {
  component: {
    id: number;
    name: string;
    code: string;
  };
  delay?: number;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, delay = 0 }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(component.code);
    toast.success("Code copied to clipboard!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      {/* Component Preview */}
      <div className="relative">
        <div className="absolute top-2 right-2 z-10">
          <Button
            size="sm"
            variant="secondary"
            className="flex items-center gap-1 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm"
            onClick={handleCopyCode}
          >
            <Copy className="w-4 h-4" />
            <span className="text-xs">Copy</span>
          </Button>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-[200px] flex items-center justify-center">
          {/* This will be replaced with the actual interactive component */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm">[Interactive {component.name} Preview]</p>
          </div>
        </div>
      </div>
      
      {/* Component Information */}
      <div className="p-4">
        <h3 className="font-medium text-base">{component.name}</h3>
      </div>
    </motion.div>
  );
};

export default ComponentCard;
