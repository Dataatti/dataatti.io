import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Img from '@pagerland/common/src/components/Img';

import data from '../../data';

const Offer = ({
  name,
  title,
  subtitle,
  text,
  services,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  SubtitleProps,
  TitleProps,
  TextProps,
  GridProps,
  ServiceItemProps,
  ServiceIconProps,
  ServiceTitleProps,
  ServiceTextProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...SubtitleProps}>{subtitle}</Typography>
          <Typography {...TitleProps}>{title}</Typography>
          {text ? <Typography {...TextProps}>{text}</Typography> : <></>}
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {services.map((service, key) => (
          <Fade bottom cascade duration={600} delay={key * 100} key={key}>
            <Box {...ServiceItemProps}>
              <Img src={service.icon} {...ServiceIconProps} />
              <Typography {...ServiceTitleProps}>{service.title}</Typography>
              <Typography {...ServiceTextProps}>{service.text}</Typography>
            </Box>
          </Fade>
        ))}
      </Grid>
    </Container>
  </Box>
);

Offer.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  ServiceItemProps: PropTypes.object,
  ServiceIconProps: PropTypes.object,
  ServiceTitleProps: PropTypes.object,
  ServiceTextProps: PropTypes.object,
  subtitle: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
};

Offer.defaultProps = {
  WrapperProps: {
    pt: {
      _: 56,
      md: 64,
      lg: 192,
    },
    pb: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  CaptionProps: {
    mb: 5,
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
    mb: 3,
    textAlign: 'center',
  },
  TextProps: {
    color: 'text',
    mb: {
      _: 4,
      lg: 96,
    },
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '64px',
    maxWidth: 1088,
    mx: 'auto',
    mb: 5,
  },
  ServiceIconProps: {
    display: 'block',
    mx: 'auto',
    mb: 4,
  },
  ServiceTitleProps: {
    textAlign: 'center',
    as: 'h3',
    color: 'invert',
    variant: 'h5',
    mb: 3,
  },
  ServiceTextProps: {
    color: 'text',
    textAlign: 'center',
  },
  ...data.offer,
};

export default Offer;
