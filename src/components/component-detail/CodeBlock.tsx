
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { copyToClipboard } from '@/utils/clipboard';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const handleCopyCode = () => {
    copyToClipboard(code, language);
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

export default CodeBlock;
