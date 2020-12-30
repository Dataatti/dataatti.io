import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Grid from '@pagerland/common/src/components/Grid';

import Preview from '../../components/Preview';

import data from '../../data';

const Demos = ({
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GridProps,
  name,
  title,
  text,
  previews,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {previews?.map(({ slug, ...preview }, key) => (
          <Fade key={key} bottom cascade duration={600} delay={key * 100}>
            <Preview
              {...preview}
              actions={
                slug && [
                  {
                    as: 'a',
                    href: `/demo/next/${slug}`,
                    label: 'Next.JS',
                    variant: 'primary',
                    target: '_blank',
                  },
                  {
                    as: 'a',
                    href: `/demo/gatsby/${slug}`,
                    label: 'Gatsby',
                    variant: 'accent',
                    target: '_blank',
                  },
                ]
              }
            />
          </Fade>
        ))}
      </Grid>
    </Container>
  </Box>
);

Demos.propTypes = {
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
   * Demos grid props
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * List of preview images
   */
  previews: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
    }),
  ),
};

Demos.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      md: 100,
    },
  },
  CaptionProps: {
    maxWidth: 550,
    mb: {
      _: 30,
      md: 60,
      lg: 100,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: 3,
    accent: true,
  },
  TextProps: {
    variant: 'body1',
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '32px',
  },
  ...data.demos,
};

export default Demos;
