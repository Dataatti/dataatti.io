import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Card from '@pagerland/common/src/components/Card';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import Dots from '../../components/Dots';
import data from '../../data';

const BuyCta = ({
  title,
  text,
  cta,
  WrapperProps,
  ContainerProps,
  CardProps,
  DotsWrapperProps,
  DotsProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ButtonProps,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      <Card {...CardProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...TextProps}>{text}</Typography>
          </Fade>
        </Box>

        <Button {...ButtonProps} href={cta.href} target="_blank">
          {cta.text}
        </Button>

        <Box {...DotsWrapperProps}>
          <Parallax y={['-60%', '60%']}>
            <Dots {...DotsProps} />
          </Parallax>
        </Box>
      </Card>
    </Container>
  </Box>
);

BuyCta.propTypes = {
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
   * Main card props
   * @See @pagerland/common/src/components/Card
   */
  CardProps: PropTypes.object,
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
   * CTA Button props
   * @See @pagerland/common/src/components/Button
   */
  ButtonProps: PropTypes.object,
  /**
   * Wrapper for dots
   * @See @pagerland/common/src/components/Box
   */
  DotsWrapperProps: PropTypes.object,
  /**
   * Dots component
   */
  DotsProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * CTA props
   */
  cta: PropTypes.shape({
    text: PropTypes.node,
    href: PropTypes.string,
  }),
};

BuyCta.defaultProps = {
  ContainerProps: {
    py: {
      _: 30,
      md: 100,
    },
    px: {
      _: 2,
      md: 3,
    },
  },
  CardProps: {
    position: 'relative',
    bg: 'gray.0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    p: {
      _: 4,
      md: 5,
    },
    boxShadow: [
      [0, 24, 48, 'rgba(5, 68, 94, 0.2)'],
      [-32, -16, 0, 'accent'],
      [32, -32, 0, 'primary'],
    ],
  },
  DotsWrapperProps: {
    color: '#FF4D00',
    position: 'absolute',
    top: '-32px',
    left: '-64px',
  },
  DotsProps: {
    width: 92,
    height: 92,
    transform: 'rotate(20deg)',
  },
  CaptionProps: {
    maxWidth: 640,
  },
  TitleProps: {
    as: 'h3',
    variant: 'h2',
    color: '#fff !important',
    mb: 3,
  },
  TextProps: {
    variant: 'h4',
    color: 'gray.2',
  },
  ButtonProps: {
    variant: 'accent',
    as: 'a',
    ml: 'auto',
    mr: {
      _: 'auto',
      md: 0,
    },
    mt: {
      _: 3,
      md: 0,
    },
  },
  ...data.buyCta,
};

export default BuyCta;
