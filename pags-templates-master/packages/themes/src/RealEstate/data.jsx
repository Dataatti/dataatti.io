import React from 'react';

import WebGrid from '@pagerland/icons/src/line/WebGrid';
import BedDouble from '@pagerland/icons/src/line/BedDouble';
import Bath from '@pagerland/icons/src/line/Bath';
import CarSideview from '@pagerland/icons/src/line/CarSideview';
import Plane from '@pagerland/icons/src/line/Plane';
import TrainTunnel from '@pagerland/icons/src/line/TrainTunnel';
import ShoppingBag from '@pagerland/icons/src/line/ShoppingBag';
import Bus from '@pagerland/icons/src/line/Bus';
import Metro from '@pagerland/icons/src/line/Metro';
import Beach from '@pagerland/icons/src/line/Beach';
import Trees from '@pagerland/icons/src/line/Trees';
import Flag from '@pagerland/icons/src/line/Flag';
import User from '@pagerland/icons/src/line/User';
import Building from '@pagerland/icons/src/line/Building';
import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Twitter from '@pagerland/icons/src/line/TwitterAlt';
import Linkedin from '@pagerland/icons/src/line/LinkedinAlt';
import TagAlt from '@pagerland/icons/src/line/TagAlt';
import ThumbsUp from '@pagerland/icons/src/line/ThumbsUp';
import ShieldCheck from '@pagerland/icons/src/line/ShieldCheck';
import Award from '@pagerland/icons/src/line/Award';
import Youtube from '@pagerland/icons/src/line/Youtube';

import Icon from '@pagerland/common/src/components/Icon';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import * as Yup from 'yup';
import background from './assets/header-photo.jpg';
import background2x from './assets/header-photo@2x.jpg';

import about1 from './assets/about/about-1.jpg';
import aboutLarge1 from './assets/about/about-huge-1.jpg';
import about12x from './assets/about/about-1@2x.jpg';
import about2 from './assets/about/about-2.jpg';
import aboutLarge2 from './assets/about/about-huge-2.jpg';
import about22x from './assets/about/about-2@2x.jpg';
import about3 from './assets/about/about-3.jpg';
import aboutLarge3 from './assets/about/about-huge-3.jpg';
import about32x from './assets/about/about-3@2x.jpg';

import exterior1 from './assets/exteriors/exterior-1.jpg';
import exterior12x from './assets/exteriors/exterior-1@2x.jpg';
import exterior2 from './assets/exteriors/exterior-2.jpg';
import exterior22x from './assets/exteriors/exterior-2@2x.jpg';

import interior1 from './assets/interiors/interior-1.jpg';
import interior12x from './assets/interiors/interior-1@2x.jpg';
import interior2 from './assets/interiors/interior-2.jpg';
import interior22x from './assets/interiors/interior-2@2x.jpg';

import surrounding1 from './assets/surroundings/surroundings-1.jpg';
import surrounding12x from './assets/surroundings/surroundings-1@2x.jpg';
import surrounding2 from './assets/surroundings/surroundings-2.jpg';
import surrounding22x from './assets/surroundings/surroundings-2@2x.jpg';
import surrounding3 from './assets/surroundings/surroundings-3.jpg';
import surrounding32x from './assets/surroundings/surroundings-3@2x.jpg';

