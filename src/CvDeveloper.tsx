import {join} from 'node:path';
import {cwd} from 'node:process';
import {Page, View, Document, render} from '@react-pdf/renderer';
import {style} from './utils/style.js';
import {packageDirectory} from './utils/package-dir.js';
import Education from './components/sections/Education.js';
import TechnicalProjects from './components/sections/TechnicalProjects.js';
import Summary from './components/sections/Summary.js';
import Conferences from './components/sections/Conferences.js';
import AwardsMemberships from './components/sections/AwardsMemberships.js';
import Title from './components/sections/Title.js';
import Sidebar from './components/sections/Sidebar.js';
import Experience from './components/sections/Experience.js';
import Links from './components/sections/Links.js';
import {type Version} from './version.js';

console.log(style('flex-row-reverse items-start text-base'));

const version: Version = 'dev';

// Create Document Component
function CvDeveloper() {
  return (
    <Document>
      <Page wrap size="A4" style={style('font-sans')}>
        <View style={style('flex-row h-full')}>
          {/* Sidebar */}
          <View
            style={style('h-full w-1/3 bg-neutral-600 text-white px-4 py-8')}
          >
            <Sidebar
              version={version}
              imagePath={`${join(packageDirectory, 'images', 'profile-compressed.png')}`}
            />
          </View>

          {/* Body  */}
          <View style={style('h-full w-2/3')}>
            <Title version={version} />
            <View
              style={style(
                'pl-4 pr-12 pt-1 text-lg gap-2 leading-tight w-full',
              )}
            >
              <Links />
              <Summary version={version} />
              <Education />
              <TechnicalProjects />
              <Experience version={version} start={0} end={1} />
              <Experience version={version} start={1} end={3} />
            </View>
          </View>
        </View>
      </Page>
      <Page wrap size="A4" style={style('font-sans p-16')}>
        <View style={style('gap-4 w-full')}>
          <Experience version={version} start={3} />
          <Conferences version={version} />
          <AwardsMemberships version={version} />
        </View>
      </Page>
    </Document>
  );
}

export async function renderCvDeveloper() {
  console.log('cwd', cwd());
  return render(<CvDeveloper />, join(cwd(), 'cv-cody-zuschlag-dev.pdf'));
}
