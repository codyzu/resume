import React from 'react';
import {Svg, Path, G, Line} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';

export default function House({style}: {readonly style: Style}) {
  return (
    <Svg viewBox="0 0 24 24" style={style}>
      <G
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <Path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </G>
    </Svg>
  );
}
