import {Link, View} from '@react-pdf/renderer';
import Phone from '../icons/Phone.js';
import Mail from '../icons/Mail.js';
import {style} from '../../utils/style.js';
import House from '../icons/House.js';
import Passport from '../icons/Passport.js';
import {contactInfo} from '../../contact-info.js';
import Text from '../Text.js';
import ContactInfo from './ContactInfo.js';

export default function Contact() {
  return (
    <View style={style('gap-1')}>
      <ContactInfo Icon={Phone}>
        <Text>{contactInfo.phone}</Text>
      </ContactInfo>
      <ContactInfo Icon={Mail}>
        <Link
          src={`mailto:${contactInfo.email}}`}
          style={style('text-white no-underline')}
        >
          {contactInfo.email}
        </Link>
      </ContactInfo>
      <ContactInfo Icon={House}>
        {contactInfo.address.split('\n').map((line) => (
          <Text key={line}>{line}</Text>
        ))}
      </ContactInfo>
      <ContactInfo Icon={Passport}>
        <Text>{contactInfo.nationality}</Text>
      </ContactInfo>
    </View>
  );
}
