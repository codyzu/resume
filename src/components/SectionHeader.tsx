import {type PropsWithChildren} from 'react';
import {View} from '@react-pdf/renderer';
import {style} from '../utils/style.js';
import Text from './Text.js';
import Terminal from './icons/Terminal.js';

export default function SectionHeader({
  children,
  color,
  fontSize,
}: PropsWithChildren<{
  readonly color?: string;
  readonly fontSize?: number;
}>) {
  return (
    <View
      style={style(
        'flex-row items-end w-full p-0 mt-2 gap-2',
        color && `text-${color}`,
      )}
    >
      <Terminal
        style={{width: (fontSize ?? 18) + 2, height: (fontSize ?? 18) + 2}}
        color={color}
      />
      <Text
        style={{
          ...style('text-2xl font-mono font-bold'),
          ...(fontSize === undefined ? {} : {fontSize}),
        }}
      >
        {children}
      </Text>
    </View>
  );
}
