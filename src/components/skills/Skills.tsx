import {View} from '@react-pdf/renderer';
import {skills} from '../../data/skills.js';
import {style} from '../../utils/style.js';
import SectionHeader from '../SectionHeader.js';
import SkillSection from './SkillsSection.js';

export default function Skills() {
  return (
    <View style={style('gap-4')}>
      <SectionHeader color="white">Skills</SectionHeader>
      {skills.map((skillSection) => (
        <SkillSection
          key={skillSection.category}
          header={skillSection.category}
          skills={skillSection.items}
        />
      ))}
    </View>
  );
}
