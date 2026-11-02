import {render} from '@react-pdf/renderer';
import CvLayout from './CvLayout.js';

export async function renderCvCernIt(outputPath: string) {
  return render(<CvLayout version="cern-it" />, outputPath);
}

export async function renderCvCernControl(outputPath: string) {
  return render(<CvLayout version="cern-control" />, outputPath);
}
