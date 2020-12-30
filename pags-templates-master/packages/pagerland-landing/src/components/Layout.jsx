import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/Landing';
import data from '@pagerland/themes/src/Landing/data';

import SEO from './SEO';

const Layout = ({ children }) => (
  <Theme>
    <Helmet>
      <meta name="theme-color" content={theme.colors.primary} />
    </Helmet>
    <SEO title={data.title} />
    {children}
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
