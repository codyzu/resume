import {View} from '@react-pdf/renderer';
import {conferences} from '../../data/conferences.js';
import List from '../list/List.js';
import SectionHeader from '../SectionHeader.js';
import {style} from '../../utils/style.js';
import {type Version} from '../../version.js';

export default function Conferences({version}: {readonly version: Version}) {
  return (
    <View style={style('gap-2 w-full')}>
      <SectionHeader>Conferences | Public Speaking</SectionHeader>
      {conferences[version].map((conferenceSection) => (
        <List key={conferenceSection.header} list={conferenceSection} />
      ))}
    </View>
  );
}
