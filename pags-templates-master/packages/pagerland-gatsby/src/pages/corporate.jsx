import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/Corporate';
import {
  Navbar,
  Welcome,
  Offer,
  Goals,
  Mission,
  Cta,
  Team,
  Testimonials,
  Pricing,
  Copyright,
  Newsletter,
  Contact,
} from '@pagerland/themes/src/Corporate/containers';
import data from '@pagerland/themes/src/Corporate/data';

import preview from '@pagerland/themes/src/Corporate/assets/preview.jpg';

import SEO from '../components/SEO';

const Corporate = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Corporate" />

    <Navbar />
    <Welcome name="" />
    <Offer name="offer" />
    <Goals name="goals" />
    <Mission name="mission" />
    <Cta name="cta" {...data.supportCta} />
    <Team name="team" />
    <Testimonials name="testimonials" />
    <Cta name="cta" {...data.contactCta} />
    <Pricing name="pricing" />
    <Contact name="contact" />
    <Newsletter name="newsletter" />
    <Copyright />
  </Theme>
);

Corporate.propTypes = {
  url: PropTypes.string,
};

Corporate.defaultProps = {
  url: 'https://pager.land/gatsby/',
};

export default Corporate;
