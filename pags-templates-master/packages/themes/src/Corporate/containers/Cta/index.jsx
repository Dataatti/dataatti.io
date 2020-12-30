import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import Card from '@pagerland/common/src/components/Card';
import Liquid from '../../components/Liquids/B';

const Cta = ({
  name,
  WrapperProps,
  ContainerProps,
  CardProps,
  CaptionProps,
  SubtitleProps,
  TitleProps,
  TextProps,
  ButtonsWrapperProps,
  ButtonProps,
  LiquidProps,
  title,
  text,
  subtitle,
  buttons,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
        <Liquid {...LiquidProps} />
      </Reveal>

      <Card {...CardProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...SubtitleProps}>{subtitle}</Typography>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...TextProps}>{text}</Typography>
            <Box {...ButtonsWrapperProps}>
              {buttons.map(({ label, ...button }, key) => (
                <Button key={key} {...ButtonProps} {...button}>
                  {label}
                </Button>
              ))}
            </Box>
          </Fade>
        </Box>
      </Card>
    </Container>
  </Box>
);

Cta.propTypes = {
  name: PropTypes.string,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CardProps: PropTypes.object,
  LiquidProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  ButtonsWrapperProps: PropTypes.object,
  ButtonProps: PropTypes.object,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  text: PropTypes.node,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
};

Cta.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    py: {
      _: 30,
      lg: 60,
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardProps: {
    width: '100%',
    my: 104,
    mx: 'auto',
    py: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  CaptionProps: {
    textAlign: 'center',
    maxWidth: 736,
    mx: 'auto',
  },
  SubtitleProps: {
    as: 'h4',
    variant: 'h5',
    color: 'brand',
  },
  TitleProps: {
    variant: 'h4',
    as: 'h2',
    mx: 'auto',
    mb: 4,
    color: 'invert',
  },
  TextProps: {
    variant: 'body1',
    mb: 4,
  },
  ButtonsWrapperProps: {
    flexBox: true,
    justifyContent: 'center',
  },
  ButtonProps: {
    variant: 'brand',
    size: 'huge',
    as: 'a',
  },
  LiquidProps: {
    zIndex: -1,
    width: 695,
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 'calc(50% - 347px)',
  },
};

export default Cta;
