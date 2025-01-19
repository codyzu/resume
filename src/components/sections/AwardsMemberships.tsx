import {View} from '@react-pdf/renderer';
import {awards} from '../../awards.js';
import List from '../list/List.js';
import SectionHeader from '../SectionHeader.js';
import {style} from '../../utils/style.js';

export default function AwardsMemberships() {
  return (
    <View style={style('gap-2 w-full')}>
      <SectionHeader>Awards | Memberships</SectionHeader>
      <View style={style('-ml-1')}>
        <List list={{items: awards}} />
      </View>
    </View>
  );
}
