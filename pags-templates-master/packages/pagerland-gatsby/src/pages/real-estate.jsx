import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
  Welcome,
  About,
  Location,
  Exterior,
  Interior,
  Surroundings,
  Gallery,
  Contact,
  SimilarProperties,
  Footer,
} from '@pagerland/themes/src/RealEstate/containers';

import preview from '@pagerland/themes/src/RealEstate/assets/preview.jpg';

import SEO from '../components/SEO';

const RealEstate = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Real Estate" />

    <Navbar />
    <Welcome name="" />
    <About name="about" />
    <Location name="location" />
    <Exterior name="exterior" />
    <Interior name="interior" />
    <Surroundings name="surroundings" />
    <Gallery name="gallery" />
    <Contact name="contact" />
    <SimilarProperties name="similar-properties" />
    <Footer name="about-us" />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: 'https://pager.land/gatsby/',
};

export default RealEstate;