import gallery1 from './assets/gallery/gallery-1.jpg';
import gallery2 from './assets/gallery/gallery-2.jpg';
import gallery3 from './assets/gallery/gallery-3.jpg';
import gallery4 from './assets/gallery/gallery-4.jpg';
import gallery5 from './assets/gallery/gallery-5.jpg';
import gallery6 from './assets/gallery/gallery-6.jpg';
import gallery7 from './assets/gallery/gallery-7.jpg';
import gallery8 from './assets/gallery/gallery-8.jpg';
import gallery9 from './assets/gallery/gallery-9.jpg';
import gallery10 from './assets/gallery/gallery-10.jpg';
import gallery11 from './assets/gallery/gallery-11.jpg';
import gallery12 from './assets/gallery/gallery-12.jpg';
import gallery13 from './assets/gallery/gallery-13.jpg';
import gallery14 from './assets/gallery/gallery-14.jpg';
import gallery15 from './assets/gallery/gallery-15.jpg';
import gallery1Thumbnail from './assets/gallery/thumbnails/gallery-1.jpg';
import gallery12xThumbnail from './assets/gallery/thumbnails/gallery-1@2x.jpg';
import gallery2Thumbnail from './assets/gallery/thumbnails/gallery-2.jpg';
import gallery22xThumbnail from './assets/gallery/thumbnails/gallery-2@2x.jpg';
import gallery3Thumbnail from './assets/gallery/thumbnails/gallery-3.jpg';
import gallery32xThumbnail from './assets/gallery/thumbnails/gallery-3@2x.jpg';
import gallery4Thumbnail from './assets/gallery/thumbnails/gallery-4.jpg';
import gallery42xThumbnail from './assets/gallery/thumbnails/gallery-4@2x.jpg';
import gallery5Thumbnail from './assets/gallery/thumbnails/gallery-5.jpg';
import gallery52xThumbnail from './assets/gallery/thumbnails/gallery-5@2x.jpg';
import gallery6Thumbnail from './assets/gallery/thumbnails/gallery-6.jpg';
import gallery62xThumbnail from './assets/gallery/thumbnails/gallery-6@2x.jpg';
import gallery7Thumbnail from './assets/gallery/thumbnails/gallery-7.jpg';
import gallery72xThumbnail from './assets/gallery/thumbnails/gallery-7@2x.jpg';
import gallery8Thumbnail from './assets/gallery/thumbnails/gallery-8.jpg';
import gallery82xThumbnail from './assets/gallery/thumbnails/gallery-8@2x.jpg';
import gallery9Thumbnail from './assets/gallery/thumbnails/gallery-9.jpg';
import gallery92xThumbnail from './assets/gallery/thumbnails/gallery-9@2x.jpg';
import gallery10Thumbnail from './assets/gallery/thumbnails/gallery-10.jpg';
import gallery102xThumbnail from './assets/gallery/thumbnails/gallery-10@2x.jpg';
import gallery11Thumbnail from './assets/gallery/thumbnails/gallery-11.jpg';
import gallery112xThumbnail from './assets/gallery/thumbnails/gallery-11@2x.jpg';
import gallery12Thumbnail from './assets/gallery/thumbnails/gallery-12.jpg';
import gallery122xThumbnail from './assets/gallery/thumbnails/gallery-12@2x.jpg';
import gallery13Thumbnail from './assets/gallery/thumbnails/gallery-13.jpg';
import gallery132xThumbnail from './assets/gallery/thumbnails/gallery-13@2x.jpg';
import gallery14Thumbnail from './assets/gallery/thumbnails/gallery-14.jpg';
import gallery142xThumbnail from './assets/gallery/thumbnails/gallery-14@2x.jpg';
import gallery15Thumbnail from './assets/gallery/thumbnails/gallery-15.jpg';
import gallery152xThumbnail from './assets/gallery/thumbnails/gallery-15@2x.jpg';

import property1 from './assets/similar-properties/property-1.jpg';
import property12x from './assets/similar-properties/property-1@2x.jpg';
import property2 from './assets/similar-properties/property-2.jpg';
import property22x from './assets/similar-properties/property-2@2x.jpg';
import property3 from './assets/similar-properties/property-3.jpg';
import property32x from './assets/similar-properties/property-3@2x.jpg';

import contactImg from './assets/contact.jpg';
import contactImg2x from './assets/contact@2x.jpg';

