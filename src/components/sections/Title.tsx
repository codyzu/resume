import path from 'node:path';
import {Image, Link, View} from '@react-pdf/renderer';
import {style} from '../../utils/style.js';
import Text from '../Text.js';
import {packageDirectory} from '../../utils/package-dir.js';
import {keyWords} from '../../data/key-words.js';
import {type Version} from '../../version.js';

export default function Title({version}: {readonly version: Version}) {
  return (
    <View
      style={style('mt-12 bg-sky-800 pt-4 px-4 pb-2 text-white w-full gap-2')}
    >
      <View style={style('flex-row w-full items-start')}>
        <View style={style('grow')}>
          <Text style={style('text-3xl font-fira font-bold leading-normal')}>
            Cody Zuschlag
          </Text>
          <Link
            style={style(
              'text-xl text-white no-underline font-roboto font-bold',
            )}
          >
            https://devrel.codyfactory.eu
          </Link>
        </View>
        <Image
          src={path.join(packageDirectory, 'images', 'devrel-codyfactory.png')}
          style={style('w-[68px] h-[68px] my-1')}
        />
      </View>
      <Text style={style('text-lg font-roboto font-bold')}>
        {keyWords[version].join(' | ')}
      </Text>
    </View>
  );
}

/* <View style={style('mt-12 text-white')}>
  <Rainbow style={style('w-full h-full absolute')} />
  <View style={style('w-full pt-4 px-4 pb-2')}>
    <Text
      style={style('text-3xl font-fira font-bold leading-normal')}
    >
      Cody Zuschlag
    </Text>
    <View style={style('font-roboto font-bold gap-2')}>
      <Link style={style('text-xl text-white no-underline')}>
        https://devrel.codyfactory.eu
      </Link>
      <Text style={style('text-lg')}>
        Developer Relations Leader | Open Source Advocate |
        International Public Speaker
      </Text>
    </View>
  </View>
</View> */
