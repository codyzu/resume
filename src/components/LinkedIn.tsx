import path from 'node:path';
import {Image, Link, View} from '@react-pdf/renderer';
import {style} from '../utils/style.js';
import {packageDirectory} from '../utils/package-dir.js';
import Text from './Text.js';

export default function LinkedIn({qrCodeSize}: {readonly qrCodeSize?: number}) {
  return (
    <View style={style('w-[116px] items-center justify-center -mr-4')}>
      <Text style={style('text-base italic')}>
        Details on{' '}
        <Link
          style={style('underline text-black')}
          src="https://linkedin.com/in/cody-zuschlag"
        >
          LinkedIn
        </Link>
      </Text>
      <Link src="https://linkedin.com/in/cody-zuschlag">
        <Image
          style={style(`w-[${qrCodeSize ?? 70}px] h-[${qrCodeSize ?? 70}px]`)}
          src={`${path.join(packageDirectory, 'images', 'linked-in.png')}`}
        />
      </Link>
    </View>
  );
}
