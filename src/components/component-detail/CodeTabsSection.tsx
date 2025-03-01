
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from './CodeBlock';

interface CodeTabsSectionProps {
  component: {
    html: string;
    css: string;
    code: string;
  };
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const CodeTabsSection: React.FC<CodeTabsSectionProps> = ({ component, activeTab, setActiveTab }) => {
  return (
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
  );
};

export default CodeTabsSection;
