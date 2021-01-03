import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Image from 'next/image';

import Sticky from 'react-sticky-el';

import Theme, { theme } from '@pagerland/themes/src/Startup';
import {
  Navbar,
  Copyright,
  Welcome,
  Services,
  About,
  Team,
  Pricing,
  Blog,
  Contact,
} from '@pagerland/themes/src/Startup/containers';

import preview from '@pagerland/themes/src/Startup/assets/preview.jpg';

import SEO from '../components/SEO';

import { createClient } from 'contentful';

import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

// 52qlh6k2p2ly
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "52qlh6k2p2ly",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "SvsZP-sQaZK1v-v3so-iuvBmrMMGTy82Q0VBPXfMzUQ"
});

const Logo = props => <Image src="/logo.svg" alt="dataatti logo" width="150px" height="50px" {...props} />;

const Startup = ({ url, entries }) => {
  return (
    <Theme>
      <Head>
        <link href={theme.typography.googleFont} rel="stylesheet" />
        <meta name="theme-color" content={theme.colors.primary} />
        <meta property="og:image" content={`${url}${preview}`} />
      </Head>
      <SEO title="Dataatti.io" />

      <Sticky style={{ zIndex: 999, position: 'relative' }}>
        <Navbar Logo={Logo} actions={[]} />
      </Sticky>

      <Welcome name="" title={entries.fields.headline} text={entries.fields.headerText} />
      <Services name="services" />
      <About name="about" />
      <Team name="team" />
      <Contact name="contact" />
    </Theme>
  )
};

export async function getStaticProps() {

  // Add contentfull requests here
  try {
    const entries = await client
      .getEntry({
        content_type: "pageHome"
      })

    return {
      props: {
        entries: entries,
      }
    }
  } catch (err) {
    console.warn(err);

    return {
      props: {
        entries: null,
      }
    }
  }
}

Startup.propTypes = {
  url: PropTypes.string,
};

Startup.defaultProps = {
  url: 'https://pager.land/next/',
};

export default Startup;
