import React from 'react';
import {Svg, Path, G, Rect, Circle} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';

export default function Passport({style}: {readonly style: Style}) {
  return (
    <Svg viewBox="0 0 14 14" style={style}>
      <G
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Rect width="11" height="13" x="1.5" y=".5" rx="1" />
        <Circle cx="7" cy="6" r="3" />
        <Path d="M4 6h6M7 9V3" />
      </G>
    </Svg>
  );
}
