import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import Typography from '@pagerland/common/src/components/Typography';
import Slider from '@pagerland/common/src/components/Slider';
import Icon from '@pagerland/common/src/components/Icon';

import ArrowLeft from '@pagerland/icons/src/line/ArrowLeft';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';

import data from '../../data';
import screens from '../../assets/screens.svg';

import { Image } from './styled.components';

const Screenshots = ({
  name,
  WrapperProps,
  ContainerProps,
  SpacerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  SliderWrapperProps,
  SliderProps,
  SlideProps,
  SlideImgProps,
  SlideTitleProps,
  SlideTextProps,
  title,
  text,
  screenshots,
}) => (
  <Box name={name} {...WrapperProps}>
    <Fade top cascade duration={600}>
      <Img src={screens} alt="Spacer" {...SpacerProps} />
    </Fade>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Fade bottom cascade duration={600}>
        <Box {...SliderWrapperProps}>
          <Slider {...SliderProps}>
            {screenshots.map((screenshot, key) => (
              <div key={key}>
                <Box {...SlideProps}>
                  <Image {...SlideImgProps} {...screenshot.ImgProps} />
                  <Typography {...SlideTitleProps}>{screenshot.title}</Typography>
                  <Typography {...SlideTextProps}>{screenshot.text}</Typography>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Fade>
    </Container>
  </Box>
);

Screenshots.propTypes = {
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
   * Img spacer props
   * @See @pagerland/common/src/components/Img
   */
  SpacerProps: PropTypes.object,
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
   * Props of slider wrapper
   * @See @pagerland/common/src/components/Box
   */
  SliderWrapperProps: PropTypes.object,
  /**
   * Props of slider component
   * @See @pagerland/common/src/components/Slider
   */
  SliderProps: PropTypes.object,
  /**
   * Single slide props
   * @See @pagerland/common/src/components/Slide
   */
  SlideProps: PropTypes.object,
  /**
   * Slide image props
   * @See @pagerland/common/src/components/Img
   */
  SlideImgProps: PropTypes.object,
  /**
   * Slide title text props
   * @See @pagerland/common/src/components/Typography
   */
  SlideTitleProps: PropTypes.object,
  /**
   * Main slide text props
   * @See @pagerland/common/src/components/Typography
   */
  SlideTextProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * List of screenshots in slider
   */
  screenshots: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      text: PropTypes.node,
      ImgProps: PropTypes.object,
    }),
  ),
};

Screenshots.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  SpacerProps: {
    display: 'block',
    mx: 'auto',
    mb: {
      _: 30,
      lg: 90,
    },
  },
  CaptionProps: {
    maxWidth: 770,
    mx: 'auto',
    textAlign: 'center',
    mb: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.2',
  },
  SliderWrapperProps: {
    maxWidth: 1060,
    mx: 'auto',
  },
  SliderProps: {
    options: {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      fade: true,
      slidesToScroll: 1,
      prevArrow: <Icon icon={ArrowLeft} />,
      nextArrow: <Icon icon={ArrowRight} />,
    },
  },
  SlideProps: {
    mx: {
      _: 60,
      lg: 145,
    },
    textAlign: 'center',
  },
  SlideTitleProps: {
    as: 'h4',
    variant: 'h4',
  },
  SlideTextProps: {
    color: 'gray.2',
    maxWidth: 570,
    mx: 'auto',
  },
  ...data.screenshots,
};

export default Screenshots;
