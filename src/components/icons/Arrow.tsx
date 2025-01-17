import {Svg, Path, G, Circle} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';

export default function Arrow({style}: {readonly style: Style}) {
  return (
    <Svg viewBox="0 0 24 24" style={style}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Circle cx="12" cy="12" r="10" />
        <Path d="m10 8l4 4l-4 4" />
      </G>
    </Svg>

    // <Svg viewBox="0 0 24 24" style={style}>
    //   <Path
    //     fill="none"
    //     stroke="currentColor"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth="2"
    //     d="m9 18l6-6l-6-6"
    //   />
    // </Svg>
  );
}
