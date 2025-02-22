import {View} from '@react-pdf/renderer';
import SectionHeader from '../SectionHeader.js';
import {style} from '../../utils/style.js';
import {workExperience} from '../../data/work-experience.js';
import WorkExperience from '../list/WorkExperience.js';
import LinkedIn from '../LinkedIn.js';
import {type Version} from '../../version.js';

export default function Experience({
  start,
  end,
  qrCodeSize,
  version,
}: {
  readonly start?: number;
  readonly end?: number;
  readonly qrCodeSize?: number;
  readonly version: Version;
}) {
  const isHeaderVisible = start === undefined || start === 0;

  return (
    <View style={style('gap-2 w-full')}>
      {isHeaderVisible ? (
        <>
          <SectionHeader>Career Summary</SectionHeader>
          <View style={style('flex-row-reverse items-start')}>
            <LinkedIn qrCodeSize={qrCodeSize} />
            <View style={style('gap-2 flex-auto w-full')}>
              {workExperience[version].slice(start, end).map((experience) => (
                <WorkExperience
                  key={`${experience.organization}${experience.dateRange}`}
                  experience={experience}
                />
              ))}
            </View>
          </View>
        </>
      ) : (
        workExperience[version]
          .slice(start, end)
          .map((experience) => (
            <WorkExperience
              key={`${experience.organization}${experience.dateRange}`}
              experience={experience}
            />
          ))
      )}
    </View>
  );
}
