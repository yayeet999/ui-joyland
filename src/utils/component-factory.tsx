import React from 'react';
import ButtonCard from '@/components/cards/ButtonCard';
import FormCard from '@/components/cards/FormCard';
import GenericComponentCard from '@/components/cards/GenericComponentCard';

interface ComponentFactoryProps {
  category: string;
  component: any;
  delay: number;
}

export const ComponentCardFactory: React.FC<ComponentFactoryProps> = ({ category, component, delay }) => {
  // Return specific card component based on category
  switch (category) {
    case 'buttons':
      return <ButtonCard component={component} delay={delay} category={category} />;
    case 'forms':
      return <FormCard component={component} delay={delay} category={category} />;
    default:
      return <GenericComponentCard component={component} delay={delay} category={category} />;
  }
};
