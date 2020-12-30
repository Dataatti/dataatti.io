import * as Yup from 'yup';

import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import Dna from '@pagerland/icons/src/line/Dna';
import Flask from '@pagerland/icons/src/line/Flask';
import Atom from '@pagerland/icons/src/line/Atom';
import CheckCircle from '@pagerland/icons/src/line/CheckCircle';
import Gift from '@pagerland/icons/src/line/Gift';
import Coffee from '@pagerland/icons/src/line/Coffee';
import Medal from '@pagerland/icons/src/line/Medal';
import LightbulbAlt from '@pagerland/icons/src/line/LightbulbAlt';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import firstFuture from './assets/frist-feature.svg';
import secondFuture from './assets/second-feature.svg';
import thirdFuture from './assets/third-feature.svg';

import Phone1 from './assets/screenshots/Phone-1.png';
import Phone1x2 from './assets/screenshots/Phone-1@2x.png';
import Phone2 from './assets/screenshots/Phone-2.png';
import Phone2x2 from './assets/screenshots/Phone-2@2x.png';
import Phone3 from './assets/screenshots/Phone-3.png';
import Phone3x2 from './assets/screenshots/Phone-3@2x.png';
import Phone4 from './assets/screenshots/Phone-4.png';
import Phone4x2 from './assets/screenshots/Phone-4@2x.png';
import Phone5 from './assets/screenshots/Phone-5.png';
import Phone5x2 from './assets/screenshots/Phone-5@2x.png';
import Phone6 from './assets/screenshots/Phone-6.png';
import Phone6x2 from './assets/screenshots/Phone-6@2x.png';

import male from './assets/clients/photo-male.jpg';
import malex2 from './assets/clients/photo-male@2x.jpg';
import female from './assets/clients/photo-female.jpg';
import femalex2 from './assets/clients/photo-female@2x.jpg';

