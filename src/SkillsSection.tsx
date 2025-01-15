import {Text, View} from '@react-pdf/renderer';
import {style} from './style.js';

export default function SkillSection({
  skills,
  header,
}: {
  readonly skills: string[];
  readonly header: string;
}) {
  return (
    <View>
      <Text style={style('font-black text-base leading-tight')}>{header}</Text>
      {skills.map((skill) => (
        <Text key={skill} style={style('text-base leading-tight')}>
          {skill}
        </Text>
      ))}
    </View>
  );
}
