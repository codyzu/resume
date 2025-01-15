// eslint-disable-line unicorn/filename-case
import {basename} from 'node:path';
import React from 'react';
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
import Rainbow from './icons/Rainbow.js';

console.log(style('font-sans p-12 h-full text-sm'));

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
                src={`${import.meta.dirname}/../profile.png`}
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
              <SkillSection
                header="Programming Languages"
                skills={['JavaScript, TypeScript', 'Python', 'Java, C#, C++']}
              />
              <SkillSection
                header="Frameworks"
                skills={['Node.js', 'React', 'React Native', 'Fastify']}
              />
            </View>
          </View>
          {/* Body  */}
          <View style={style('h-full w-2/3')}>
            {/* Blue title bar */}
            {/* <View style={style('mt-12 bg-sky-800 pt-4 px-4 pb-2 text-white')}>
            <Text style={style('text-5xl font-fira font-bold leading-normal')}>Cody Zuschlag</Text>
            <View style={style('font-roboto font-bold gap-2')}>
              <Link style={style('text-sm text-white no-underline')}>https://devrel.codyfactory.eu</Link>
              <Text style={style('text-xs')}>Developer Relations Leader | Open Source Advocate | International Public Speaker</Text>
            </View>
          </View> */}
            <View style={style('mt-12 text-white')}>
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
            </View>
            <View style={style('px-4 py-4 text-xs gap-2')}>
              <Text style={style('')}>
                <Text style={style('font-bold')}>
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
              <Text style={style('text-2xl font-mono font-bold')}>
                &#123;Education&#125;
              </Text>
              <Text style={style('text-2xl font-mono font-bold')}>
                &#123;Technical Projects&#125;
              </Text>
              <Text style={style('text-2xl font-mono font-bold')}>
                &#123;Career Summary&#125;
              </Text>
              <Text style={style('text-lg font-bold')}>
                Professional Experience
              </Text>
              <Text style={style('text-sm')}>Developer Relations Manager</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
      </Page>
    </Document>
  );
}

void render(<MyDocument />, `${basename(import.meta.filename, 'js')}pdf`);
