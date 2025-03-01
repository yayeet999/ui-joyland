
export interface ComponentCategory {
  id: string;
  name: string;
}

export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category?: string;
  preview?: string;
  code: string;
  type?: string;
}

export interface ButtonComponent extends UIComponent {
  type: "social" | "interactive" | "creative";
}
