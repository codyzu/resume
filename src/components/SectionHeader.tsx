import {type PropsWithChildren} from 'react';
import {View} from '@react-pdf/renderer';
import {style} from '../utils/style.js';
import Text from './Text.js';
import Terminal from './icons/Terminal.js';

export default function SectionHeader({children}: PropsWithChildren) {
  return (
    <View style={style('flex-row items-end w-full p-0 mt-2 gap-2')}>
      <Terminal style={style('w-[20px] h-[20px]')} />
      <Text style={style('text-2xl font-mono font-bold')}>{children}</Text>
    </View>
  );
}
