import {type WorkExperience} from '../../data/types.js';
import List, {type List as ListType} from './List.js';

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
