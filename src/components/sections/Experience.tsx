import {View} from '@react-pdf/renderer';
import SectionHeader from '../SectionHeader.js';
import {style} from '../../utils/style.js';
import {workExperience} from '../../data/work-experience.js';
import WorkExperience from '../list/WorkExperience.js';
import LinkedIn from '../LinkedIn.js';

export default function Experience({
  start,
  end,
}: {
  readonly start?: number;
  readonly end?: number;
}) {
  const isFirstExperienceVisible = start === undefined || start === 0;
  const startIndex = isFirstExperienceVisible ? 1 : start;
  return (
    <View style={style('gap-2 w-full')}>
      {isFirstExperienceVisible && (
        <>
          <SectionHeader>Career Summary</SectionHeader>
          <View style={style('flex-row-reverse items-start')}>
            <LinkedIn />
            <WorkExperience experience={workExperience[0]} />
          </View>
        </>
      )}
      {workExperience.slice(startIndex, end).map((experience) => (
        <WorkExperience
          key={`${experience.organization}${experience.dateRange}`}
          experience={experience}
        />
      ))}
    </View>
  );
}
