import {join} from 'node:path';
import {Document, Image, Link, Page, Text, View} from '@react-pdf/renderer';
import {type Version} from './version.js';
import {profiles} from './data/profiles.js';
import {portraitFilename} from './data/presentation.js';
import {workExperience, supportingExperience} from './data/work-experience.js';
import {type CareerId} from './data/career.js';
import {contactInfo} from './data/contact-info.js';
import {education} from './data/education.js';
import {style} from './utils/style.js';
import {packageDirectory} from './utils/package-dir.js';
import SectionHeader from './components/SectionHeader.js';

const blue = '#075985';
const textStyle = {fontSize: 10.5, lineHeight: 1.32};

function Heading({children}: {readonly children: string}) {
  return (
    <View style={{marginBottom: 9}}>
      <SectionHeader fontSize={15}>{children}</SectionHeader>
    </View>
  );
}

function Jobs({
  version,
  ids,
  compact = false,
}: {
  readonly version: Version;
  readonly ids: readonly CareerId[];
  readonly compact?: boolean;
}) {
  return ids.map((id) => {
    const job = workExperience[version].find((entry) => entry.id === id);
    if (!job) {
      throw new Error(`Missing career entry ${version}/${id}`);
    }

    return (
      <View key={id} wrap={false} style={{marginBottom: 8}}>
        <Text style={{fontWeight: 'heavy', fontSize: compact ? 10.5 : 11.5}}>
          {job.organization}
          {compact ? ` | ${job.role}` : ''}
        </Text>
        {!compact && (
          <Text style={{fontWeight: 'bold', fontSize: 10.5, marginTop: 2}}>
            {job.role}
          </Text>
        )}
        <Text
          style={{fontSize: 9, color: '#525252', marginTop: 2, marginBottom: 4}}
        >
          {job.dateRange} | {job.location}
        </Text>
        {job.experiences.map((text) => (
          <Text
            key={text}
            style={{
              ...textStyle,
              marginBottom: 2,
              paddingLeft: 10,
              textIndent: -10,
            }}
          >
            <Text style={{color: blue}}>› </Text>
            {text}
          </Text>
        ))}
      </View>
    );
  });
}

function TeachingAndService({hasSpeaking}: {readonly hasSpeaking: boolean}) {
  return (
    <View wrap={false}>
      <Heading>Teaching & Open Source</Heading>
      <Text style={{...textStyle, marginBottom: 8}}>
        {supportingExperience.teaching.organization} |{' '}
        {supportingExperience.teaching.role} |{' '}
        {supportingExperience.teaching.dateRange}
      </Text>
      <Text style={{...textStyle, marginBottom: 9}}>
        {supportingExperience.teaching.experiences.join(' ')}
      </Text>
      <Text style={{...textStyle, marginBottom: 14}}>
        {hasSpeaking
          ? supportingExperience.openSource.experiences.join(' ')
          : supportingExperience.service.experiences.join(' ')}
      </Text>
    </View>
  );
}

function Sidebar({version}: {readonly version: Version}) {
  const profile = profiles[version];
  const linkStyle = {
    fontSize: 9.5,
    color: 'white',
    textDecoration: 'none' as const,
  };
  const onlineLinkStyle = {...linkStyle, paddingVertical: 4};
  return (
    <View
      style={{
        width: 166,
        backgroundColor: '#525252',
        color: 'white',
        padding: 19,
        paddingTop: 30,
      }}
    >
      <Image
        src={join(packageDirectory, 'images', portraitFilename)}
        style={{
          width: 128,
          height: 128,
          objectFit: 'contain',
          borderRadius: 50,
          alignSelf: 'center',
          marginBottom: 16,
        }}
      />
      <View style={{marginBottom: 9}}>
        <SectionHeader color="white" fontSize={14}>
          Contact
        </SectionHeader>
      </View>
      <View style={{gap: 7, marginBottom: 16}}>
        <Text style={{fontSize: 10}}>Annecy, France</Text>
        <Link src={`mailto:${contactInfo.email}`} style={linkStyle}>
          {contactInfo.email}
        </Link>
        <Link
          src={`tel:${contactInfo.phone.replaceAll(' ', '')}`}
          style={linkStyle}
        >
          {contactInfo.phone}
        </Link>
        <Text style={{fontSize: 10}}>French & US citizen</Text>
        <Text style={{fontSize: 10}}>English: native{'\n'}French: fluent</Text>
      </View>
      <View style={{marginBottom: 12}}>
        <SectionHeader color="white" fontSize={16}>
          Skills
        </SectionHeader>
      </View>
      {profile.skills.map(([label, description]) => (
        <View key={label} style={{marginBottom: 16}}>
          <Text
            style={{
              fontWeight: 'heavy',
              fontSize: 10,
              marginBottom: 7,
              textTransform: 'uppercase',
            }}
          >
            {label}
          </Text>
          <Text style={{fontSize: 10, lineHeight: 1.4}}>{description}</Text>
        </View>
      ))}
      <View style={{marginBottom: 8}}>
        <SectionHeader color="white" fontSize={14}>
          Online
        </SectionHeader>
      </View>
      <View>
        <Link src="https://devrel.codyfactory.eu" style={onlineLinkStyle}>
          Portfolio & technical talks
        </Link>
        <Link src="https://github.com/codyzu" style={onlineLinkStyle}>
          github.com/codyzu
        </Link>
        <Link
          src="https://linkedin.com/in/cody-zuschlag"
          style={onlineLinkStyle}
        >
          linkedin.com/in/cody-zuschlag
        </Link>
      </View>
    </View>
  );
}

