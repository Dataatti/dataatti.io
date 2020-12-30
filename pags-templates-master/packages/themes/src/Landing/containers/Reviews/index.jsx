import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Slider from '@pagerland/common/src/components/Slider';
import Icon from '@pagerland/common/src/components/Icon';
import Card from '@pagerland/common/src/components/Card';
import Grid from '@pagerland/common/src/components/Grid';
import Avatar from '@pagerland/common/src/components/Avatar';
import ReviewStars from '@pagerland/common/src/components/ReviewStars';
import Button from '@pagerland/common/src/components/Button';

import ArrowLeft from '@pagerland/icons/src/line/ArrowLeft';
import ArrowRight from '@pagerland/icons/src/line/ArrowRight';

import data from '../../data';

const Reviews = ({
  name,
  title,
  reviews,
  button,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  SliderProps,
  MobileSliderProps,
  SlideProps,
  GridProps,
  CardProps,
  ReviewTextProps,
  AuthorBoxProps,
  AvatarProps,
  AuthorDetailsProps,
  ReviewAuthorProps,
  ReviewCompanyProps,
  ReviewStarsProps,
  ButtonWrapperProps,
  ButtonProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
      </Box>
      <Fade bottom cascade duration={600}>
        <Slider {...SliderProps}>
          {_.chunk(reviews, 2).map((reviewGroup, key) => (
            <div key={key}>
              <Container {...SlideProps}>
                <Grid {...GridProps}>
                  {reviewGroup.map((review, reviewKey) => (
                    <div key={reviewKey}>
                      <Card {...CardProps}>
                        <Typography {...ReviewTextProps}>{review.text}</Typography>
                      </Card>
                      <Box {...AuthorBoxProps}>
                        <Avatar {...AvatarProps} {...review.avatar} />
                        <Box {...AuthorDetailsProps}>
                          <Typography {...ReviewAuthorProps}>{review.author}</Typography>
                          <Typography {...ReviewCompanyProps}>{review.company}</Typography>
                        </Box>
                        <ReviewStars {...ReviewStarsProps} rate={review.rate} />
                      </Box>
                    </div>
                  ))}
                </Grid>
              </Container>
            </div>
          ))}
        </Slider>
        <Slider {...MobileSliderProps}>
          {reviews.map((review, key) => (
            <div key={key}>
              <Container {...SlideProps}>
                <Card {...CardProps}>
                  <Typography {...ReviewTextProps}>{review.text}</Typography>
                </Card>
                <Box {...AuthorBoxProps}>
                  <Avatar {...AvatarProps} {...review.avatar} />
                  <Box {...AuthorDetailsProps}>
                    <Typography {...ReviewAuthorProps}>{review.author}</Typography>
                    <Typography {...ReviewCompanyProps}>{review.company}</Typography>
                  </Box>
                  <ReviewStars {...ReviewStarsProps} rate={review.rate} />
                </Box>
              </Container>
            </div>
          ))}
        </Slider>
        <Box {...ButtonWrapperProps}>
          <Button {...ButtonProps} href={button.href}>
            {button.text}
          </Button>
        </Box>
      </Fade>
    </Container>
  </Box>
);

Reviews.propTypes = {
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
   * Reviews slider props
   * @See @pagerland/common/src/components/Slider
   */
  SliderProps: PropTypes.object,
  /**
   * Mobile reviews slider props
   * @See @pagerland/common/src/components/Slider
   */
  MobileSliderProps: PropTypes.object,
  /**
   * Props of single slide
   * @See @pagerland/common/src/components/Container
   */
  SlideProps: PropTypes.object,
  /**
   * Cards grid wrapper props
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Review card props
   * @See @pagerland/common/src/components/Card
   */
  CardProps: PropTypes.object,
  /**
   * Review text props
   * @See @pagerland/common/src/components/Typography
   */
  ReviewTextProps: PropTypes.object,
  /**
   * Review author wrapper props
   * @See @pagerland/common/src/components/Box
   */
  AuthorBoxProps: PropTypes.object,
  /**
   * Review author avatar props
   * @See @pagerland/common/src/components/Avatar
   */
  AvatarProps: PropTypes.object,
  /**
   * Review author details wrapper props
   * @See @pagerland/common/src/components/Box
   */
  AuthorDetailsProps: PropTypes.object,
  /**
   * Review author text props
   * @See @pagerland/common/src/components/Box
   */
  ReviewAuthorProps: PropTypes.object,
  /**
   * Review author company props
   * @See @pagerland/common/src/components/Box
   */
  ReviewCompanyProps: PropTypes.object,
  /**
   * Review stars component props
   * @See @pagerland/common/src/components/ReviewStars
   */
  ReviewStarsProps: PropTypes.object,
  /**
   * Button wrapper props
   * @See @pagerland/common/src/components/Box
   */
  ButtonWrapperProps: PropTypes.object,
  /**
   * Button props
   * @See @pagerland/common/src/components/Button
   */
  ButtonProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Content of button
   */
  button: PropTypes.shape({
    text: PropTypes.node,
    href: PropTypes.string,
  }),
  /**
   * List of reviews
   */
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.object,
      author: PropTypes.node,
      company: PropTypes.node,
      text: PropTypes.node,
      rate: PropTypes.number,
    }),
  ),
};

Reviews.defaultProps = {
  ...data.reviews,
  WrapperProps: {
    overflow: 'hidden',
    py: {
      _: 30,
      md: 100,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    accent: true,
    mb: {
      _: 30,
      lg: 100,
    },
  },
  SliderProps: {
    display: {
      _: 'none',
      lg: 'block',
    },
    options: {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: true,
      slidesToScroll: 1,
      infinite: false,
      adaptiveHeight: true,
      prevArrow: <Icon icon={ArrowLeft} />,
      nextArrow: <Icon icon={ArrowRight} />,
    },
  },
  MobileSliderProps: {
    display: {
      lg: 'none',
    },
    options: {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      slidesToScroll: 1,
      infinite: false,
      adaptiveHeight: true,
      prevArrow: <Icon icon={ArrowLeft} />,
      nextArrow: <Icon icon={ArrowRight} />,
    },
  },
  SlideProps: {
    px: {
      _: 8,
      lg: 112,
    },
    mx: {
      _: 0,
      lg: -96,
    },
  },
  GridProps: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '32px',
  },
  CardProps: {
    bubble: true,
  },
  ReviewTextProps: {
    variant: 'quote2',
  },
  AuthorBoxProps: {
    mt: 3,
    ml: 56,
    mr: 24,
    flexBox: true,
    alignItems: 'center',
  },
  AvatarProps: {
    mr: 3,
  },
  ReviewAuthorProps: {
    variant: 'h6',
    color: 'gray.0',
  },
  ReviewCompanyProps: {
    variant: 'body',
  },
  ReviewStarsProps: {
    fontSize: 24,
    ml: 'auto',
  },
  ButtonWrapperProps: {
    mt: 5,
    textAlign: 'center',
  },
  ButtonProps: {
    variant: 'primary',
    as: 'a',
  },
};

export default Reviews;
