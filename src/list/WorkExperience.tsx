import List, {type List as ListType} from './List.js';

export type WorkExperience = {
  readonly role: string;
  readonly dateRange: string;
  readonly organization: string;
  readonly location: string;
  readonly experiences: string[];
};

export default function WorkExperienceComponent({
  experience,
}: {
  readonly experience: WorkExperience;
}) {
  const experienceTitle = `${experience.role.toLocaleUpperCase()} | ${experience.organization} (${experience.location}) | ${experience.dateRange}`;
  const experienceList: ListType = {
    header: experienceTitle,
    items: experience.experiences.map((experience) => ({
      text: experience,
    })),
  };

  return <List list={experienceList} />;
}
