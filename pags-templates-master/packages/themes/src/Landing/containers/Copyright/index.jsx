import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Img from '@pagerland/common/src/components/Img';

import data from '../../data';
import coffecream from '../../assets/coffecream.svg';
import envato from '../../assets/envato.svg';

const Copyright = ({
  copyright,
  WrapperProps,
  ContainerProps,
  TextProps,
  AuthorLogoProps,
  EnvatoLogoProps,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      <Img {...AuthorLogoProps} />
      <Typography {...TextProps}>{copyright}</Typography>
      <Img {...EnvatoLogoProps} />
    </Container>
  </Box>
);

Copyright.propTypes = {
  /**
   * Main content
   */
  copyright: PropTypes.node,
  /**
   * Props of container wrapper
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Main content text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Props of author logo
   * @See @pagerland/common/src/components/Img
   */
  AuthorLogoProps: PropTypes.object,
  /**
   * Props of envato logo
   * @See @pagerland/common/src/components/Img
   */
  EnvatoLogoProps: PropTypes.object,
};

Copyright.defaultProps = {
  copyright: data.copyright,
  TextProps: {
    variant: 'body2',
    textAlign: 'center',
    color: 'gray.1',
  },
  WrapperProps: {
    mt: {
      _: 30,
      md: 100,
    },
    py: 28,
    backgroundColor: 'gray.5',
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
      _: 'column',
      md: 'row',
    },
  },
  AuthorLogoProps: {
    order: {
      _: 1,
      md: 0,
    },
    my: {
      _: 3,
      md: 0,
    },
    src: coffecream,
  },
  EnvatoLogoProps: {
    order: {
      _: 2,
      md: 0,
    },
    src: envato,
  },
};

export default Copyright;
