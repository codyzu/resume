import {View} from '@react-pdf/renderer';
import {style} from '../../utils/style.js';
import {education} from '../../data/ecucation.js';
import SectionHeader from '../SectionHeader.js';
import Text from '../Text.js';

export default function Education() {
  return (
    <View style={style('gap-2 w-full')}>
      <SectionHeader>Education</SectionHeader>
      <View style={style('gap-0 text-base font-bold')}>
        {education.split('\n').map((line) => (
          <Text key={line}>{line}</Text>
        ))}
      </View>
    </View>
  );
}
