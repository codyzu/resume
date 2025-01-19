import path from 'node:path';
import {Image, Link, View} from '@react-pdf/renderer';
import {style} from '../utils/style.js';
import {packageDirectory} from '../utils/package-dir.js';
import Text from './Text.js';

export default function LinkedIn() {
  return (
    <View style={style('w-[116px] items-center justify-center -mr-4')}>
      <Text style={style('text-base italic')}>
        Details on{' '}
        <Link style={style('no-underline text-black')} src="http://linked.com">
          LinkedIn
        </Link>
      </Text>
      <Image
        style={style('w-[70px] h-[70px]')}
        src={`${path.join(packageDirectory, 'images', 'linked-in.png')}`}
      />
    </View>
  );
}
