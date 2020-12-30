import { Link } from 'react-scroll';
import { smoothLinkProps } from '@pagerland/common/src/utils';

import Keyboard from '@pagerland/icons/src/line/Keyboard';
import ServerNetwork from '@pagerland/icons/src/line/ServerNetwork';
import SportFishingHook from '@pagerland/icons/src/line/SportFishingHook';
import SearchAlt from '@pagerland/icons/src/line/SearchAlt';
import BookOpen from '@pagerland/icons/src/line/BookOpen';
import LifeRing from '@pagerland/icons/src/line/LifeRing';

import * as Yup from 'yup';
import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import featureBuild from './assets/feature-build.svg';
import featureComponents from './assets/feature-components.svg';
import featureSSR from './assets/feature-ssr.svg';
import featureDependencies from './assets/feature-dependencies.svg';
import featureDeploy from './assets/feature-deploy.svg';

import ThemeforestLogo from './assets/ThemeforestLogo.svg';

export default {
  title: 'Pagerland - smooth looking and fast landing page',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'demos',
        label: 'Demos',
      },
      {
        to: 'features',
        label: 'Features',
      },
      {
        to: 'reviews',
        label: 'Reviews',
      },
      {
        to: 'support',
        label: 'Support',
      },
    ],
    actions: [
      {
        href:
          'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        label: 'Purchase',
        target: '_blank',
      },
    ],
  },
  welcome: {
    title:
      'Pagerland is offers a great, smooth looking and fast landing page templates built on Gatsby and React.',
    text:
      'Original designs crafted in Figma suits perfectly for marketing, startups and all creative needs. Pagerland main theme can be easily customized by users.',
    actions: [
      {
        as: Link,
        to: 'demos',
        label: 'View demos',
        ...smoothLinkProps,
        variant: 'secondary',
      },
      {
        as: 'a',
        href:
          'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        label: 'Buy this template',
        variant: 'primary',
        target: '_blank',
        display: {
          _: 'none',
          md: 'inline-block',
        },
      },
      {
        as: 'a',
        href:
          'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        label: 'Buy',
        variant: 'primary',
        display: {
          md: 'none',
        },
      },
    ],
  },
  demos: {
    title: 'Demos',
    text: 'View our demos for all kind of business and professionals. More demos are coming soon.',
  },
  newsletter: {
    title: 'Stay notified about new demos and features',
    text: 'Subscribe to our newsletter',
  },
  features: [
    {
      feature: {
        title: 'Build Next App with Gatsby and React',
        text:
          'You can choose version based on Gatsby.js or React.js to make sure that website loads much faster, works perfectly on mobile devices and supports all new technologies. Also Gatsby.js supports PWA (Progressive Web Applications) so you can be sure that pages based on our templates asks devices to load only the necessary data to keep browsing as smooth as it’s possible.',
        ImageProps: {
          src: featureBuild,
          parallax: {
            y: ['10%', '-20%'],
          },
        },
      },
    },
    {
      feature: {
        title: 'Styled components and styled system',
        text:
          'Pagerland uses components based on Styled Components and Styled System which allow easy editing them. All the templates are built with predefined settings that offer basic customization of colors, fonts etc. Each component has its own documentation available at Storybook.',
        ImageProps: {
          src: featureComponents,
          parallax: {
            x: ['10%', '-10%'],
          },
        },
      },
      CaptionProps: {
        maxWidth: {
          lg: 448,
        },
        order: 1,
      },
    },
    {
      feature: {
        title: 'Server-side rendering',
        text: `Pagerland based on React is fully supported by Next.js and adapted to work with SSR (Server Side Rendering) which significantly improves SEO (Search Engine Optimisation) which means you’re website will be more visible in Google search results.\n\nGatsby based version is focused on achieving the best results in Lighthouse audits which finds specific errors and shows suggestions what to improve to make your website fast and accessible for everyone. Of course Gatsby version also improves SEO results.`,
        ImageProps: {
          src: featureSSR,
          parallax: {
            y: ['10%', '-10%'],
            x: ['10%', '-10%'],
          },
        },
      },
    },
    {
      feature: {
        title: 'Always fresh React and dependencies',
        text:
          'We’re making sure that all React dependencies are up-to-date and you can always look out for free updates. It’s our priority to keep up with the newest technologies and provide technical debt free themes.',
        ImageProps: {
          src: featureDependencies,
          parallax: {
            x: ['-10%', '10%'],
          },
        },
      },
      CaptionProps: {
        maxWidth: {
          lg: 448,
        },
        order: 1,
      },
    },
    {
      feature: {
        title: 'Prepared to easy deploy with Now.sh',
        text:
          'Our templates are build on non-modified Next.JS or Gatsby, ready to work with Now.sh platform which is offering basic and more advanced website / landing page maintenance plans.\n\nOf course our templates are 100% compatible with other platforms like Firebase, Heroku, AWS, GCloud and more.',
        ImageProps: {
          src: featureDeploy,
          parallax: {
            y: ['-10%', '20%'],
          },
        },
      },
    },
  ],
  additionalFeatures: {
    title: 'Other great features',
    features: [
      {
        icon: Keyboard,
        title: 'CLI',
        text:
          'Thanks to dedicated CLI (Command Line Interface), building template with specific architecture is even simpler, all you have to do is choose from available options.',
      },
      {
        icon: SportFishingHook,
        title: 'React hooks',
        text:
          'We’re using only newest solutions to keep our themes up-to-date with recent trends. One of them is using React Hooks which are easy to implement, intuitive and backwards compatible.',
      },
      {
        icon: SearchAlt,
        title: 'SEO friendly',
        text:
          'Using Gatsby or Next.js with SSR support significantly affects improvement in SEO and making website more visible in Google searching results.',
      },
      {
        icon: LifeRing,
        title: 'Envato Elite Support',
        text:
          'We’re group of professionals offering high-end products with friendly approach to customer service. We’re trying our best to provide fast and reliable support any time you need it. You can count on us!',
      },
      {
        icon: ServerNetwork,
        title: 'Monorepo support',
        text:
          'Because of using Yarn Workspaces it’s much easier to optimize project and avoid dependencies conflicts by splitting files in smaller packages.',
      },
      {
        icon: BookOpen,
        title: 'Well documented',
        text:
          'All UI components used by Pagerland themes has full documentation and examples available on Storybook.',
      },
    ],
  },
  reviews: {
    title: 'Customer reviews',
    reviews: [
      {
        rate: 5,
        avatar: {
          src: ThemeforestLogo,
        },
        author: 'ramisweyri',
        company: 'Themeforest customer',
        text: textToMultiline`Great design worth 10/10, I am very impressed.`,
      },
      {
        rate: 5,
        avatar: {
          src: ThemeforestLogo,
        },
        author: 'jenslg',
        company: 'Themeforest customer',
        text: textToMultiline`This is definitely worth more than the selling price. EXTREMLY good designs and code. 11/10 will buy from you again, :)`,
      },
      {
        rate: 5,
        avatar: {
          src: ThemeforestLogo,
        },
        author: 'djionang',
        company: 'Themeforest customer',
        text: textToMultiline`For a developer or team looking for a nice and flexible landing page solution, this is the SOLUTION. The CLI tool and how the project is built is fantastic.

Really nice work.`,
      },
      {
        rate: 5,
        avatar: {
          src: ThemeforestLogo,
        },
        author: 'pietrzykeu',
        company: 'Themeforest customer',
        text: textToMultiline`As usual, very nice design! Not the first time when I purchase from you and you may be sure it’s not the last time.
React wasn’t my thing. Till today. With your documentation it was very easy to run it!
Good job gents!`,
      },
      {
        rate: 5,
        avatar: {
          src: ThemeforestLogo,
        },
        author: 'elokot',
        company: 'Themeforest customer',
        text: textToMultiline`As a professional React developer, I was worried about the code quality and customizability. After purchasing I was pleasantly surprised how good everything is done. Without any problems, I've connected my Contentful API and pushed Gatsby version to Now.sh. I will be waiting for updates to using those themes for my next projects.
And one thing I would like to add to about CLI tools - I have never seen solution like this but it's awesome. I'm sure thanks to this everyone, even someone which isn't react specialist, will be able to create own website. Good job!`,
      },
      {
        rate: 5,
        avatar: {
          src: ThemeforestLogo,
        },
        author: 'Themico',
        company: 'Themeforest customer',
        text: `I bought this theme for my startup company. Main reasons why I chose it is support for Gatsby and Styled Components. I'm not a pro react developer, I just have basic knowledge, but without any problems, I adjusted this theme to my requirements and easily created website for my startup which has awesome lighthouse score. The really good thing is CLI tool which is super simple to use and you don't have to manually copy files to your project, but with one command and few answers, you will have 100% working copy with selected theme and platform.`,
      },
    ],
    button: {
      text: 'Read all reviews',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/reviews/26548567',
    },
  },
  buyCta: {
    title: 'Buy Pagerland on ThemeForest for $19',
    text:
      'Landpager Gatsby and React Landing page template is sold exclusively on Envato Marketplace ThemeForest.',
    cta: {
      text: 'Buy it for $19',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    },
  },
  support: {
    title: 'Support',
    text: 'Reliable and reassuring, it’s a comfort to know we’re always here to help you.',
    faq: {
      title: 'Frequently asked questions',
      text: 'Answers for most popular questions',
      options: [
        {
          title: 'How can I deploy Landpager Gatsby and React Landing Page?',
          text:
            'We have made the deployment process clean and simple. You can deploy the landing pages with firebase and Now.sh with some easy process. We have provided support for that.',
        },
        {
          title: 'How can I get the customer support?',
          text:
            'Simply fill out the form or go to https://coffeecream.freshdesk.com/ and create new ticket.',
        },
        {
          title: 'Will you regularly give updates of Landpager Gatsby and React Landing Page?',
          text:
            'Yes, we work on improvements and keep our templates up to date. We fix any bugs found by us or our customers. You are welcome to send us a message if you find something wrong.',
        },
        {
          title: 'Where is the data coming from?',
          text: textToMultiline`In both Gatsby and Next.JS versions data, is a kind of hardcoded, but it isn’t hardcoded directly in containers, but all content is maintained in separate files and passed to containers via default props.

Thanks to that you can easily adjust Gatsby or Next.JS version to your preferences and attach to it whatever data source what you want to use. It can be done by overwriting props in pages which are using containers, changing default props directly in containers or you can change directly in the source code of containers the content to omit using props for maintaining data. So themes are very flexible.`,
        },
      ],
    },
    mailer: {
      title: 'Got more questions?',
      text: 'Send us a message',
      sendButtonText: 'Send message',
      successMessage: 'Thank you for creating ticket. We will response as soon as possible.',
      errorMessage: 'An error occurred. Can&apos;t create a ticket now. Please retry later.',
    },
    form: {
      validationSchema: Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        message: Yup.string().required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'name',
          label: 'Name',
          placeholder: 'ie. John Doe',
          initialValue: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'ie. john.doe@email.com',
          type: 'email',
          initialValue: '',
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
  copyright: '© 2020 Coffeecream Themes',
};
