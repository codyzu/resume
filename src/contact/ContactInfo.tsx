import {View} from '@react-pdf/renderer';
import {
  Component,
  type ComponentType,
  JSX,
  type PropsWithChildren,
} from 'react';
import {type Style} from '@react-pdf/types';
import {style} from '../style.js';

export default function ContactInfo({
  Icon,
  children,
}: PropsWithChildren<{readonly Icon: ComponentType<{style: Style}>}>) {
  return (
    <View style={style('flex-row items-start gap-2 overflow-hidden')}>
      <Icon style={style('w-6 h-6 shrink-0')} />
      <View style={style('text-sm shrink')}>{children}</View>
    </View>
  );
}
