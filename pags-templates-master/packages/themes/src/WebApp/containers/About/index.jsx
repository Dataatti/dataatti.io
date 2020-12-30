import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Icon from '@pagerland/common/src/components/Icon';
import Typography from '@pagerland/common/src/components/Typography';

import Fade from 'react-reveal/Fade';
import Grid from '@pagerland/common/src/components/Grid';
import data from '../../data';

const About = ({
  WrapperProps,
  ContainerProps,
  GridProps,
  SectionProps,
  IconWrapperProps,
  TitleProps,
  TextProps,
  name,
  sections,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Grid {...GridProps}>
        {sections.map((section, key) => (
          <Box key={key} {...SectionProps}>
            <Fade cascade bottom duration={600} key={key} delay={key * 100}>
              <Box {...IconWrapperProps} {...section.IconWrapperProps}>
                <Icon icon={section.icon} />
              </Box>
              <Typography {...TitleProps}>{section.title}</Typography>
              <Typography {...TextProps}>{section.text}</Typography>
            </Fade>
          </Box>
        ))}
      </Grid>
    </Container>
  </Box>
);

About.propTypes = {
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
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Section grid props
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Single section container props
   * @See @pagerland/common/src/components/Box
   */
  SectionProps: PropTypes.object,
  /**
   * Section icon wrapper props
   * @See @pagerland/common/src/components/Box
   */
  IconWrapperProps: PropTypes.object,
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
   * List of brands images with link props
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      IconWrapperProps: PropTypes.object,
      icon: PropTypes.element,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
};

About.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  GridProps: {
    display: 'grid',
    gridTemplateColumns: {
      _: '1f',
      md: 'repeat(3, 1fr)',
    },
    gridGap: {
      _: '30px',
      lg: '90px',
    },
  },
  SectionProps: {
    textAlign: 'center',
  },
  IconWrapperProps: {
    width: 90,
    height: 90,
    mx: 'auto',
    mb: 4,
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: 'gray.7',
    fontSize: 40,
  },
  TitleProps: {
    as: 'h3',
    variant: 'h3',
    mb: 3,
  },
  TextProps: {
    color: 'gray.2',
  },
  ...data.about,
};

export default About;
