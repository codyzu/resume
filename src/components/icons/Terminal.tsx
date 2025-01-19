import {Svg, Path, G} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';

export default function Terminal({
  style,
  color,
}: {
  readonly style: Style;
  readonly color?: string;
}) {
  return (
    <Svg viewBox="0 0 24 24" style={style}>
      <G
        fill="none"
        stroke={color ?? 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="m4 17l6-6l-6-6m8 14h8" />
      </G>
    </Svg>
  );
}
