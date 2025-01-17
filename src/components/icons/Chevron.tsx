import {Svg, Path, G} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';

export default function Chevron({style}: {readonly style: Style}) {
  return (
    <Svg viewBox="0 0 24 24" style={style}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="m13 17l5-5l-5-5M6 17l5-5l-5-5" />
      </G>
    </Svg>
  );
}
