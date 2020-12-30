import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import Typography from '@pagerland/common/src/components/Typography';

import data from '../../data';
import clients from '../../assets/clients.svg';
import Avatar from '../../components/Avatar';

const Clients = ({
  name,
  WrapperProps,
  ContainerProps,
  SpacerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  AvatarProps,
  CommentWrapperProps,
  CommentProps,
  CommentTextProp,
  AuthorTextProps,
  title,
  text,
  avatar,
  comment,
  author,
}) => (
  <Box name={name} {...WrapperProps}>
    <Fade top cascade duration={600}>
      <Img src={clients} alt="Spacer" {...SpacerProps} />
    </Fade>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Fade bottom cascade duration={600}>
        <Box {...CommentWrapperProps}>
          <Avatar {...AvatarProps} {...avatar} />
          <Box {...CommentProps}>
            <Typography {...CommentTextProp}>
              {comment}
              <Typography {...AuthorTextProps}>{author}</Typography>
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Container>
  </Box>
);

Clients.propTypes = {
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
   * Img spacer props
   * @See @pagerland/common/src/components/Img
   */
  SpacerProps: PropTypes.object,
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
   * Props of comment wrapper
   * @See @pagerland/common/src/components/Box
   */
  CommentWrapperProps: PropTypes.object,
  /**
   * Props of comment details
   * @See @pagerland/common/src/components/Box
   */
  CommentProps: PropTypes.object,
  /**
   * Props of comment avatar
   */
  AvatarProps: PropTypes.object,
  /**
   * Props of comment text element
   */
  CommentTextProp: PropTypes.object,
  /**
   * Props of author text element
   */
  AuthorTextProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Avatar details
   */
  avatar: PropTypes.object,
  /**
   * Comment node
   */
  comment: PropTypes.node,
  /**
   * Comment author node
   */
  author: PropTypes.node,
};

Clients.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  SpacerProps: {
    display: 'block',
    mx: 'auto',
    mb: {
      _: 30,
      lg: 90,
    },
  },
  CaptionProps: {
    maxWidth: 770,
    mx: 'auto',
    textAlign: 'center',
    mb: {
      _: 5,
      lg: 80,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.2',
  },
  CommentWrapperProps: {
    maxWidth: 770,
    mx: 'auto',
    flexBox: true,
    flexDirection: {
      _: 'column',
      md: 'row',
    },
  },
  CommentProps: {
    ml: { _: 0, md: 70 },
    mt: { _: 60, md: 0 },
  },
  AvatarProps: {
    fancy: true,
    mx: {
      _: 'auto',
      md: 0,
    },
  },
  CommentTextProp: {
    variant: 'quote1',
    color: 'gray.2',
    as: 'blockquote',
  },
  AuthorTextProps: {
    variant: 'h5',
    color: 'gray.0',
    as: 'footer',
    mt: 4,
    fontStyle: 'normal',
  },
  ...data.clients,
};

export default Clients;
