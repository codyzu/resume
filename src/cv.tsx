// eslint-disable-line unicorn/filename-case
import path, {basename} from 'node:path';
import {Page, View, Document, render, Image, Link} from '@react-pdf/renderer';
import {style} from './utils/style.js';
import SkillSection from './components/SkillsSection.js';
import List from './components/list/List.js';
import SectionHeader from './components/SectionHeader.js';
import WorkExperience from './components/list/WorkExperience.js';
import {packageDirectory} from './utils/package-dir.js';
import {workExperience} from './work-experience.js';
import {conferences} from './conferences.js';
import {awards} from './awards.js';
import {skills} from './skills.js';
import {projects} from './projects.js';
import Contact from './components/contact/Contact.js';
import Text from './components/Text.js';

console.log(style('flex-row-reverse items-start'));

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
            <View style={style('flex-row justify-center w-full pb-8')}>
              <Image
                src={path.join(packageDirectory, 'images', 'profile.png')}
                style={style('w-48 h-48 rounded-full')}
              />
            </View>
            <View style={style('gap-2 pl-4')}>
              <Contact />
              <View style={style('mt-5')}>
                <Text style={style('text-xl font-mono font-bold')}>
                  &#123;Skills&#125;
                </Text>
              </View>
              {skills.map((skillSection) => (
                <SkillSection
                  key={skillSection.category}
                  header={skillSection.category}
                  skills={skillSection.items}
                />
              ))}
            </View>
          </View>

          {/* Body  */}
          <View style={style('h-full w-2/3')}>
            {/* Blue title bar */}
            <View
              style={style(
                'mt-12 bg-sky-800 pt-4 px-4 pb-2 text-white w-full gap-2',
              )}
            >
              <View style={style('flex-row w-full items-start')}>
                <View style={style('grow')}>
                  <Text
                    style={style('text-5xl font-fira font-bold leading-normal')}
                  >
                    Cody Zuschlag
                  </Text>
                  <Link
                    style={style(
                      'text-sm text-white no-underline font-roboto font-bold',
                    )}
                  >
                    https://devrel.codyfactory.eu
                  </Link>
                </View>
                <Image
                  src={path.join(
                    packageDirectory,
                    'images',
                    'devrel-codyfactory.png',
                  )}
                  style={style('w-[68px] h-[68px] my-1')}
                />
              </View>
              <Text style={style('text-xs font-roboto font-bold')}>
                Developer Relations Leader | Open Source Advocate |
                International Public Speaker
              </Text>
            </View>
            {/* <View style={style('mt-12 text-white')}>
              <Rainbow style={style('w-full h-full absolute')} />
              <View style={style('w-full pt-4 px-4 pb-2')}>
                <Text
                  style={style('text-5xl font-fira font-bold leading-normal')}
                >
                  Cody Zuschlag
                </Text>
                <View style={style('font-roboto font-bold gap-2')}>
                  <Link style={style('text-sm text-white no-underline')}>
                    https://devrel.codyfactory.eu
                  </Link>
                  <Text style={style('text-xs')}>
                    Developer Relations Leader | Open Source Advocate |
                    International Public Speaker
                  </Text>
                </View>
              </View>
            </View> */}
            <View
              style={style(
                'pl-4 pr-12 py-4 text-xs gap-2 leading-tight w-full',
              )}
            >
              <Text>
                <Text style={style('font-black')}>
                  Results-driven Software Engineer
                </Text>{' '}
                with 17+ years of experience in Node.js, JavaScript, TypeScript,
                and firmware. Skilled in designing and deploying scalable,
                full-stack applications leveraging React, GraphQL, serverless
                architectures, and AI integrations to enhance user experiences
                and drive efficiency. Proven track record of leading development
                teams, advancing open-source ecosystems, and delivering
                technical excellence on high-impact projects. Passionate about
                building innovative, user-centric solutions through modern web
                technologies and fostering collaborative, results- oriented
                engineering environments.
              </Text>

              <SectionHeader>Education</SectionHeader>
              <View style={style('gap-0 text-2xs font-bold')}>
                <Text>
                  Bachelor (x2) of Science in Software & Computer Engineering
                  Technology | 2007
                </Text>
                <Text>
                  Top of Class, Honors | Oregon Institute of Technology (Klamath
                  Falls, Oregon, USA)
                </Text>
              </View>
              <SectionHeader>Technical Projects</SectionHeader>
              {projects.map((project) => (
                <List key={project.header} list={project} />
              ))}

              <SectionHeader>Career Summary</SectionHeader>
              <View style={style('flex-row-reverse items-start')}>
                <View style={style('w-[116px] items-center justify-center')}>
                  <Text style={style('text-2xs italic')}>
                    Details on{' '}
                    <Link
                      style={style('no-underline text-black')}
                      src="http://linked.com"
                    >
                      LinkedIn
                    </Link>
                  </Text>
                  <Image
                    style={style('w-[68px] h-[68px]')}
                    src={`${path.join(packageDirectory, 'images', 'linked-in.png')}`}
                  />
                </View>
                <WorkExperience experience={workExperience[0]} />
              </View>
              {workExperience.slice(1, 3).map((experience) => (
                <WorkExperience
                  key={`${experience.organization}${experience.dateRange}`}
                  experience={experience}
                />
              ))}
            </View>
          </View>
        </View>
      </Page>
      <Page wrap size="A4" style={style('font-sans p-12')}>
        <View style={style('gap-2 w-full')}>
          {workExperience.slice(3).map((experience) => (
            <WorkExperience
              key={`${experience.organization}${experience.dateRange}`}
              experience={experience}
            />
          ))}
          <SectionHeader>Conferences + Public Speaking</SectionHeader>
          {conferences.map((conferenceSection) => (
            <List key={conferenceSection.header} list={conferenceSection} />
          ))}
          <SectionHeader>Awards + Memberships</SectionHeader>
          <List list={{items: awards}} />
        </View>
      </Page>
    </Document>
  );
}

void render(<MyDocument />, `${basename(import.meta.filename, 'js')}pdf`);
