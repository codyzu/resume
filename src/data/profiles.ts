import {type Version} from '../version.js';
import {type CvProfile} from './types.js';
import {cernProfiles} from './cern.js';
import {summary} from './summary.js';
import {skills} from './skills.js';
import {keyWords} from './key-words.js';
import {conferences} from './conferences.js';
import {selectedRecognition} from './awards.js';

function sidebarSkills(
  version: 'dev' | 'devrel' | 'hw',
): Array<[string, string]> {
  return skills[version].map(({category, items}) => [
    category,
    items.join(' '),
  ]);
}

export const profiles: Record<Version, CvProfile> = {
  ...cernProfiles,
  dev: {
    title: keyWords.dev.join(' | '),
    summary: summary.dev,
    skills: sidebarSkills('dev'),
    pages: [
      ['xen', 'nearform', 'hubware'],
      ['axway', 'beautec', 'hamilton', 'igt'],
    ],
    recognition: selectedRecognition,
  },
  devrel: {
    title: keyWords.devrel.join(' | '),
    summary: summary.devrel,
    skills: sidebarSkills('devrel'),
    pages: [
      ['xen', 'nearform'],
      ['hubware', 'axway', 'beautec', 'hamilton', 'igt'],
    ],
    compactEarlier: true,
    supportingPage: 'first',
    speaking: conferences.devrel.flatMap(({items}) => items),
    recognition: selectedRecognition,
  },
  hw: {
    title: keyWords.hw.join(' | '),
    summary: summary.hw,
    skills: sidebarSkills('hw'),
    pages: [
      ['xen', 'nearform'],
      ['hubware', 'axway', 'beautec', 'hamilton', 'igt'],
    ],
    compactEarlier: true,
    supportingPage: 'first',
    speaking: conferences.hw.flatMap(({items}) => items),
    recognition: selectedRecognition,
  },
};
