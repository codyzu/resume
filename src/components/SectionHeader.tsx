import {Text} from '@react-pdf/renderer';
import {type PropsWithChildren} from 'react';
import {style} from '../utils/style.js';

export default function SectionHeader({children}: PropsWithChildren) {
  return (
    <Text style={style('text-2xl font-mono font-bold mt-2')}>
      &#123;{children}&#125;
    </Text>
  );
}