export default {
  title: 'Mobile App',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'about',
        label: 'About',
      },
      {
        to: 'features',
        label: 'Features',
      },
      {
        to: 'screens',
        label: 'Screens',
      },
      {
        to: 'clients',
        label: 'Clients',
      },
      {
        to: 'support',
        label: 'Support',
      },
      {
        to: 'pricing',
        label: 'Pricing',
      },
      {
        to: 'contact',
        label: 'Contact',
      },
    ],
    actions: [
      {
        href: 'http://mypags.app',
        label: 'Start free trial',
      },
    ],
  },
  welcome: {
    title: 'Great landing page template for your mobile app!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.`,
  },
  footer: {
    section1: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor et dolor eleifend laoreet. Donec id nisi finibus, consequat libero vitae, imperdiet urna.`,
    },
    contact: {
      title: 'Contact',
      sections: [
        {
          icon: MapMarker,
          text: textToMultiline(`9207 Lakeshore Rd\nShreveport, Rhode Island\n98563 United States`),
        },
        {
          icon: Phone,
          text: '(262) 555-0131',
        },
        {
          icon: Envelope,
          text: 'info@example.com',
        },
      ],
    },
    section3: {
      title: 'Support & downloads',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor et dolor eleifend.`,
    },
  },
  about: {
    title: 'How this template can help you?',
    text: `Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.`,
    features: [
      {
        id: 'feature1',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Feature heading',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis.',
      },
      {
        id: 'feature2',
        IconProps: {
          icon: Flask,
          gradient: 'primary',
        },
        title: 'Feature heading',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis.',
      },
      {
        id: 'feature3',
        IconProps: {
          icon: Atom,
          gradient: 'quaternary',
        },
        title: 'Feature heading',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis.',
      },
    ],
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: 'https://mypags.app',
      title: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://mypags.app',
      title: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://mypags.app',
      title: 'YouTube',
    },
  ],
  features: [
    {
      ImageProps: {
        src: firstFuture,
      },
      title: 'First feature',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.',
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      ImageProps: {
        src: secondFuture,
      },
      title: 'Second feature',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.',
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      title: 'Another features section',
      text:
        'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis vestibulum neque.',
      list: [
        {
          IconProps: {
            icon: Gift,
            gradient: 'primary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: Coffee,
            gradient: 'tertiary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: Medal,
            gradient: 'secondary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: LightbulbAlt,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      ImageProps: {
        src: thirdFuture,
      },
      title: 'More amazing features',
      text:
        'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      list: [
        {
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
  ],
  screenshots: {
    title: 'Screenshots',
    text:
      'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
    images: [
      {
        src: Phone1,
        srcSet: `${Phone1} 1x, ${Phone1x2} 2x`,
        alt: 'Phone 1',
      },
      {
        src: Phone2,
        srcSet: `${Phone2} 1x, ${Phone2x2} 2x`,
        alt: 'Phone 2',
      },
      {
        src: Phone3,
        srcSet: `${Phone3} 1x, ${Phone3x2} 2x`,
        alt: 'Phone 3',
      },
      {
        src: Phone4,
        srcSet: `${Phone4} 1x, ${Phone4x2} 2x`,
        alt: 'Phone 4',
      },
      {
        src: Phone5,
        srcSet: `${Phone5} 1x, ${Phone5x2} 2x`,
        alt: 'Phone 5',
      },
      {
        src: Phone6,
        srcSet: `${Phone6} 1x, ${Phone6x2} 2x`,
        alt: 'Phone 6',
      },
    ],
  },
  clients: {
    title: 'What clients say about us?',
    comments: [
      {
        author: 'Pat Cooper, Big Company SEO',
        text: `Elit officia consectetur mollit occaecat incididunt sunt labore ad est veniam cupidatat tempor. Deserunt veniam nostrud est ad enim labore sit dolore amet enim veniam ipsum. Ullamco cillum ad nulla quis aliquip fugiat veniam incididunt ipsum cupidatat. Lorem qui voluptate ut enim occaecat et ut eu aliquip culpa.`,
        AvatarProps: {
          src: male,
          srcSet: `${male} 1x, ${malex2} 2x`,
        },
      },
      {
        author: 'Orsola Jeroch, Bigger Company CTO',
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
    ],
  },
  faq: {
    title: 'Do you have any questions?',
    text:
      'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
    options: [
      {
        title: 'Cras quis dolor auctor mi varius tincidunt?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Mauris accumsan dolor et elementum dapibus?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Phasellus sollicitudin neque a odio varius, condimentum ultrices risus molestie?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Pellentesque fringilla non dolor ut convallis?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Integer imperdiet venenatis orci, ac dictum libero semper sit amet?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: 'USD',
      types: {
        a: 'Monthly',
        b: 'Annually',
      },
      sections: [
        {
          title: 'Beginner',
          price: {
            a: '$0',
            b: '$0',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: false,
            },
            {
              text: 'Nullam vitae tortor',
              check: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Choose beginner',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Advanced',
          price: {
            a: '$12',
            b: '$120',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Choose advanced',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Expert',
          price: {
            a: '$24',
            b: '$240',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: true,
            },
            {
              text: 'Fusce quis vestibulum',
              check: true,
            },
          ],
          button: {
            text: 'Choose expert',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  contact: {
    title: 'Contact us',
    text:
      'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
    sendButtonText: 'Send message',
    form: {
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        message: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'firstName',
          placeholder: 'First name',
          initialValue: '',
        },
        {
          name: 'email',
          placeholder: 'E-mail',
          type: 'email',
          initialValue: '',
        },
        {
          name: 'message',
          placeholder: 'Message',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  newsletter: {
    title: 'Stay always up to date',
    text: 'Sign up to our monthly newsletter and get news and grest special offers!',
    buttonText: 'Sign up',
    inputPlaceholder: 'Your email address',
  },
  copyright: '© 2020 Coffeecream Themes',
};
