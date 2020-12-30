import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Sticky from 'react-sticky-el';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/WebApp';
import {
  Navbar,
  Copyright,
  Footer,
  Welcome,
  Brands,
  About,
  Features,
  Screenshots,
  Clients,
  Pricing,
  Cta,
} from '@pagerland/themes/src/WebApp/containers';

import preview from '@pagerland/themes/src/WebApp/assets/preview.png';

import SEO from '../components/SEO';
import Startup from './startup';

const WebApp = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Web App" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>

    <Welcome name="" />
    <Brands name="" />
    <About name="about" />
    <Features name="features" />
    <Screenshots name="screens" />
    <Clients name="clients" />
    <Pricing name="pricing" />
    <Cta />

    <Footer name="contact" />
    <Copyright />
  </Theme>
);

WebApp.propTypes = {
  url: PropTypes.string,
};

WebApp.defaultProps = {
  url: 'https://pager.land/next/',
};

export default WebApp;
