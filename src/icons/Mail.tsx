import React from 'react';
import {Svg, Path, G, Line, Rect} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';

export default function Mail({style}: {readonly style: Style}) {
  return (
    <Svg viewBox="0 0 24 24" style={style}>
      <G
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Rect width="20" height="16" x="2" y="4" rx="2" />
        <Path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </G>
    </Svg>
  );
}
