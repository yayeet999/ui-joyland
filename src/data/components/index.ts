
import { accordions } from './accordions';
import { buttons } from './buttons';
import { charts } from './charts';
import { footers } from './footers';
import { forms } from './forms';
import { galleries } from './galleries';
import { modals } from './modals';
import { navigation } from './navigation';
import { pricing } from './pricing';
import { sliders } from './sliders';

// Combine all component data into a single object for easy access
export const componentData = {
  accordions,
  buttons,
  charts,
  footers,
  forms,
  galleries,
  modals,
  navigation,
  pricing,
  sliders
};

export type ComponentCategory = keyof typeof componentData;
