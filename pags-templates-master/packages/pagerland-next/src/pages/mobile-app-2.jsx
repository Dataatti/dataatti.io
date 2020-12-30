import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Sticky from 'react-sticky-el';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/MobileApp';
import {
  Navbar,
  Copyright,
  Footer,
  Welcome,
  About,
  Features,
  Screenshots,
  Clients,
  Pricing,
  Newsletter,
} from '@pagerland/themes/src/MobileApp/containers';
import Feature from '@pagerland/themes/src/MobileApp/containers/Features/Feature';
import Liquid from '@pagerland/themes/src/MobileApp/components/Liquids/C';

import data from '@pagerland/themes/src/MobileApp/data';

import preview from '@pagerland/themes/src/MobileApp/assets/preview.png';
import phoneImg from '@pagerland/themes/src/MobileApp/assets/Phones-B.png';
import phoneImg2x from '@pagerland/themes/src/MobileApp/assets/Phones-B@2x.png';

import SEO from '../components/SEO';

const Landing1 = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Mobile App" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar
        links={[
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
            to: 'newsletter',
            label: 'Newsletter',
          },
        ]}
      />
    </Sticky>

    <Welcome
      name=""
      PhoneImgProps={{
        ...Welcome.defaultProps.PhoneImgProps,
        src: phoneImg,
        srcSet: `${phoneImg} 1x, ${phoneImg2x} 2x`,
        width: '193.8622754491%',
        left: '-68.8622754491%',
        top: '-9.4527363184%',
      }}
      WrapperProps={{
        overflow: 'hidden',
        marginBottom: {
          _: -110,
          lg: -120,
        },
      }}
      LiquidComponent={Liquid}
      LiquidProps={{
        ...Welcome.defaultProps.LiquidProps,
        width: '172.3053892216%',
        left: 0,
        top: 0,
      }}
    />
    <About
      name="about"
      CardProps={{ ...About.defaultProps.CardProps, background: 'none', p: 0, boxShadow: 'none' }}
      FeaturesGridProps={{
        ...About.defaultProps.FeaturesGridProps,
        maxWidth: 1110,
        mx: 'auto',
        gridGap: '90px',
      }}
    />
    <Features
      name="features"
      features={[
        {
          feature: data.features[3],
          chunkLength: 3,
          GridProps: {
            gridTemplateAreas: {
              _: '"caption" "photo" "features" "additional-features"',
              lg: '"caption caption caption" "features photo additional-features"',
            },
            gridColumnGap: '30px',
            gridRowGap: '50px',
            gridTemplateColumns: {
              _: '1fr',
              lg: '1fr 375px 1fr',
            },
          },
          CaptionProps: {
            ...Feature.defaultProps.CaptionProps,
            maxWidth: '770px',
            justifySelf: 'center',
            textAlign: 'center',
          },
          TextProps: {
            variant: 'body1',
            color: 'gray.1',
          },
          ListProps: {
            gridArea: 'features',
            alignSelf: 'center',
            textAlign: {
              _: 'left',
              lg: 'right',
            },
          },
          AdditionalListProps: {
            gridArea: 'additional-features',
            textAlign: 'left',
          },
        },
        {
          ...Features.defaultProps.features[2],
          CaptionProps: {
            order: 1,
            mb: 80,
            flex: {
              _: '0 0 1',
              lg: '0 0 340px',
            },
          },
          GridProps: {
            gridTemplateAreas: {
              _: '"caption" "features"',
              lg: '"features caption"',
            },
            gridColumnGap: '60px',
            gridTemplateColumns: {
              _: '1fr',
              lg: 'auto 340px',
            },
            alignItems: 'center',
          },
        },
      ]}
    />
    <Screenshots name="screens" />
    <Clients
      name="clients"
      LiquidProps={{
        display: 'none',
      }}
      InnerProps={{ ...Clients.defaultProps.InnerProps, ml: 'auto', mr: 'auto', my: 0 }}
      TitleProps={{
        ...Clients.defaultProps.TitleProps,
        textAlign: 'center',
        mb: {
          _: 0,
          lg: 50,
        },
      }}
      AvatarProps={{
        ...Clients.defaultProps.AvatarProps,
        fancy: true,
        mt: {
          _: 60,
          lg: -3,
        },
        ml: {
          _: 'auto',
          lg: 0,
        },
        mr: {
          _: 'auto',
          lg: 84,
        },
      }}
      SlideProps={{ ...Clients.defaultProps.SlideProps, pb: 4, pt: 60, mx: 'auto', maxWidth: 970 }}
    />
    <Pricing
      name="pricing"
      useRadios
      text="Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi."
      GridProps={{
        gridTemplateAreas: {
          _: '"caption" "switch" "cards"',
          lg:
            '"spacer empty cards spacer2" "spacer caption cards spacer2" "spacer switch cards spacer2" "spacer empty2 cards spacer2"',
        },
        gridTemplateRows: {
          _: 'auto auto auto',
          lg: '1fr auto auto 1fr',
        },
        gridTemplateColumns: {
          _: '1fr',
          lg: '1fr 370px 630px 1fr',
        },
        gridRowGap: '30px',
        gridColumnGap: '30px',
      }}
      CaptionProps={{
        ...Pricing.defaultProps.CaptionProps,
        textAlign: 'left',
        mr: {
          _: 'auto',
          lg: 30,
        },
      }}
      SwitchWrapperProps={{
        ...Pricing.defaultProps.SwitchWrapperProps,
        justifyContent: 'flex-start',
      }}
      prices={{
        ...data.pricing.prices,
        sections: [
          {
            title: 'Beginner',
            price: {
              a: '$3',
              b: '$30',
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
              text: 'Choose beginner',
              ButtonProps: {
                as: 'a',
                href: 'https://mypags.app',
              },
            },
          },
          {
            title: 'Professional',
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
                check: true,
              },
              {
                text: 'Fusce quis vestibulum',
                check: true,
              },
            ],
            button: {
              text: 'Choose professional',
              ButtonProps: {
                as: 'a',
                href: 'https://mypags.app',
              },
            },
          },
        ],
      }}
      sections={[...Pricing.defaultProps.sections.slice(1, 3)]}
    />

    <Newsletter name="newsletter" />
    <Footer />
    <Copyright />
  </Theme>
);

Landing1.propTypes = {
  url: PropTypes.string,
};

Landing1.defaultProps = {
  url: 'https://pager.land/next/',
};

export default Landing1;
