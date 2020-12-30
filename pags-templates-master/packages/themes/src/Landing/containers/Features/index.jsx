import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';

import Feature from './Feature';
import AdditionalFeatures from './AdditionalFeatures';

import data from '../../data';

const Features = ({ name, features, additionalFeatures, WrapperProps }) => (
  <Box {...WrapperProps} name={name}>
    {features?.map((feature, i) => (
      <Feature {...feature} key={i} />
    ))}
    <AdditionalFeatures {...additionalFeatures} />
  </Box>
);

Features.propTypes = {
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
   * List of features
   */
  features: PropTypes.arrayOf(PropTypes.object),
  additionalFeatures: PropTypes.shape({
    title: PropTypes.node,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
};

Features.defaultProps = {
  features: data.features,
  additionalFeatures: data.additionalFeatures,
  WrapperProps: {
    overflow: 'hidden',
    py: {
      _: 30,
      md: 100,
    },
  },
};

export default Features;