export default {
  title: 'Real Estate',
  navbar: {
    links: [
      {
        to: '',
        'data-to': '',
        label: 'Home',
      },
      {
        to: 'about',
        'data-to': 'about',
        label: 'About',
      },
      {
        to: 'location',
        'data-to': 'location',
        label: 'Location',
      },
      {
        to: 'exterior',
        'data-to': 'exterior',
        label: 'Exterior',
      },
      {
        to: 'interior',
        'data-to': 'interior',
        label: 'Interior',
      },
      {
        to: 'surroundings',
        'data-to': 'surroundings',
        label: 'Surroundings',
      },
      {
        to: 'gallery',
        'data-to': 'gallery',
        label: 'Gallery',
      },
      {
        to: 'contact',
        'data-to': 'contact',
        label: 'Contact',
      },
    ],
    actions: [
      {
        href:
          'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        label: 'Buy theme',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: 'Real Estate',
    },
    title: 'Beautiful modern villa in sunny California',
    price: '$2,400,000',
    features: [
      {
        IconProps: {
          icon: WebGrid,
        },
        title: '5 800 sq. ft.',
      },
      {
        IconProps: {
          icon: BedDouble,
        },
        title: '7 bedrooms',
      },
      {
        IconProps: {
          icon: Bath,
        },
        title: '4 bathrooms',
      },
      {
        IconProps: {
          icon: CarSideview,
        },
        title: '2 cars garage',
      },
    ],
    cta: {
      to: 'about',
      children: 'Learn more',
    },
  },
  about: {
    title: 'We introduce you a beautiful and bright and sunny house designed by Leonardo Piazzo',
    text:
      'Integer vulputate turpis nisl, non auctor sapien accumsan semper. Praesent in pulvinar nisl. Nullam turpis sem, commodo vel congue accumsan, finibus ut nulla. Nunc a efficitur massa. Nulla viverra tincidunt felis, vel sodales metus maximus et. Suspendisse potenti. Donec tincidunt leo nisi, vitae rhoncus neque accumsan vitae.',
    gallery: [
      {
        source: aboutLarge1,
        ImgProps: {
          src: about1,
          srcSet: `${about1} 1x, ${about12x} 2x`,
        },
      },
      {
        source: aboutLarge2,
        ImgProps: {
          src: about2,
          srcSet: `${about2} 1x, ${about22x} 2x`,
        },
      },
      {
        source: aboutLarge3,
        ImgProps: {
          src: about3,
          srcSet: `${about3} 1x, ${about32x} 2x`,
        },
      },
    ],
  },
  location: {
    title: textToMultiline`Incredible location.\nSo close to all ammenities.`,
    text:
      'Integer vulputate turpis nisl, non auctor sapien accumsan semper. Praesent in pulvinar nisl. Nullam turpis sem, commodo vel congue accumsan, finibus ut nulla. Nunc a efficitur massa. Nulla viverra tincidunt felis, vel sodales metus maximus et. Suspendisse potenti. Donec tincidunt leo nisi, vitae rhoncus neque accumsan vitae.',
    counters: [
      {
        IconProps: {
          icon: Plane,
        },
        title: 'Airport',
        counter: {
          value: 67,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: TrainTunnel,
        },
        title: 'Train station',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: ShoppingBag,
        },
        title: 'Shopping Centre',
        counter: {
          value: 12,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Bus,
        },
        title: 'Bus Stop',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Metro,
        },
        title: 'Subway',
        counter: {
          value: 18,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Beach,
        },
        title: 'Beach',
        counter: {
          value: 800,
          unit: 'm',
        },
      },
      {
        IconProps: {
          icon: Trees,
        },
        title: 'Park',
        counter: {
          value: 1,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Flag,
        },
        title: 'Golf course',
        counter: {
          value: 3,
          unit: 'km',
        },
      },
    ],
    map: {
      cords: {
        lat: 37.550705,
        lng: -121.980674,
      },
    },
  },
  exterior: {
    sections: [
      {
        ImgProps: {
          src: exterior1,
          srcSet: `${exterior1} 1x, ${exterior12x} 2x`,
        },
        title: 'Modern an minimalistic exterior design',
        text:
          'Vestibulum sit amet consequat lacus. Nulla dapibus dignissim massa, quis mattis ante tempor in. Morbi mollis nibh dictum, eleifend tellus quis, lobortis ex. Donec tempor, massa in consequat pellentesque, nunc arcu tempus ex, nec accumsan sem augue eget urna.',
      },
      {
        ImgProps: {
          src: exterior2,
          srcSet: `${exterior2} 1x, ${exterior22x} 2x`,
        },
        title: 'Pure harmony between space and function',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus. In consectetur velit est.',
      },
    ],
  },
  interior: {
    sections: [
      {
        slides: [
          {
            src: interior2,
            srcSet: `${interior2} 1x, ${interior22x} 2x`,
          },
          {
            src: interior2,
            srcSet: `${interior2} 1x, ${interior22x} 2x`,
          },
          {
            src: interior2,
            srcSet: `${interior2} 1x, ${interior22x} 2x`,
          },
          {
            src: interior2,
            srcSet: `${interior2} 1x, ${interior22x} 2x`,
          },
          {
            src: interior2,
            srcSet: `${interior2} 1x, ${interior22x} 2x`,
          },
        ],
        title: 'Amazing living and dining room',
        text:
          'Vestibulum sed elit id mauris tempus feugiat vel vitae neque. Integer eleifend est orci, quis convallis sem malesuada id. Phasellus fringilla urna vitae lobortis auctor. Vivamus sed nisi non nulla tincidunt ultricies a non ex. Praesent commodo dui enim, at volutpat lectus aliquet ut.',
      },
      {
        slides: [
          {
            src: interior1,
            srcSet: `${interior1} 1x, ${interior12x} 2x`,
          },
          {
            src: interior1,
            srcSet: `${interior1} 1x, ${interior12x} 2x`,
          },
          {
            src: interior1,
            srcSet: `${interior1} 1x, ${interior12x} 2x`,
          },
          {
            src: interior1,
            srcSet: `${interior1} 1x, ${interior12x} 2x`,
          },
          {
            src: interior1,
            srcSet: `${interior1} 1x, ${interior12x} 2x`,
          },
        ],
        title: 'Beautiful bedrooms',
        text:
          'Vestibulum sed elit id mauris tempus feugiat vel vitae neque. Integer eleifend est orci, quis convallis sem malesuada id. Phasellus fringilla urna vitae lobortis auctor. Vivamus sed nisi non nulla tincidunt ultricies a non ex. Praesent commodo dui enim, at volutpat lectus aliquet ut.',
      },
    ],
  },
  surroundings: {
    sections: [
      {
        ImgProps: {
          src: surrounding1,
          srcSet: `${surrounding1} 1x, ${surrounding12x} 2x`,
        },
        title: 'Only few minutes driving to a shopping mall',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
      },
      {
        ImgProps: {
          src: surrounding2,
          srcSet: `${surrounding2} 1x, ${surrounding22x} 2x`,
        },
        title: 'One of the best primary school and high school in the city',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
      },
      {
        ImgProps: {
          src: surrounding3,
          srcSet: `${surrounding3} 1x, ${surrounding32x} 2x`,
        },
        title: 'Walking distance to the park with sport and recreation areas',
        text:
          'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
      },
    ],
  },
  gallery: {
    photos: [
      {
        source: gallery1,
        ImgProps: {
          src: gallery1Thumbnail,
          srcSet: `${gallery1Thumbnail} 1x, ${gallery12xThumbnail} 2x`,
        },
      },
      {
        source: gallery2,
        ImgProps: {
          src: gallery2Thumbnail,
          srcSet: `${gallery2Thumbnail} 1x, ${gallery22xThumbnail} 2x`,
        },
      },
      {
        source: gallery3,
        ImgProps: {
          src: gallery3Thumbnail,
          srcSet: `${gallery3Thumbnail} 1x, ${gallery32xThumbnail} 2x`,
        },
      },
      {
        source: gallery4,
        ImgProps: {
          src: gallery4Thumbnail,
          srcSet: `${gallery4Thumbnail} 1x, ${gallery42xThumbnail} 2x`,
        },
      },
      {
        source: gallery5,
        ImgProps: {
          src: gallery5Thumbnail,
          srcSet: `${gallery5Thumbnail} 1x, ${gallery52xThumbnail} 2x`,
        },
      },
      {
        source: gallery6,
        ImgProps: {
          src: gallery6Thumbnail,
          srcSet: `${gallery6Thumbnail} 1x, ${gallery62xThumbnail} 2x`,
        },
      },
      {
        source: gallery7,
        ImgProps: {
          src: gallery7Thumbnail,
          srcSet: `${gallery7Thumbnail} 1x, ${gallery72xThumbnail} 2x`,
        },
      },
      {
        source: gallery8,
        ImgProps: {
          src: gallery8Thumbnail,
          srcSet: `${gallery8Thumbnail} 1x, ${gallery82xThumbnail} 2x`,
        },
      },
      {
        source: gallery9,
        ImgProps: {
          src: gallery9Thumbnail,
          srcSet: `${gallery9Thumbnail} 1x, ${gallery92xThumbnail} 2x`,
        },
      },
      {
        source: gallery10,
        ImgProps: {
          src: gallery10Thumbnail,
          srcSet: `${gallery10Thumbnail} 1x, ${gallery102xThumbnail} 2x`,
        },
      },
      {
        source: gallery11,
        ImgProps: {
          src: gallery11Thumbnail,
          srcSet: `${gallery11Thumbnail} 1x, ${gallery112xThumbnail} 2x`,
        },
      },
      {
        source: gallery12,
        ImgProps: {
          src: gallery12Thumbnail,
          srcSet: `${gallery12Thumbnail} 1x, ${gallery122xThumbnail} 2x`,
        },
      },
      {
        source: gallery13,
        ImgProps: {
          src: gallery13Thumbnail,
          srcSet: `${gallery13Thumbnail} 1x, ${gallery132xThumbnail} 2x`,
        },
      },
      {
        source: gallery14,
        ImgProps: {
          src: gallery14Thumbnail,
          srcSet: `${gallery14Thumbnail} 1x, ${gallery142xThumbnail} 2x`,
        },
      },
      {
        source: gallery15,
        ImgProps: {
          src: gallery15Thumbnail,
          srcSet: `${gallery15Thumbnail} 1x, ${gallery152xThumbnail} 2x`,
        },
      },
    ],
  },
  contact: {
    title: 'Contact',
    thumbnail: {
      src: contactImg,
      srcSet: `${contactImg} 1x, ${contactImg2x} 2x`,
    },
    details: {
      title: 'Contact Andrea Colman to organise a viewing',
      text:
        'Andrea Colman is one of our top agents. She has 10 years of experience in California real estate market and sold estates of total value of $32,000,000.',
      info: [
        {
          icon: User,
          text: 'Andrea Colman',
        },
        {
          icon: Building,
          text: 'California Real Estates',
        },
        {
          icon: MapMarker,
          text: textToMultiline`693 Woodland St.\nSan Francisco, CA 94110`,
        },
        {
          icon: Phone,
          text: '+1 234 567 890',
        },
        {
          icon: Envelope,
          text: 'andrea@californiarealestates.com',
        },
      ],
      socialLinks: [
        {
          icon: FacebookF,
          href: 'https://mypags.app',
          title: 'Facebook',
        },
        {
          icon: Twitter,
          href: 'https://mypags.app',
          title: 'Twitter',
        },
        {
          icon: Instagram,
          href: 'https://mypags.app',
          title: 'Instagram',
        },
        {
          icon: Linkedin,
          href: 'https://mypags.app',
          title: 'Linkedin',
        },
      ],
    },
    form: {
      title: 'Send me a message and I will call you back',
      sendButtonText: 'Send',
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
          label: 'First name',
          placeholder: 'ie. John Doe',
          initialValue: '',
          prefix: <Icon icon={User} />,
        },
        {
          name: 'phone',
          label: 'Phone',
          placeholder: 'ie. 555-678-123',
          initialValue: '',
          prefix: <Icon icon={Phone} />,
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'ie. john.doe@email.com',
          type: 'email',
          initialValue: '',
          prefix: <Icon icon={Envelope} />,
        },
        {
          name: 'message',
          label: 'Message',
          placeholder: 'Start typing here...',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  similarProperties: {
    title: 'Similar properties',
    properties: [
      {
        ImgProps: {
          src: property1,
          srcSet: `${property1} 1x, ${property12x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
        title: 'Villa with two terraces, swimming pool and beauitiful garden',
        price: '$3,450,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '3 400 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '5 bedrooms',
          },
          {
            IconProps: {
              icon: Bath,
            },
            title: '3 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
      {
        ImgProps: {
          src: property2,
          srcSet: `${property2} 1x, ${property22x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
        title: 'Classic spanish style house with amazin mountains view',
        price: '$2,780,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '4 200 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '6 bedrooms',
          },
          {
            IconProps: {
              icon: Bath,
            },
            title: '4 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
      {
        ImgProps: {
          src: property3,
          srcSet: `${property3} 1x, ${property32x} 2x`,
        },
        LinkProps: {
          as: 'a',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
        title: 'Completely renovated ground floor villa with swimming pool',
        price: '$1,950,000',
        features: [
          {
            IconProps: {
              icon: WebGrid,
            },
            title: '2 800 sq. ft.',
          },
          {
            IconProps: {
              icon: BedDouble,
            },
            title: '4 bedrooms',
          },
          {
            IconProps: {
              icon: Bath,
            },
            title: '3 bathrooms',
          },
          {
            IconProps: {
              icon: CarSideview,
            },
            title: '2 cars garage',
          },
        ],
      },
    ],
  },
  footer: {
    title: 'About California Real Estates',
    text: textToMultiline`Cras sollicitudin erat sit amet egestas consequat. Quisque in purus sem. Integer condimentum nulla vel velit pretium, eget fringilla enim sodales. Nullam sit amet leo vitae mi laoreet varius eu vel est.\n\nMaecenas non lectus tincidunt, sodales leo pulvinar, condimentum urna. Fusce sed dui nec tortor tincidunt ultricies. Proin at convallis felis, sit amet varius velit.`,
    cta: {
      as: 'a',
      label: 'Learn more',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    },
    features: [
      {
        IconProps: {
          icon: TagAlt,
        },
        title: 'Best price on the market',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ThumbsUp,
        },
        title: 'Satisfaction guarantee',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ShieldCheck,
        },
        title: 'Safety policy',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: Award,
        },
        title: 'Award winning company',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://mypags.app',
        title: 'Facebook',
      },
      {
        icon: Twitter,
        href: 'https://mypags.app',
        title: 'Twitter',
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
      {
        icon: Linkedin,
        href: 'https://mypags.app',
        title: 'Linkedin',
      },
    ],
  },
  copyright: '© 2020 Coffeecream Themes',
};
