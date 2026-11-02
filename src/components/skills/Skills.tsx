import {View} from '@react-pdf/renderer';
import {skills} from '../../data/skills.js';
import {style} from '../../utils/style.js';
import SectionHeader from '../SectionHeader.js';
import {type PublicVersion} from '../../version.js';
import SkillSection from './SkillsSection.js';

export default function Skills({version}: {readonly version: PublicVersion}) {
  return (
    <View style={style('gap-4')}>
      <SectionHeader color="white">Skills</SectionHeader>
      {skills[version].map((skillSection) => (
        <SkillSection
          key={skillSection.category}
          header={skillSection.category}
          skills={skillSection.items}
        />
      ))}
    </View>
  );
}
