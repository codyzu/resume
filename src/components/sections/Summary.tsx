import {summary} from '../../data/summary.js';
import {type PublicVersion} from '../../version.js';
import Text from '../Text.js';

export default function Summary({version}: {readonly version: PublicVersion}) {
  return <Text>{summary[version].split('\n').filter(Boolean).join(' ')}</Text>;
}
