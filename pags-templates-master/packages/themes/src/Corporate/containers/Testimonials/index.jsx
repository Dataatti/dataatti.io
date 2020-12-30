import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Slider from '@pagerland/common/src/components/Slider';

import data from '../../data';
import { colors } from '../../styles';

const Testimonials = ({
  name,
  subtitle,
  title,
  comments,
  WrapperProps,
  InnerProps,
  SubtitleProps,
  TitleProps,
  SliderProps,
  SlideProps,
  QuoteProps,
  QuoteAuthorProps,
}) => (
  <Box {...WrapperProps} name={name}>
    <Container>
      <Box {...InnerProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...SubtitleProps}>{subtitle}</Typography>
          <Typography {...TitleProps}>{title}</Typography>
          <svg width="48" height="44" viewBox="0 0 48 44" fill="none">
            <path
              d="M18.75 23.4238C18.75 29.7206 17.625 34.2542 15.375 37.0248C12.625 40.8028 7.9375 43.0067 1.3125 43.6364V32.3022C4.9375 32.3022 7.0625 30.4132 7.6875 26.6352C7.8125 26.0055 7.875 25.061 7.875 23.8016V20.0236H0V0H18.75V23.4238ZM48 23.4238C48 29.5946 46.75 34.3172 44.25 37.5915C41.5 40.9917 36.9375 43.0067 30.5625 43.6364V32.3022C32.5625 32.3022 34.4375 31.3577 36.1875 29.4687C36.9375 28.5872 37.3125 26.6981 37.3125 23.8016V20.0236H29.25V0H48V23.4238Z"
              fill={colors.brand}
            />
          </svg>

          <Slider {...SliderProps}>
            {comments?.map((comment, key) => (
              <div key={key}>
                <Box {...SlideProps}>
                  <div>
                    <Typography {...QuoteProps}>{comment.text}</Typography>
                    <Typography {...QuoteAuthorProps}>
                      <svg
                        width="64"
                        height="1"
                        viewBox="0 0 64 1"
                        fill="none"
                        style={{ marginRight: 20 }}
                      >
                        <line y1="0.5" x2="64" y2="0.5" stroke="currentColor" />
                      </svg>
                      {comment.author}
                    </Typography>
                  </div>
                </Box>
              </div>
            ))}
          </Slider>
        </Fade>
      </Box>
    </Container>
  </Box>
);

Testimonials.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  title: PropTypes.node,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  WrapperProps: PropTypes.object,
  InnerProps: PropTypes.object,
  SubtitleProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SliderProps: PropTypes.object,
  SlideProps: PropTypes.object,
  QuoteProps: PropTypes.object,
  QuoteAuthorProps: PropTypes.object,
};

Testimonials.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 80,
    },
  },
  InnerProps: {
    position: 'relative',
    maxWidth: 928,
    mx: 'auto',
    textAlign: 'center',
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
    mb: {
      _: 3,
      lg: 5,
    },
  },
  SliderProps: {
    mt: 4,
    options: {
      dots: true,
      arrows: false,
      adaptiveHeight: true,
    },
  },
  SlideProps: {
    flexBox: true,
    alignItems: 'flex-start',
    pb: {
      _: 3,
      lg: 5,
    },
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  QuoteProps: {
    variant: 'quote',
    as: 'q',
  },
  QuoteAuthorProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    as: 'footer',
    variant: 'h6',
    color: 'invert',
    mt: 4,
  },
  LiquidProps: {
    top: '50%',
    marginTop: -250,
    zIndex: -1,
    left: -750,
    position: 'absolute',
  },
  ...data.testimonials,
};

export default Testimonials;
