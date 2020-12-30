import React from 'react';

import MapMarker from '@pagerland/icons/src/line/MapMarker';
import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import Cog from '@pagerland/icons/src/line/Cog';
import Figma from '@pagerland/icons/src/line/Figma';
import LifeRing from '@pagerland/icons/src/line/LifeRing';

import Typography from '@pagerland/common/src/components/Typography';
import Img from '@pagerland/common/src/components/Img';

import { smoothLinkProps } from '@pagerland/common/src/utils';

import maschable from './assets/brands/maschable.svg';
import extremetech from './assets/brands/extremetech.svg';
import techbragins from './assets/brands/techbragins.svg';
import envato from './assets/brands/envato.svg';
import geek from './assets/brands/geek.svg';

import features1 from './assets/features.svg';
import features2 from './assets/features-2.svg';
import features3 from './assets/features-3.svg';
import features4 from './assets/features-4.svg';

import Screenshot from './assets/screenshot.jpg';
import Screenshot2x from './assets/screenshot@2x.jpg';
import Avatar from './assets/avatar.jpg';
import Avatar2x from './assets/avatar@2x.jpg';

export default {
  title: 'WebApp',
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
        href:
          'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        label: 'Buy this theme',
      },
    ],
  },
  welcome: {
    title: [
      'This is ',
      <Typography as="span" variant="h1" color="primary">
        not
      </Typography>,
      ' just another landing page theme!',
    ],
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis.',
    actions: [
      {
        label: 'Learn more',
        to: 'about',
        ...smoothLinkProps,
        variant: 'secondary',
      },
      {
        label: 'Buy this theme',
        href: 'https://mypags.app',
        as: 'a',
        variant: 'primary',
      },
    ],
  },
  brands: [
    {
      src: maschable,
      alt: 'Maschable',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Maschable',
      },
    },
    {
      src: extremetech,
      alt: 'Extremetech',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Extremetech',
      },
    },
    {
      src: techbragins,
      alt: 'Techbragins',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Techbragins',
      },
    },
    {
      src: envato,
      alt: 'Envato',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Envato',
      },
    },
    {
      src: geek,
      alt: 'Geek',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Geek',
      },
    },
  ],
  about: {
    sections: [
      {
        IconWrapperProps: {
          bg: 'primary',
        },
        title: 'Built with Gatsby and React',
        text:
          'Donec dapibus quis neque eget dapibus. Curabitur ultrices massa ligula, gravida auctor dolor aliquet sed.',
        icon: Cog,
      },
      {
        IconWrapperProps: {
          bg: 'secondary',
        },
        title: 'Custom design in Figma',
        text:
          'Donec dapibus quis neque eget dapibus. Curabitur ultrices massa ligula, gravida auctor dolor aliquet sed.',
        icon: Figma,
      },
      {
        IconWrapperProps: {
          bg: 'tertiary',
        },
        title: 'Incredible support',
        text:
          'Donec dapibus quis neque eget dapibus. Curabitur ultrices massa ligula, gravida auctor dolor aliquet sed.',
        icon: LifeRing,
      },
    ],
  },
  features: {
    title: 'Discover what makes Pagerland so great',
    text:
      'Donec turpis justo, egestas at nisl nec, ullamcorper rutrum justo. Morbi sed blandit justo, ac molestie diam. Sed sapien augue, vestibulum id nisl a, gravida consectetur lectus. Duis vehicula suscipit consectetur.',
    features: [
      {
        title: 'Feature name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
        details: <Img src={features1} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Feature name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
        details: <Img src={features2} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Feature name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
        details: <Img src={features3} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Feature name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
        details: <Img src={features4} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
    ],
  },
  screenshots: {
    title: 'Screenshots',
    screenshots: [
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Screenshot name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Second screenshot name',
        text:
          'Curabitur ut lectus hendrerit, efficitur ante non, vulputate nibh. Aenean luctus consequat nunc id aliquam. Praesent pellentesque.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Third screenshot name',
        text:
          'Vestibulum id tempor neque, viverra posuere nulla. Nulla sagittis augue id pretium finibus. Praesent vel lacinia velit. Suspendisse ornare porta.',
      },
    ],
  },
  clients: {
    title: 'See what other people say about us',
    avatar: {
      src: Avatar,
      srcSet: `${Avatar} 1x, ${Avatar2x} 2x`,
      alt: 'Avatar',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla mi sit amet malesuada euismod. Morbi pulvinar mauris et erat hendrerit blandit. Duis euismod lectus in eros varius, sed mattis leo posuere. In dapibus semper orci et convallis. Cras posuere dui at turpis viverra fermentum.',
    author: 'Courtney Pena, Los Angeles',
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
          price: 'Free',
          period: 'Forever',
          features: [
            {
              text: 'user',
              prefix: '1',
            },
            {
              text: 'clients',
              prefix: '2',
            },
            {
              text: 'projects',
              prefix: '5',
            },
            {
              text: 'tasks',
              prefix: 'No',
            },
            {
              text: 'subtasks',
              prefix: 'No',
            },
            {
              text: 'invoicing',
              prefix: 'No',
            },
            {
              text: 'estimating',
              prefix: 'No',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Advanced',
          price: '$25',
          period: 'per month',
          features: [
            {
              text: 'user',
              prefix: '1',
            },
            {
              text: 'clients',
              prefix: 'Unlimited',
            },
            {
              text: 'projects',
              prefix: 'Unlimited',
            },
            {
              text: 'tasks',
              prefix: 'Unlimited',
            },
            {
              text: 'subtasks',
              prefix: 'No',
            },
            {
              text: 'invoices per month',
              prefix: '10',
            },
            {
              text: 'estimates per month',
              prefix: '10',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Expert',
          price: '$99',
          period: 'per month',
          features: [
            {
              text: 'user',
              prefix: '25',
            },
            {
              text: 'clients',
              prefix: 'Unlimited',
            },
            {
              text: 'projects',
              prefix: 'Unlimited',
            },
            {
              text: 'tasks',
              prefix: 'Unlimited',
            },
            {
              text: 'subtasks',
              prefix: 'Unlimited',
            },
            {
              text: 'invoicing',
              prefix: 'Unlimited',
            },
            {
              text: 'estimating',
              prefix: 'Unlimited',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  cta: {
    title: 'Do you like what you see?',
    button: {
      label: 'Buy it on Themeforest',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    },
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
      cta: {
        text: 'Buy it on Themeforest',
        href: 'https://mypags.app',
      },
    },
  },
  copyright: '© 2020 Coffeecream Themes',
};
