import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import { smoothLinkProps } from '@pagerland/common/src/utils';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';

import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import ParallaxBackground from '../../components/ParallaxBackground';

import data from '../../data';

const Welcome = ({
  name,
  background,
  title,
  subtitle,
  description,
  actions,
  WrapperProps,
  InnerProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  DescriptionProps,
  CtaWrapperProps,
  CtaProps,
  SubtitleProp,
}) => (
  <Box name={name} {...WrapperProps}>
    <ParallaxBackground {...background} />
    <Box {...InnerProps}>
      <Container {...ContainerProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...SubtitleProp}>{subtitle}</Typography>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...DescriptionProps}>{description}</Typography>
            <Box {...CtaWrapperProps}>
              {actions.map((cta, key) => (
                <Button key={key} {...CtaProps} {...cta} />
              ))}
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  </Box>
);

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  InnerProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SubtitleProp: PropTypes.object,
  DescriptionProps: PropTypes.object,
  CtaWrapperProps: PropTypes.object,
  CtaProps: PropTypes.object,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  background: PropTypes.object,
  actions: PropTypes.arrayOf(PropTypes.object),
};

Welcome.defaultProps = {
  WrapperProps: {
    pt: {
      _: '0',
      lg: '56.25%',
    },
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  InnerProps: {
    pt: {
      _: 120,
      lg: 0,
    },
    pb: {
      _: 80,
      lg: 0,
    },
    position: {
      _: 'relative',
      lg: 'absolute',
    },
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  CaptionProps: {
    maxWidth: 544,
  },
  TitleProps: {
    as: 'h1',
    variant: 'h1',
    color: 'invert',
  },
  SubtitleProp: {
    variant: 'h3',
    color: 'brand',
  },
  DescriptionProps: {
    variant: 'body1',
    color: 'invert',
    maxWidth: 448,
    mt: {
      _: 3,
      lg: 4,
    },
  },
  CtaWrapperProps: {
    mt: 4,
    flexBox: true,
  },
  CtaProps: {
    as: Link,
    ...smoothLinkProps,
    variant: 'brand',
    size: 'large',
  },
  ...data.welcome,
};

export default Welcome;
