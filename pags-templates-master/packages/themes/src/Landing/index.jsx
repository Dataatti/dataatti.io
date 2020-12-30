import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import Global from '@pagerland/common/src/components/Global';
import SvgUtils from '@pagerland/common/src/components/SvgUtils';

import Background from './components/Background';

import theme from './theme';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <Global />
      <Background>{children}</Background>
      <SvgUtils />
    </ParallaxProvider>
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { default as theme } from './theme';
export default Theme;
