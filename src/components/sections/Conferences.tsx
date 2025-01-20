import {View} from '@react-pdf/renderer';
import {conferences} from '../../data/conferences.js';
import List from '../list/List.js';
import SectionHeader from '../SectionHeader.js';
import {style} from '../../utils/style.js';

export default function Conferences() {
  return (
    <View style={style('gap-2 w-full')}>
      <SectionHeader>Conferences | Public Speaking</SectionHeader>
      {conferences.map((conferenceSection) => (
        <List key={conferenceSection.header} list={conferenceSection} />
      ))}
    </View>
  );
}
