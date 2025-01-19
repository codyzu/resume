import {summary} from '../../summary.js';
import Text from '../Text.js';

export default function Summary() {
  return <Text>{summary.replaceAll('\n', '')}</Text>;
}
