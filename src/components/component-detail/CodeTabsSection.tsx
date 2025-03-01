
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from './CodeBlock';
import { ComponentItem } from '@/types/components';

interface CodeTabsSectionProps {
  component: ComponentItem;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const CodeTabsSection: React.FC<CodeTabsSectionProps> = ({ component, activeTab, setActiveTab }) => {
  // Extract code content or provide fallbacks
  const htmlCode = component.html || component.code;
  const cssCode = component.css || '';
  const fullCode = component.code || '';
  
  return (
    <Tabs defaultValue="html" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="css">CSS</TabsTrigger>
        <TabsTrigger value="full">Full Code</TabsTrigger>
      </TabsList>
      <TabsContent value="html">
        <CodeBlock code={htmlCode} language="HTML" />
      </TabsContent>
      <TabsContent value="css">
        <CodeBlock code={cssCode} language="CSS" />
      </TabsContent>
      <TabsContent value="full">
        <CodeBlock code={fullCode} language="HTML" />
      </TabsContent>
    </Tabs>
  );
};

export default CodeTabsSection;
