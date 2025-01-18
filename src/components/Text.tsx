import {Text as PdfText} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';
import {type PropsWithChildren} from 'react';
import {style} from '../utils/style.js';

export default function Text({
  children,
  style: customStyle,
}: PropsWithChildren<{readonly style?: Style}>) {
  const transformedChildren =
    Array.isArray(children) && typeof children !== 'string'
      ? children.map((child) => {
          if (typeof child === 'string') {
            return replaceAsterisksWithBold(child);
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return child;
        })
      : children;

  return <PdfText style={customStyle}>{transformedChildren}</PdfText>;
}

function replaceAsterisksWithBold(text: string) {
  const segments = text.split(/(\*[^*]+\*)/);
  return segments.map((segment, index) => {
    if (segment.startsWith('*') && segment.endsWith('*')) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Text key={index} style={style('font-black')}>
          {segment.slice(1, -1)}
        </Text>
      );
    }

    return segment;
  });
}
