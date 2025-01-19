import {Image, View} from '@react-pdf/renderer';
import {style} from '../../utils/style.js';
import Contact from '../contact/Contact.js';
import Skills from '../skills/Skills.js';

export default function Sidebar({imagePath}: {readonly imagePath: string}) {
  return (
    <View style={style('gap-8 w-full')}>
      <View style={style('flex-row justify-center w-full')}>
        <Image src={imagePath} style={style('w-48 h-48 rounded-full')} />
      </View>
      <View style={style('gap-4 pl-4 w-full')}>
        <Contact />
        <Skills />
      </View>
    </View>
  );
}
