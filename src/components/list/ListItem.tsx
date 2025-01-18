import {View} from '@react-pdf/renderer';
import {style} from '../../utils/style.js';
import Chevron from '../icons/Chevron.js';
import Text from '../Text.js';

export type ListItem = {
  readonly header?: string;
  readonly text: string;
};

export default function ListItemWithHeader({item}: {readonly item: ListItem}) {
  return (
    <View style={style('gap-1 flex-row items-start w-full')}>
      <Chevron style={style('w-2 h-2 mt-[2px]')} />
      <Text style={style('text-2xs leading-tight w-full')}>
        {item.header ? (
          <Text style={style('font-black')}>{item.header} | </Text>
        ) : null}
        {item.text}
      </Text>
    </View>
  );
}
