import { buttons } from './buttons';
import { charts } from './charts';
import { forms } from './forms';
import { galleries } from './galleries';
import { modals } from './modals';
import { pricing } from './pricing';

// Combine all component data into a single object for easy access
export const componentData = {
  buttons,
  charts,
  forms,
  galleries,
  modals,
  pricing
};

export type ComponentCategory = keyof typeof componentData;
