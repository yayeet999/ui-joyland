export interface ComponentCategory {
  id: string;
  name: string;
}

export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  preview?: string;
  code: string;
}

export interface ComponentItem {
  id: number;
  name: string;
  description: string;
  category: string;
  type?: string;
  code: string;
}
