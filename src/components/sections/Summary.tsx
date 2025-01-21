import {summary} from '../../data/summary.js';
import {type Version} from '../../version.js';
import Text from '../Text.js';

export default function Summary({version}: {readonly version: Version}) {
  return <Text>{summary[version].split('\n').filter(Boolean).join(' ')}</Text>;
}
