import {type ListItem} from '../components/list/ListItem.js';
import {type Version} from '../version.js';

const baseAwards: ListItem[] = [
  {
    text: 'Maintainer of FINOS *a11y-theme-builder* project: Led accessibility-focused enhancements, fostering inclusivity and promoting the project within the financial sector.',
  },
  {text: '*OpenJS* Foundation Cross Project Council Member.'},
  {text: '*FINOS* Foundation Ambassador.'},
  {
    text: '*FINOS* Global Accessibility Awareness Day Hackathon (3rd place winner).',
  },
  {text: 'Member, *Tau Alpha Pi National Honor Society*.'},
];

export const awards: Record<Version, ListItem[]> = {
  dev: baseAwards,
  devrel: baseAwards,
  hw: [
    {
      text: 'Maintainer of FINOS *a11y-theme-builder* project.',
    },
    ...baseAwards.slice(1),
  ],
};
