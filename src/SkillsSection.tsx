import {Text, View} from '@react-pdf/renderer';
import {style} from './style.js';

export type SkillList = {
  readonly header: string;
  readonly skills: string[];
};

export default function SkillSection({skills, header}: SkillList) {
  return (
    <View style={style('text-sm w-full leading-tight')}>
      <Text style={style('font-black')}>{header.toLocaleUpperCase()}</Text>
      {skills.map((skill) => (
        <Text key={skill}>{skill}</Text>
      ))}
    </View>
  );
}
