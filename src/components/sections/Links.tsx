import {Link, View} from '@react-pdf/renderer';
import LinkedIn from '../icons/LinkedIn.js';
import {style} from '../../utils/style.js';
import Text from '../Text.js';
import Github from '../icons/Github.js';

export default function Links() {
  return (
    <View style={style('flex-row w-full pr-8')}>
      <Link
        style={style('flex-row items-center gap-1 text-black font-bold')}
        src="https://linkedin.com/in/cody-zuschlag"
      >
        <LinkedIn style={style('w-5 h-5')} />
        <Text>linkedin.com/in/cody-zuschlag</Text>
      </Link>
      <View style={style('grow')} />
      <Link
        style={style('flex-row items-center gap-1 text-black font-bold')}
        src="https://github.com/codyzu"
      >
        <Github style={style('w-5 h-5')} />
        <Text>github.com/codyzu</Text>
      </Link>
    </View>
  );
}
