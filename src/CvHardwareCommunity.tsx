import {join} from 'node:path';
import {Page, View, Document, render} from '@react-pdf/renderer';
import {style} from './utils/style.js';
import {packageDirectory} from './utils/package-dir.js';
import Education from './components/sections/Education.js';
import Summary from './components/sections/Summary.js';
import Conferences from './components/sections/Conferences.js';
import AwardsMemberships from './components/sections/AwardsMemberships.js';
import Title from './components/sections/Title.js';
import Sidebar from './components/sections/Sidebar.js';
import Experience from './components/sections/Experience.js';
import Links from './components/sections/Links.js';
import {type Version} from './version.js';

const version: Version = 'hw';

// Create Document Component
function CvHardwareCommunity() {
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
              style={style('pl-4 pr-9 pt-1 text-lg gap-1 leading-tight w-full')}
            >
              <Links />
              <Summary version={version} />
              <Education />
              <Conferences version={version} />
              <AwardsMemberships version={version} />
            </View>
          </View>
        </View>
      </Page>
      <Page wrap size="A4" style={style('font-sans p-16')}>
        <View style={style('gap-8 w-full')}>
          <View style={style('gap-2 w-full')}>
            <Experience
              isHeaderVisible
              version={version}
              ids={['nearform-community', 'open-source']}
              qrCodeSize={100}
            />
            <Experience
              version={version}
              ids={[
                'nearform-devrel',
                'nearform-engineering',
                'teaching',
                'hubware',
                'axway',
                'beautec',
                'hamilton',
                'igt',
              ]}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export async function renderCvHardwareCommunity(outputPath: string) {
  return render(<CvHardwareCommunity />, outputPath);
}
