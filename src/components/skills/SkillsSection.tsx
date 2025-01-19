import {View} from '@react-pdf/renderer';
import {style} from '../../utils/style.js';
import Text from '../Text.js';

export type SkillList = {
  readonly header: string;
  readonly skills: string[];
};

export default function SkillSection({skills, header}: SkillList) {
  return (
    <View style={style('text-xl w-full leading-tight')}>
      <Text style={style('font-black')}>{header.toLocaleUpperCase()}</Text>
      {skills.map((skill) => (
        <Text key={skill}>{skill}</Text>
      ))}
    </View>
  );
}
