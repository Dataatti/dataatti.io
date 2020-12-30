import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import Img from '@pagerland/common/src/components/Img';

import hero from '../../assets/hero.png';
import hero2x from '../../assets/hero@2x.png';

import data from '../../data';
import Dots from '../../components/Dots';

import { ImagesWrapper } from './styled.components';

const Welcome = ({
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ActionButtonsProps,
  ImageWrapperProps,
  ImgProps,
  DotsAWrapperProps,
  DotsBWrapperProps,
  DotsAProps,
  DotsBProps,
  name,
  title,
  text,
  actions,
}) => (
  <Box {...WrapperProps} name={name}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Box {...ActionButtonsProps}>
            {actions.map(({ label, ...props }, key) => (
              <Button {...props} key={key}>
                {label}
              </Button>
            ))}
          </Box>
        </Fade>
      </Box>
      <ImagesWrapper {...ImageWrapperProps}>
        <Box {...DotsAWrapperProps}>
          <Parallax y={['-120%', '120%']}>
            <Dots {...DotsAProps} />
          </Parallax>
        </Box>
        <Box {...DotsBWrapperProps}>
          <Parallax y={['50%', '-50%']}>
            <Dots {...DotsBProps} />
          </Parallax>
        </Box>
        <Parallax y={['-20%', '20%']}>
          <Img {...ImgProps} />
        </Parallax>
      </ImagesWrapper>
    </Container>
  </Box>
);

Welcome.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Wrapper with action buttons
   * @See @pagerland/common/src/components/Box
   */
  ActionButtonsProps: PropTypes.object,
  /**
   * Wrapper for images component
   * @See @pagerland/common/src/components/Box
   */
  ImageWrapperProps: PropTypes.object,
  /**
   * Props of img component
   * @See @pagerland/common/src/components/Img
   */
  ImgProps: PropTypes.object,
  /**
   * Props of first dots wrapper component
   * @See @pagerland/common/src/components/Box
   */
  DotsAWrapperProps: PropTypes.object,
  /**
   * Props of second dots wrapper component
   * @See @pagerland/common/src/components/Box
   */
  DotsBWrapperProps: PropTypes.object,
  /**
   * Props of first dots component
   * @See Dots
   */
  DotsAProps: PropTypes.object,
  /**
   * Props of second dots component
   * @See Dots
   */
  DotsBProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Action buttons
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
};

Welcome.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    height: {
      _: 'auto',
      lg: 810,
    },
    background: 'linear-gradient(180deg, rgba(244, 249, 250, 0) 0%, #F4F9FA 100%)',
    display: 'flex',
    alignItems: 'stretch',
    mb: {
      _: 30,
      md: 100,
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  CaptionProps: {
    position: 'relative',
    zIndex: 2,
    maxWidth: {
      lg: 500,
    },
    py: 4,
  },
  TitleProps: {
    variant: 'h1',
    as: 'h1',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
  },
  ActionButtonsProps: {
    mt: 4,
  },
  ImageWrapperProps: {
    flex: 1,
    position: 'relative',
    alignSelf: 'stretch',
    mt: {
      _: -60,
      md: -80,
    },
  },
  ImgProps: {
    src: hero,
    srcSet: `${hero} 1x, ${hero2x} 2x`,
    position: 'absolute',
    width: '233.0721003135%',
    left: -100,
  },
  DotsAWrapperProps: {
    position: 'absolute',
    top: {
      _: '15%',
      lg: 140,
    },
    left: {
      _: '65%',
      lg: 500,
    },
    zIndex: 3,
  },
  DotsBWrapperProps: {
    position: 'absolute',
    top: {
      _: '55%',
      lg: 510,
    },
    left: {
      _: -50,
      lg: 40,
    },
    zIndex: 3,
  },
  DotsAProps: {
    width: 92,
    color: 'primary',
  },
  DotsBProps: {
    width: 92,
    color: 'accent',
    transform: 'rotate(45deg)',
  },
  ...data.welcome,
};

export default Welcome;
