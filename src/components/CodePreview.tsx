
import { useState, useEffect } from "react";

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  const [rendered, setRendered] = useState<JSX.Element | null>(null);

  useEffect(() => {
    try {
      // This is a placeholder for actual code rendering
      // In a real implementation, you might use a sandbox solution
      // or a more sophisticated approach to render components from code
      setRendered(
        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Preview of component:</p>
          <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto text-xs">
            {code.substring(0, 100)}...
          </pre>
        </div>
      );
    } catch (error) {
      console.error("Error rendering component:", error);
      setRendered(
        <div className="text-red-500">Error rendering component</div>
      );
    }
  }, [code]);

  return (
    <div className="component-preview">
      {rendered || <div className="text-gray-400">Loading preview...</div>}
    </div>
  );
};

export default CodePreview;
