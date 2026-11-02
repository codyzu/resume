import {render} from '@react-pdf/renderer';
import CvLayout from './CvLayout.js';

export async function renderCvDeveloper(outputPath: string) {
  return render(<CvLayout version="dev" />, outputPath);
}
