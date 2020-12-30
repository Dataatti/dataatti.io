import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

import { Formik, Form } from 'formik';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Card from '@pagerland/common/src/components/Card';
import Typography from '@pagerland/common/src/components/Typography';
import Input from '@pagerland/common/src/components/Formik/Input';

import Button from '@pagerland/common/src/components/Button';
import Dots from '../../components/Dots';
import data from '../../data';

const Newsletter = ({
  name,
  title,
  text,
  WrapperProps,
  ContainerProps,
  CardProps,
  DotsWrapperProps,
  DotsProps,
  CaptionProps,
  TitleProps,
  TextProps,
  FormWrapperProps,
  FormInnerProps,
  InputProps,
  ButtonProps,
  form,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Card {...CardProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...TextProps}>{text}</Typography>
          </Fade>
        </Box>

        <Box {...FormWrapperProps}>
          <Formik
            validationSchema={form?.validationSchema}
            onSubmit={form?.onSubmit}
            initialValues={{ email: '' }}
          >
            <Form>
              <Box {...FormInnerProps}>
                <Input name="email" {...InputProps} />
                <Button type="submit" {...ButtonProps} />
              </Box>
            </Form>
          </Formik>
        </Box>

        <Box {...DotsWrapperProps}>
          <Parallax y={['-60%', '60%']}>
            <Dots {...DotsProps} />
          </Parallax>
        </Box>
      </Card>
    </Container>
  </Box>
);

Newsletter.propTypes = {
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
   * Main card props
   * @See @pagerland/common/src/components/Card
   */
  CardProps: PropTypes.object,
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
   * Wrapper for dots
   * @See @pagerland/common/src/components/Box
   */
  DotsWrapperProps: PropTypes.object,
  /**
   * Wrapper for form
   * @See @pagerland/common/src/components/Box
   */
  FormWrapperProps: PropTypes.object,
  /**
   * Dots component
   */
  DotsProps: PropTypes.object,
  /**
   * Form inner component props
   */
  FormInnerProps: PropTypes.object,
  /**
   * Email input props
   */
  InputProps: PropTypes.object,
  /**
   * Submit button props
   */
  ButtonProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Form details
   */
  form: PropTypes.shape({
    /**
     * Formik validation schema
     * @see https://jaredpalmer.com/formik/docs/guides/validation
     */
    validationSchema: PropTypes.object,
    /**
     * Form submit function
     */
    onSubmit: PropTypes.func,
  }),
};

Newsletter.defaultProps = {
  ContainerProps: {
    py: 4,
    px: {
      _: 2,
      md: 3,
    },
  },
  CardProps: {
    position: 'relative',
    bg: 'gray.5',
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    p: {
      _: 4,
      md: 5,
    },
    boxShadow: [
      [0, 24, 48, 'rgba(24, 154, 180, 0.2)'],
      [32, -16, 0, 'gray.4'],
      [-32, -32, 0, 'gray.3'],
    ],
  },
  DotsWrapperProps: {
    position: 'absolute',
    top: 'calc(100% - 32px)',
    left: 'calc(100% - 64px)',
  },
  DotsProps: {
    width: 92,
    height: 92,
    transform: 'rotate(-151deg)',
  },
  CaptionProps: {
    maxWidth: 420,
  },
  TitleProps: {
    as: 'h2',
    variant: {
      _: 'h3',
      md: 'h2',
    },
  },
  TextProps: {
    variant: {
      _: 'h5',
      md: 'h4',
    },
    color: 'primary',
  },
  FormWrapperProps: {
    flex: 1,
    ml: {
      _: 0,
      lg: 4,
    },
    mt: {
      _: 3,
      lg: 0,
    },
    width: {
      _: '100%',
      md: 'auto',
    },
  },
  FormInnerProps: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: {
      _: 'column',
      md: 'row',
    },
  },
  InputProps: {
    WrapperProps: {
      width: '100%',
      mr: {
        _: 0,
        md: 2,
      },
      mb: {
        _: 2,
        md: 0,
      },
    },
    ErrorMessageProps: {
      position: 'absolute',
    },
    label: 'Your e-mail',
    placeholder: 'ie. john.doe@email.com',
  },
  ButtonProps: {
    variant: 'primary',
    children: 'Subscribe',
    height: 56,
    mt: {
      _: '0',
      md: 31,
    },
  },
  ...data.newsletter,
};

export default Newsletter;
