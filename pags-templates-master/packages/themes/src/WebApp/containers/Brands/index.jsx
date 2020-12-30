import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import Link from '@pagerland/common/src/components/Link';
import Fade from 'react-reveal/Fade';
import data from '../../data';

const Brands = ({ WrapperProps, ContainerProps, ImgProps, name, brands }) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      {brands.map(({ LinkProps, ...brand }, key) => (
        <Fade bottom duration={600} key={key} delay={key * 100}>
          <Link {...LinkProps}>
            <Img {...ImgProps} {...brand} key={key} />
          </Link>
        </Fade>
      ))}
    </Container>
  </Box>
);

Brands.propTypes = {
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
   * Props of brand image
   * @See @pagerland/common/src/components/Img
   */
  ImgProps: PropTypes.object,
  /**
   * List of brands images with link props
   */
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      LinkProps: PropTypes.object,
    }),
  ),
};

Brands.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: {
      _: 'column',
      md: 'row',
    },
  },
  ImgProps: {
    my: {
      _: 8,
      md: 0,
    },
    mx: 30,
  },
  brands: data.brands,
};

export default Brands;
