
import { useState, useEffect } from "react";
import { parse } from "react-html-parser";

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  const [rendered, setRendered] = useState<any>(null);

  useEffect(() => {
    try {
      // Simple extraction of HTML from code
      const htmlContent = extractHtmlFromCode(code);
      setRendered(parse(htmlContent));
    } catch (error) {
      console.error("Error rendering component:", error);
      setRendered(<div className="text-red-500">Error rendering component</div>);
    }
  }, [code]);

  function extractHtmlFromCode(code: string): string {
    // This is a simple extraction - in a real app you'd need more sophisticated parsing
    // Or preferably use a sandbox to actually render the React component
    const match = code.match(/<([^]*?)>/);
    return match ? match[0] : "";
  }

  return (
    <div className="component-preview">
      {rendered || <div className="text-gray-400">Loading preview...</div>}
    </div>
  );
};

export default CodePreview;
