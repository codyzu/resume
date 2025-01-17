import {Text, View} from '@react-pdf/renderer';
import {style} from '../../utils/style.js';
import ListItem, {type ListItem as ListItemType} from './ListItem.js';

export type List = {
  readonly header?: string;
  readonly items: ListItemType[];
};

export default function ListComponent({list}: {readonly list: List}) {
  return (
    <View style={style('gap-1 flex-auto w-full')}>
      {list.header && (
        <Text style={style('text-2xs font-black leading-none w-full')}>
          {list.header}
        </Text>
      )}
      <View style={style('pl-1 text-2xs flex-auto w-full')}>
        {list.items.map((item) => (
          <ListItem key={item.text} item={item} />
        ))}
      </View>
    </View>
  );
}
