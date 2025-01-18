import {type PropsWithChildren} from 'react';
import {Text as PdfText} from '@react-pdf/renderer';
import {type Style} from '@react-pdf/types';
import {style} from '../utils/style.js';

export default function Text({
  children,
  style: componentStyle,
}: PropsWithChildren<{readonly style?: Style}>) {
  const transformedChildren =
    Array.isArray(children) && typeof children !== 'string'
      ? children.map((child) => {
          if (typeof child === 'string') {
            return replaceAsterisksAndUnderscores(child);
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return child;
        })
      : typeof children === 'string'
        ? replaceAsterisksAndUnderscores(children)
        : children;

  return <PdfText style={componentStyle}>{transformedChildren}</PdfText>;
}

function replaceAsterisksAndUnderscores(text: string) {
  const segments = text.split(/(\*[^*]+\*|_[^_]+_)/);
  return segments.map((segment, index) => {
    if (segment.startsWith('*') && segment.endsWith('*')) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <PdfText key={index} style={style('font-black')}>
          {segment.slice(1, -1)}
        </PdfText>
      );
    }

    if (segment.startsWith('_') && segment.endsWith('_')) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <PdfText key={index} style={style('italic')}>
          {segment.slice(1, -1)}
        </PdfText>
      );
    }

    return segment;
  });
}