export default function CvLayout({version}: {readonly version: Version}) {
  const profile = profiles[version];
  return (
    <Document
      title={`Cody Zuschlag - ${profile.reference ?? profile.title}`}
      author="Cody Zuschlag"
      language="en"
    >
      <Page size="A4" style={style('font-sans')}>
        <View style={{flexDirection: 'row', height: '100%'}}>
          <Sidebar version={version} />
          <View style={{flex: 1, paddingBottom: 24}}>
            <View
              style={{
                backgroundColor: blue,
                color: 'white',
                marginTop: 30,
                padding: 21,
                paddingVertical: 17,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Fira Sans',
                  fontWeight: 'bold',
                  fontSize: 37,
                }}
              >
                Cody Zuschlag
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: profile.reference ? 11.5 : 10.5,
                  marginTop: 8,
                  lineHeight: 1.4,
                }}
              >
                {profile.title}
              </Text>
              {profile.reference ? (
                <Text style={{fontSize: 9, marginTop: 10}}>
                  CERN | {profile.reference}
                </Text>
              ) : (
                <Link
                  src="https://devrel.codyfactory.eu"
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: 10,
                    color: 'white',
                    marginTop: 10,
                    textDecoration: 'none',
                  }}
                >
                  devrel.codyfactory.eu
                </Link>
              )}
            </View>
            <View style={{paddingHorizontal: 22, paddingTop: 17}}>
              <Text style={{...textStyle, marginBottom: 16}}>
                {profile.summary}
              </Text>
              <Heading>Career Summary</Heading>
              <Jobs version={version} ids={profile.pages[0]} />
              {profile.supportingPage === 'first' && (
                <TeachingAndService hasSpeaking={Boolean(profile.speaking)} />
              )}
            </View>
          </View>
        </View>
      </Page>
      <Page
        size="A4"
        style={{...style('font-sans'), padding: 30, paddingBottom: 24}}
      >
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 11,
            color: '#737373',
            marginBottom: 14,
          }}
        >
          Cody Zuschlag · 2 / 2
        </Text>
        <Heading>Earlier Engineering</Heading>
        <Jobs
          version={version}
          ids={profile.pages[1]}
          compact={profile.compactEarlier}
        />
        {profile.supportingPage !== 'first' && (
          <TeachingAndService hasSpeaking={Boolean(profile.speaking)} />
        )}
        {profile.speaking && (
          <View>
            <Heading>Selected Speaking</Heading>
            {profile.speaking.map(({header, text}) => (
              <Text key={header} style={{...textStyle, marginBottom: 4}}>
                <Text style={{fontWeight: 'bold'}}>{header} | </Text>
                {text}
              </Text>
            ))}
          </View>
        )}
        <Heading>Education</Heading>
        <Text style={textStyle}>{education.replaceAll('*', '')}</Text>
        {profile.recognition && (
          <Text style={{fontSize: 9, lineHeight: 1.3, marginTop: 8}}>
            {profile.recognition}
          </Text>
        )}
      </Page>
    </Document>
  );
}
