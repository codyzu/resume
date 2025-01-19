// eslint-disable-line unicorn/filename-case
import path, {basename} from 'node:path';
import {Page, View, Document, render, Link} from '@react-pdf/renderer';
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

console.log(style('flex-row-reverse items-start text-base'));

// Create Document Component
function MyDocument() {
  return (
    <Document>
      <Page wrap size="A4" style={style('font-sans')}>
        <View style={style('flex-row h-full')}>
          {/* Sidebar */}
          <View
            style={style('h-full w-1/3 bg-neutral-600 text-white px-4 py-8')}
          >
            <Sidebar
              imagePath={`${path.join(packageDirectory, 'images', 'profile.png')}`}
            />
          </View>

          {/* Body  */}
          <View style={style('h-full w-2/3')}>
            <Title />
            <View
              style={style(
                'pl-4 pr-12 pt-1 text-lg gap-2 leading-tight w-full',
              )}
            >
              <Links />
              <Summary />
              <Education />
              <TechnicalProjects />
              <Experience start={0} end={3} />
            </View>
          </View>
        </View>
      </Page>
      <Page wrap size="A4" style={style('font-sans p-16')}>
        <View style={style('gap-4 w-full')}>
          <Experience start={3} />
          <Conferences />
          <AwardsMemberships />
        </View>
      </Page>
    </Document>
  );
}

void render(<MyDocument />, `${basename(import.meta.filename, 'js')}pdf`);
