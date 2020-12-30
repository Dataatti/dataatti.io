import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import data from '../../data';
import Liquid from '../../components/Liquids/B';

const Cta = ({
  name,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  ButtonProps,
  LiquidProps,
  title,
  button: { label, ...button },
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
        <Liquid {...LiquidProps} />
      </Reveal>

      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Button {...ButtonProps} {...button}>
            {label}
          </Button>
        </Fade>
      </Box>
    </Container>
  </Box>
);

Cta.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string,
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
   * Props for liquid in background
   */
  LiquidProps: PropTypes.object,
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
   * Props of CTA component
   * @See @pagerland/common/src/components/Button
   */
  ButtonProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Cta button details
   */
  button: PropTypes.shape({
    label: PropTypes.node,
  }),
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
  CaptionProps: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    my: 197,
    top: 0,
    mx: 'auto',
  },
  TitleProps: {
    variant: 'h2',
    maxWidth: 240,
    mx: 'auto',
    mb: 4,
    color: 'gray.7',
  },
  ButtonProps: {
    variant: 'primary',
    size: 'large',
    as: 'a',
  },
  LiquidProps: {
    zIndex: -1,
    width: 695,
    display: 'block',
    top: {
      _: 0,
      md: -60,
      lg: -120,
    },
  },
  ...data.cta,
};

export default Cta;
