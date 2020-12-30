import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Box from '@pagerland/common/src/components/Box';

import data from '../../data';

const StyledWrapper = styled(Box)`
  background-color: ${props => props.theme.colors.muted};
  color: ${props =>
    props.theme.mode === 'dark'
      ? transparentize(0.7, props.theme.colors.gray[4])
      : props.theme.colors.gray[4]};
`;

const Copyright = ({ copyright, WrapperProps, TextProps }) => (
  <StyledWrapper {...WrapperProps}>
    <Container>
      <Typography {...TextProps}>{copyright}</Typography>
    </Container>
  </StyledWrapper>
);

Copyright.propTypes = {
  copyright: PropTypes.node,
  TextProps: PropTypes.object,
  WrapperProps: PropTypes.object,
};

Copyright.defaultProps = {
  copyright: data.copyright,
  TextProps: {
    variant: 'body2',
    textAlign: 'center',
  },
  WrapperProps: {
    py: 4,
  },
};

export default Copyright;
