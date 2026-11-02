import {type CareerId} from './career.js';

export type CareerEntry = {
  readonly role: string;
  readonly organization: string;
  readonly location: string;
  readonly dateRange: string;
  readonly contributions: Readonly<Record<string, string>>;
};

export type WorkExperience = Omit<CareerEntry, 'contributions'> & {
  readonly id: CareerId;
  readonly experiences: readonly string[];
};

export type CvProfile = {
  readonly reference?: string;
  readonly title: string;
  readonly summary: string;
  readonly skills: Array<[string, string]>;
  readonly pages: [CareerId[], CareerId[]];
  readonly compactEarlier?: boolean;
  readonly supportingPage?: 'first' | 'second';
  readonly speaking?: Array<{header?: string; text: string}>;
  readonly recognition?: string;
};
