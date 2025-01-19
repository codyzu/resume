import {View} from '@react-pdf/renderer';
import {projects} from '../../projects.js';
import List from '../list/List.js';
import SectionHeader from '../SectionHeader.js';
import {style} from '../../utils/style.js';

export default function TechnicalProjects() {
  return (
    <View style={style('gap-2 w-full')}>
      <SectionHeader>Technical Projects</SectionHeader>
      {projects.map((project) => (
        <List key={project.header} list={project} />
      ))}
    </View>
  );
}
