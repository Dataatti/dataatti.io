import React from 'react';
import PropTypes from 'prop-types';

import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import Typography from '@pagerland/common/src/components/Typography';
import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

const Feature = ({
  WrapperProps,
  ContainerProps,
  BoxProps,
  ImageWrapperProps,
  ImageProps,
  CaptionProps,
  TitleProps,
  TextProps,
  feature,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...BoxProps}>
        {feature.ImageProps && (
          <Parallax {...feature.ImageProps.parallax}>
            <Box {...ImageWrapperProps}>
              <Fade bottom duration={600}>
                <Img alt={feature.title} {...ImageProps} {...feature.ImageProps} />
              </Fade>
            </Box>
          </Parallax>
        )}
        <Box {...CaptionProps}>
          <Fade cascade bottom duration={600}>
            <Typography {...TitleProps}>{feature.title}</Typography>
            <Typography {...TextProps}>{textToMultiline(feature.text)}</Typography>
          </Fade>
        </Box>
      </Box>
    </Container>
  </Box>
);

Feature.propTypes = {
  /**
   * Feature related data
   */
  feature: PropTypes.shape({
    /**
     * Props of the image component, if empty component won't be rendered
     */
    ImageProps: PropTypes.shape({
      /**
       * Basic src to the image
       */
      src: PropTypes.any,
      parallax: PropTypes.object,
    }),
    /**
     * Title of given feature
     */
    title: PropTypes.node,
    /**
     * Short description of feature
     */
    text: PropTypes.node,
  }),
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Main grid props
   * @See @pagerland/common/src/components/Box
   */
  BoxProps: PropTypes.object,
  /**
   * Image wrapper props
   * @See @pagerland/common/src/components/Box
   */
  ImageWrapperProps: PropTypes.object,
  /**
   * Default feature image props
   * @See @pagerland/common/src/components/Img
   */
  ImageProps: PropTypes.object,
  /**
   * Caption wrapper props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main feature text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
};

Feature.defaultProps = {
  WrapperProps: {
    mb: 100,
  },
  BoxProps: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  CaptionProps: {
    maxWidth: {
      lg: 448,
    },
    order: {
      lg: -1,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: {
      _: 3,
      lg: 4,
    },
  },
  ImageProps: {
    maxWidth: '100%',
    mb: {
      _: 40,
      lg: 0,
    },
  },
};

export default Feature;
