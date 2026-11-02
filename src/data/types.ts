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
