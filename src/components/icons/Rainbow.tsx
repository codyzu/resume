import {Svg, LinearGradient, Stop, Defs, Rect} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';

export default function Rainbow({style}: {readonly style: Style}) {
  return (
    <Svg viewBox="0 0 9 9" preserveAspectRatio="none" style={style}>
      <Defs>
        <LinearGradient id="rainbow" x1="-0.1" x2="0.9" y2="-0.05">
          <Stop offset="0" stopColor="#E9301F" />
          {/* <Stop offset="0" stopColor="red"/> */}
          <Stop offset="0.333" stopColor="#FDC606" />
          {/* <Stop offset="0.333" stopColor="#ff0"/> */}
          <Stop offset="0.5" stopColor="#369634" />
          {/* <Stop offset="0.5" stopColor="#0f0"/> */}
          <Stop offset="0.666" stopColor="#1E5399" />
          {/* <Stop offset="0.666" stopColor="cyan"/> */}
          {/* <Stop offset="0.833" stopColor="blue"/> */}
          {/* <Stop offset="0.833" stopColor="blue"/> */}
          <Stop offset="1" stopColor="#81257C" />
        </LinearGradient>
      </Defs>
      <Rect width="9" height="9" fill="url(#rainbow)" />
    </Svg>
  );
}
