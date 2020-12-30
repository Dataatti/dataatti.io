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
  FAQ,
  Pricing,
  Contact,
} from '@pagerland/themes/src/MobileApp/containers';

import preview from '@pagerland/themes/src/MobileApp/assets/preview.png';

import SEO from '../components/SEO';
import Corporate from './corporate';

const Landing1 = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Mobile App" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>

    <Welcome name="" />
    <About name="about" />
    <Features name="features" />
    <Screenshots name="screens" />
    <Clients name="clients" />
    <FAQ name="support" />
    <Pricing name="pricing" />
    <Contact name="contact" />

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
