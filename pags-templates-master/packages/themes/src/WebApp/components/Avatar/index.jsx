import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { DashedCircle, FullCircle, Square, Image, Wrapper } from './styled.components';

const Avatar = ({ fancy, className, src, srcSet, ImgProps, ...props }) => (
  <Wrapper className={classNames(className, { fancy })} {...props}>
    {fancy && (
      <>
        <DashedCircle />
        <FullCircle />
        <Square />
      </>
    )}
    <Image src={src} srcSet={src} {...ImgProps} />
  </Wrapper>
);

Avatar.propTypes = {
  /**
   * Url to image
   */
  src: PropTypes.string,
  /**
   * Set of urls to image
   */
  srcSet: PropTypes.string,
  /**
   * Use fancy styling
   */
  fancy: PropTypes.bool,
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Img component props
   */
  ImgProps: PropTypes.object,
};

export default Avatar;
