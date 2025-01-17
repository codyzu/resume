// eslint-disable-line unicorn/filename-case
import path, {basename} from 'node:path';
import {
  Page,
  Text,
  View,
  Document,
  render,
  Image,
  Link,
} from '@react-pdf/renderer';
import House from './icons/House.js';
import Phone from './icons/Phone.js';
import ContactInfo from './contact/ContactInfo.js';
import Mail from './icons/Mail.js';
import {style} from './style.js';
import Passport from './icons/Passport.js';
import SkillSection from './SkillsSection.js';
import List from './list/List.js';
import SectionHeader from './SectionHeader.js';
import WorkExperience from './list/WorkExperience.js';
import {packageDirectory} from './package-dir.js';
import {workExperience} from './work-experience.js';
import {conferences} from './conferences.js';
import {awards} from './awards.js';
import {skills} from './skills.js';

console.log(style('flex-row-reverse items-start'));

// Create Document Component
function MyDocument() {
  return (
    <Document>
      {/* <Page size="A4" wrap={false} style={styles.page}> */}
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
              <ContactInfo Icon={Phone}>
                <Text>+33 7 86 65 94 37</Text>
              </ContactInfo>
              <ContactInfo Icon={Mail}>
                <Link
                  src="mailto:cody.zuschlag@gmail.com"
                  style={style('text-white no-underline')}
                >
                  cody.zuschlag@gmail.com
                </Link>
              </ContactInfo>
              <ContactInfo Icon={House}>
                <Text>12b boulevard Jacques</Text>
                <Text>74000 Annecy</Text>
                <Text>France</Text>
              </ContactInfo>
              <ContactInfo Icon={Passport}>
                <Text>Dual Citizen (USA & France)</Text>
              </ContactInfo>
              {/* <View style={tw('items-stretch w-full bg-red-500')}>
              <Rainbow style={tw('w-full h-10 bg-red-blue')} />
            </View> */}
              <View style={style('mt-5')}>
                <Text style={style('text-xl font-mono font-bold')}>
                  &#123;Skills&#125;
                </Text>
              </View>
              {Object.entries(skills).map(([category, list]) => (
                <SkillSection key={category} header={category} skills={list} />
              ))}
              {/* <SkillSection
                header="Programming Languages"
                skills={['JavaScript, TypeScript', 'Python', 'Java, C#, C++']}
              />
              <SkillSection
                header="Frameworks"
                skills={['Node.js', 'React', 'React Native', 'Fastify']}
              /> */}
            </View>
          </View>
          {/* Body  */}
          <View style={style('h-full w-2/3')}>
            {/* Blue title bar */}
            <View style={style('mt-12 bg-sky-800 pt-4 px-4 pb-2 text-white')}>
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
              <List
                list={{
                  header: 'Full-Stack Application Development',
                  items: [
                    {
                      text: 'Led a team to architect and build an AI powered CEO recruitment platform in Azure.',
                    },
                    {
                      text: 'Architected and deployed a serverless CMS framework combining JAMstack and API-driven methodologies.',
                    },
                    {
                      text: 'Built a cloud-first e-commerce platform leveraging React, GraphQL, and Node.js.',
                    },
                  ],
                }}
              />
              <List
                list={{
                  header: 'Full-Stack Application Development',
                  items: [
                    {
                      header: 'Node.js Core Development',
                      text: 'Contributed documentation. Triaged issues to find issues suitable for first time contributors. Conducted workshops to onboard contributors to Node.js. Member of the OpenJs Cross Project Foundation.',
                    },
                    {
                      header: 'GraphQL API Implementation',
                      text: 'Designed and deployed GraphQL APIs for enterprise-scale applications. Integrated with React front-end for real-time data updates.',
                    },
                    {
                      header: 'React-Based Design System',
                      text: 'Created modular, reusable components for a cross-platform, cross-channel design system.',
                    },
                  ],
                }}
              />

              <SectionHeader>Career Summary</SectionHeader>
              <View style={style('flex-row-reverse items-start')}>
                <View style={style('w-[116px] items-center justify-center')}>
                  <Text style={style('text-2xs')}>
                    Details on <Link src="http://linked.com">LinkedIn</Link>
                  </Text>
                  <Image
                    style={style('w-[68px] h-[68px]')}
                    src={`${path.join(packageDirectory, 'images', 'devrel-codyfactory.png')}`}
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
          {Object.entries(conferences).map(([category, list]) => (
            <List key={category} list={{header: category, items: list}} />
          ))}
          <SectionHeader>Awards + Memberships</SectionHeader>
          <List list={{items: awards}} />
        </View>
      </Page>
    </Document>
  );
}

void render(<MyDocument />, `${basename(import.meta.filename, 'js')}pdf`);
