import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Button from '@pagerland/common/src/components/Button';
import Avatar from '@pagerland/common/src/components/Avatar';

import Img from '@pagerland/common/src/components/Img';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';
import data from '../../data';

const Team = ({
  name,
  subtitle,
  title,
  img,
  text,
  cta,
  people,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  SubtitleProps,
  ImageWrapperProps,
  ImageProps,
  TitleProps,
  TextProps,
  GridProps,
  CtaProps,
  PersonWrapperProps,
  AvatarProps,
  NameProps,
  PositionProps,
  TemplateProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Grid {...TemplateProps}>
        <Box {...ImageWrapperProps}>
          <Fade cascade duration={600}>
            <Img {...ImageProps} {...img} />
          </Fade>
        </Box>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...SubtitleProps}>{subtitle}</Typography>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...TextProps}>{text}</Typography>
            <Button {...CtaProps} {...cta}>
              {cta.label}
            </Button>
          </Fade>
        </Box>
        <Grid {...GridProps}>
          {people.map((person, key) => (
            <Fade key={key} bottom cascade duration={600} delay={key * 100}>
              <Box {...PersonWrapperProps}>
                <Avatar {...AvatarProps} {...person.avatar} />
                <Typography {...NameProps}>{person.name}</Typography>
                <Typography {...PositionProps}>{person.position}</Typography>
              </Box>
            </Fade>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Box>
);

Team.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  ImageProps: PropTypes.object,
  ImageWrapperProps: PropTypes.object,
  TemplateProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  CtaProps: PropTypes.object,
  PersonWrapperProps: PropTypes.object,
  AvatarProps: PropTypes.object,
  NameProps: PropTypes.object,
  PositionProps: PropTypes.object,
  img: PropTypes.object,
  subtitle: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
  people: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.object,
      name: PropTypes.node,
      position: PropTypes.node,
    }),
  ),
};

Team.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {},
  TemplateProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: '544px auto',
    },
    gridTemplateAreas: {
      _: '"image" "caption" "team"',
      lg: '"caption image" "team team"',
    },
    gridGap: {
      _: '32px',
      lg: '64px',
    },
  },
  ImageWrapperProps: {
    gridArea: 'image',
  },
  ImageProps: {
    maxWidth: '100%',
  },
  CaptionProps: {
    gridArea: 'caption',
    alignSelf: 'center',
    mb: {
      _: 4,
      md: 5,
    },
    mx: 'auto',
    maxWidth: 736,
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
  },
  TextProps: {
    mb: 4,
  },
  GridProps: {
    gridArea: 'team',
    textAlign: 'center',
    gridTemplateColumns: {
      _: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
    },
    gridColumnGap: '32px',
    gridRowGap: {
      _: '32px',
      md: '64px',
    },
  },
  AvatarProps: {
    width: 92,
    mb: 2,
  },
  NameProps: {
    variant: 'h6',
    color: 'invert',
  },
  PositionProps: {
    mb: 2,
  },
  CtaProps: {
    variant: 'link',
    color: 'invert',
    icon: ArrowRight,
  },
  ...data.team,
};

export default Team;
