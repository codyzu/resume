import {type ListItem} from '../components/list/ListItem.js';
import {type PublicVersion} from '../version.js';

const baseAwards: ListItem[] = [
  {
    text: 'Contributed fixes and conference presentations to FINOS *a11y-theme-builder*.',
  },
  {text: '*OpenJS* Foundation Cross Project Council service (past).'},
  {text: '*FINOS* Foundation Ambassador.'},
  {
    text: '*FINOS* Global Accessibility Awareness Day Hackathon (3rd place winner).',
  },
  {text: 'Member, *Tau Alpha Pi National Honor Society*.'},
];

export const awards: Record<PublicVersion, ListItem[]> = {
  dev: baseAwards,
  devrel: baseAwards,
  hw: [
    {
      text: 'Contributor to FINOS *a11y-theme-builder*.',
    },
    ...baseAwards.slice(1),
  ],
};

// Historical distinctions retained in the refreshed public variants.
export const selectedRecognition =
  'FINOS ambassador service; third place in the FINOS Global Accessibility Awareness Day Hackathon; Tau Alpha Pi National Honor Society.';
