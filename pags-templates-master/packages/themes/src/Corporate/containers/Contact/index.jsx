import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';

import Grid from '@pagerland/common/src/components/Grid';
import data from '../../data';

const Goals = ({
  name,
  title,
  subtitle,
  addresses,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  SubtitleProps,
  TitleProps,
  GridProps,
  AddressProps,
  AddressTitleProps,
  AddressTextProps,
  AddressEmailProps,
  AddressPhoneProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...SubtitleProps}>{subtitle}</Typography>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {addresses.map((address, key) => (
          <Box {...AddressProps} key={key}>
            <Typography {...AddressTitleProps}>{address.title}</Typography>
            <Typography {...AddressTextProps}>{address.address}</Typography>
            <Typography {...AddressEmailProps}>{address.email}</Typography>
            <Typography {...AddressPhoneProps}>{address.phone}</Typography>
          </Box>
        ))}
      </Grid>
    </Container>
  </Box>
);

Goals.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  GridProps: PropTypes.object,
  AddressProps: PropTypes.object,
  AddressTitleProps: PropTypes.object,
  AddressTextProps: PropTypes.object,
  subtitle: PropTypes.node,
  title: PropTypes.node,
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      address: PropTypes.node,
      email: PropTypes.node,
      phone: PropTypes.node,
    }),
  ),
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
    textAlign: 'center',
  },
  CaptionProps: {
    mb: {
      _: 3,
      md: 5,
      lg: 96,
    },
    maxWidth: 544,
    mx: 'auto',
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
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: {
      _: '64px',
      lg: '32px',
    },
  },
  AddressTitleProps: {
    variant: 'h6',
    as: 'h6',
    color: 'invert',
    mb: 3,
  },
  AddressTextProps: {
    mb: 3,
  },
  AddressEmailProps: {
    color: 'brand',
    mb: 3,
  },
  AddressPhoneProps: {
    color: 'brand',
  },
  ...data.contact,
};

export default Goals;
