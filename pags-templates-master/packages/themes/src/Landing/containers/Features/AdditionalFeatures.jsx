import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Grid from '@pagerland/common/src/components/Grid';
import Icon from '@pagerland/common/src/components/Icon';

const AdditionalFeatures = ({
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  FeatureTitleProps,
  FeatureTextProps,
  IconWrapperProps,
  IconSecondaryWrapperProps,
  IconProps,
  GridProps,
  title,
  features,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {features.map((feature, key) => (
          <Box key={key}>
            <Fade bottom cascade duration={600} delay={key * 100}>
              <Box
                {...IconWrapperProps}
                {...([1, 2, 5].includes(key) ? IconSecondaryWrapperProps : {})}
              >
                {feature.icon && <Icon {...IconProps} icon={feature.icon} />}
              </Box>
              <Typography {...FeatureTitleProps}>{feature.title}</Typography>
              <Typography {...FeatureTextProps}>{feature.text}</Typography>
            </Fade>
          </Box>
        ))}
      </Grid>
    </Container>
  </Box>
);

AdditionalFeatures.propTypes = {
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
   * Props of features grid wrapper
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Feature title text props
   * @See @pagerland/common/src/components/Typography
   */
  FeatureTitleProps: PropTypes.object,
  /**
   * Feature main text props
   * @See @pagerland/common/src/components/Typography
   */
  FeatureTextProps: PropTypes.object,
  /**
   * Wrapper for feature icon
   * @See @pagerland/common/src/components/Box
   */
  IconWrapperProps: PropTypes.object,
  /**
   * Additional props for secondary icons
   * @See @pagerland/common/src/components/Box
   */
  IconSecondaryWrapperProps: PropTypes.object,
  /**
   * Icon props
   * @See @pagerland/common/src/components/Icon
   */
  IconProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * List of features
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      text: PropTypes.node,
      icon: PropTypes.elementType,
    }),
  ),
};

AdditionalFeatures.defaultProps = {
  WrapperProps: {
    pt: {
      _: 30,
      lg: 60,
    },
  },
  CaptionProps: {
    mb: {
      _: 40,
      md: 100,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: 3,
    accent: true,
  },
  GridProps: {
    gridTemplateColumns: {
      _: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gridColumnGap: {
      _: '16px',
      md: '80px',
    },
    gridRowGap: {
      _: '40px',
      md: '80px',
    },
  },
  FeatureTitleProps: {
    as: 'h5',
    variant: 'h5',
    mb: 3,
  },
  IconWrapperProps: {
    flexBox: true,
    width: 64,
    height: 64,
    borderRadius: '50%',
    backgroundColor: 'accent',
    mb: {
      _: 3,
      lg: 4,
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconSecondaryWrapperProps: {
    backgroundColor: 'secondary',
  },
  IconProps: {
    fontSize: 32,
    color: 'gray.6',
    lineHeight: 1,
  },
};

export default AdditionalFeatures;
