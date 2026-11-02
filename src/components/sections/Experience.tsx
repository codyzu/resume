import {View} from '@react-pdf/renderer';
import {type CareerId} from '../../data/career.js';
import SectionHeader from '../SectionHeader.js';
import {style} from '../../utils/style.js';
import {workExperience} from '../../data/work-experience.js';
import WorkExperience from '../list/WorkExperience.js';
import LinkedIn from '../LinkedIn.js';
import {type Version} from '../../version.js';

export default function Experience({
  ids,
  isHeaderVisible = false,
  qrCodeSize,
  version,
}: {
  readonly ids: readonly CareerId[];
  readonly isHeaderVisible?: boolean;
  readonly qrCodeSize?: number;
  readonly version: Version;
}) {
  const entries = ids.map((id) => {
    const entry = workExperience[version].find((job) => job.id === id);
    if (!entry) {
      throw new Error(`Missing career entry ${version}/${id}`);
    }

    return entry;
  });

  return (
    <View style={style('gap-2 w-full')}>
      {isHeaderVisible ? (
        <>
          <SectionHeader>Career Summary</SectionHeader>
          <View style={style('flex-row-reverse items-start')}>
            <LinkedIn qrCodeSize={qrCodeSize} />
            <View style={style('gap-2 flex-auto w-full')}>
              {entries.map((experience) => (
                <WorkExperience
                  key={`${experience.organization}${experience.dateRange}`}
                  experience={experience}
                />
              ))}
            </View>
          </View>
        </>
      ) : (
        entries.map((experience) => (
          <WorkExperience
            key={`${experience.organization}${experience.dateRange}`}
            experience={experience}
          />
        ))
      )}
    </View>
  );
}
