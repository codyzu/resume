import {join} from 'node:path';
import {Image, View} from '@react-pdf/renderer';
import {portraitFilename} from '../../data/presentation.js';
import {packageDirectory} from '../../utils/package-dir.js';
import {style} from '../../utils/style.js';
import Contact from '../contact/Contact.js';
import Skills from '../skills/Skills.js';
import {type PublicVersion} from '../../version.js';

const defaultImagePath = join(packageDirectory, 'images', portraitFilename);

export default function Sidebar({
  imagePath = defaultImagePath,
  version,
}: {
  readonly imagePath?: string;
  readonly version: PublicVersion;
}) {
  return (
    <View style={style('gap-8 w-full')}>
      <View style={style('flex-row justify-center w-full')}>
        <Image src={imagePath} style={style('w-48 h-48 rounded-full')} />
      </View>
      <View style={style('gap-4 pl-8 w-full')}>
        <Contact />
        <Skills version={version} />
      </View>
    </View>
  );
}
