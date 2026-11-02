import {render} from '@react-pdf/renderer';
import CvLayout from './CvLayout.js';

export async function renderCvDeveloperRelations(outputPath: string) {
  return render(<CvLayout version="devrel" />, outputPath);
}
