import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import Button from '@pagerland/common/src/components/Button';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';

import data from '../../data';

const Goals = ({
  name,
  title,
  subtitle,
  text,
  img,
  cta,
  WrapperProps,
  ContainerProps,
  ImageWrapperProps,
  ImageProps,
  CaptionProps,
  SubtitleProps,
  TitleProps,
  TextProps,
  CtaProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...ImageWrapperProps}>
        <Fade cascade duration={600}>
          <Img {...ImageProps} {...img} />
        </Fade>
      </Box>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...SubtitleProps}>{subtitle}</Typography>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Button {...CtaProps} {...cta} />
        </Fade>
      </Box>
    </Container>
  </Box>
);

Goals.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  ImageWrapperProps: PropTypes.object,
  ImageProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  CtaProps: PropTypes.object,
  img: PropTypes.object,
  subtitle: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  cta: PropTypes.object,
};

Goals.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  ImageProps: {
    maxWidth: '100%',
  },
  CaptionProps: {
    mb: 5,
    maxWidth: 544,
  },
  SubtitleProps: {
    as: 'h3',
    variant: 'h5',
    color: 'brand',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'invert',
    mb: {
      _: 4,
      lg: 48,
    },
  },
  TextProps: {
    color: 'text',
    mb: {
      _: 4,
      lg: 48,
    },
  },
  CtaProps: {
    variant: 'link',
    color: 'invert',
    icon: ArrowRight,
  },
  ...data.goals,
};

export default Goals;
