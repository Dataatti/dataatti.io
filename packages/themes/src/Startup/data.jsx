import MobilePhone from '@pagerland/icons/src/monochrome/MobilePhone';
import PaperAirplane from '@pagerland/icons/src/monochrome/PaperAirplane';

import Instagram from '@pagerland/icons/src/monochrome/Instagram';
import Linkedin from '@pagerland/icons/src/monochrome/Linkedin';

import Welcome from './assets/welcome.jpg';
import Welcome2x from './assets/welcome@2x.jpg';
import AboutUs from './assets/about-us.jpg';
import AboutUs2x from './assets/about-us@2x.jpg';

import Avatar1 from './assets/avatars/avatar-1.jpg';
import Avatar12x from './assets/avatars/avatar-1@2x.jpg';
import Avatar2 from './assets/avatars/avatar-2.jpg';
import Avatar22x from './assets/avatars/avatar-2@2x.jpg';
import Avatar3 from './assets/avatars/avatar-3.jpg';
import Avatar32x from './assets/avatars/avatar-3@2x.jpg';
import Avatar4 from './assets/avatars/avatar-4.jpg';
import Avatar42x from './assets/avatars/avatar-4@2x.jpg';
import Avatar5 from './assets/avatars/avatar-5.jpg';
import Avatar52x from './assets/avatars/avatar-5@2x.jpg';
import Avatar6 from './assets/avatars/avatar-6.jpg';
import Avatar62x from './assets/avatars/avatar-6@2x.jpg';
import Avatar7 from './assets/avatars/avatar-7.jpg';
import Avatar72x from './assets/avatars/avatar-7@2x.jpg';
import Avatar8 from './assets/avatars/avatar-8.jpg';
import Avatar82x from './assets/avatars/avatar-8@2x.jpg';


export default {
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'services',
        label: 'Services',
      },
      {
        to: 'about',
        label: 'About',
      },
      {
        to: 'team',
        label: 'Team',
      },
      {
        to: 'contact',
        label: 'Contact',
      },
    ],
  },
  welcome: {
    img: {
      src: Welcome,
      srcSet: `${Welcome} 1x, ${Welcome2x} 2x`,
    },
    avatars: [
      {
        src: Avatar1,
        srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
      },
      {
        src: Avatar2,
        srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
      },
      {
        src: Avatar3,
        srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
      },
      {
        src: Avatar4,
        srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
      },
      {
        src: Avatar5,
        srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
      },
    ],
  },
  about: {
    img: {
      src: AboutUs,
      srcSet: `${AboutUs} 1x, ${AboutUs2x} 2x`,
    },
  },
  team: {
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
        },
        name: 'Timothy Wilson',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
        },
        name: 'Bernard Nguyen',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
        },
        name: 'Bessie Richards',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
        },
        name: 'Judith Black',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar5,
          srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
        },
        name: 'Robert Edwards',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar6,
          srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
        },
        name: 'Dianne Robertson',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar7,
          srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
        },
        name: 'Shane Black',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar8,
          srcSet: `${Avatar8} 1x, ${Avatar82x} 2x`,
        },
        name: 'Nathan Fox',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
    ],
  },

  contact: {
    title: 'Contact us',
    sections: [
      /*  {
         icon: MapMarker,
         text: textToMultiline`5263 Sunset St undefined Salinas,\nWest Virginia 25420\nUnited States`,
       }, */
      {
        icon: MobilePhone,
        text: '+358 40 521 6860',
      },
      {
        icon: PaperAirplane,
        text: 'hello@dataatti.com',
      },
    ],
    socialLinks: [
      {
        icon: Instagram,
        href: 'https://www.instagram.com/dataatti/',
        title: 'Instagram',
      },
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com/company/dataatti/',
        title: 'LinkedIn',
      },
    ],
  },
};
