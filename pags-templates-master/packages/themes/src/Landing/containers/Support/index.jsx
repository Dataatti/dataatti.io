import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Accordion from '@pagerland/common/src/components/Accordion';
import Card from '@pagerland/common/src/components/Card';
import Icon from '@pagerland/common/src/components/Icon';

import Minus from '@pagerland/icons/src/line/Minus';
import Plus from '@pagerland/icons/src/line/Plus';

import { Form, Formik } from 'formik';
import Input from '@pagerland/common/src/components/Formik/Input';
import Submit from '@pagerland/common/src/components/Formik/Submit';

import data from '../../data';

const Support = ({
  name,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ColumnsWrapperProps,
  FaqColumnProps,
  FaqTitleProps,
  FaqTextProps,
  AccordionProps,
  AccordionItemProps,
  AccordionItemIconProps,
  AccordionItemTitleProps,
  AccordionItemTextProps,
  MailerColumnProps,
  MailerTitleProps,
  MailerTextProps,
  FormProps,
  ButtonProps,
  SuccessMessageProps,
  SuccessMessageTextProps,
  ErrorMessageProps,
  ErrorMessageTextProps,
  title,
  text,
  faq,
  mailer,
  form,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Box {...ColumnsWrapperProps}>
        <Box {...FaqColumnProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...FaqTitleProps}>{faq.title}</Typography>
            <Typography {...FaqTextProps}>{faq.text}</Typography>
          </Fade>
          <Accordion
            options={faq.options}
            renderItem={({ option, key, onSelect, isSelected }) => (
              <Fade bottom duration={600} delay={key * 100}>
                <Card as="button" onClick={onSelect} {...AccordionItemProps}>
                  <Box flexBox>
                    <Icon icon={isSelected ? Minus : Plus} {...AccordionItemIconProps} />
                    <div>
                      <Typography {...AccordionItemTitleProps}>{option.title}</Typography>
                      <Fade duration={600} collapse when={isSelected}>
                        <Typography {...AccordionItemTextProps}>{option.text}</Typography>
                      </Fade>
                    </div>
                  </Box>
                </Card>
              </Fade>
            )}
            {...AccordionProps}
          />
        </Box>
        <Box {...MailerColumnProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...MailerTitleProps}>{mailer.title}</Typography>
            <Typography {...MailerTextProps}>{mailer.text}</Typography>
          </Fade>
          <Box {...FormProps}>
            <Fade duration={600} collapse when={!!form.hasSuccessStatus}>
              <Box pb={3}>
                <Card {...SuccessMessageProps}>
                  <Typography {...SuccessMessageTextProps}>{mailer.successMessage}</Typography>
                </Card>
              </Box>
            </Fade>
            <Fade duration={600} collapse when={!!form.hasErrorStatus}>
              <Box pb={3}>
                <Card {...ErrorMessageProps}>
                  <Typography {...ErrorMessageTextProps}>{mailer.errorMessage}</Typography>
                </Card>
              </Box>
            </Fade>
            <Formik
              validationSchema={form.validationSchema}
              onSubmit={form.onSubmit}
              initialValues={form.fields.reduce(
                (acc, field) => ({
                  ...acc,
                  [field.name]: field.initialValue,
                }),
                {},
              )}
            >
              <Form>
                <Fade cascade bottom duration={600}>
                  <div>
                    {form.fields.map(field => (
                      <Input key={field.name} {...field} />
                    ))}
                    <Submit type="submit" {...ButtonProps}>
                      {mailer.sendButtonText}
                    </Submit>
                  </div>
                </Fade>
              </Form>
            </Formik>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

Support.propTypes = {
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
   * Props of column wrapper component
   * @See @pagerland/common/src/components/Box
   */
  ColumnsWrapperProps: PropTypes.object,
  /**
   * Props of faq container
   * @See @pagerland/common/src/components/Box
   */
  FaqColumnProps: PropTypes.object,
  /**
   * Props of faq title node
   * @See @pagerland/common/src/components/Typography
   */
  FaqTitleProps: PropTypes.object,
  /**
   * Props of faq text node
   * @See @pagerland/common/src/components/Typography
   */
  FaqTextProps: PropTypes.object,
  /**
   * Props of accordion component
   * @See @pagerland/common/src/components/Accordion
   */
  AccordionProps: PropTypes.object,
  /**
   * Single item in accordion props
   * @See @pagerland/common/src/components/Card
   */
  AccordionItemProps: PropTypes.object,
  /**
   * Icon in accordion item props
   * @See @pagerland/common/src/components/Icon
   */
  AccordionItemIconProps: PropTypes.object,
  /**
   * Title text in accordion item props
   * @See @pagerland/common/src/components/Typography
   */
  AccordionItemTitleProps: PropTypes.object,
  /**
   * Main content text in accordion item props
   * @See @pagerland/common/src/components/Typography
   */
  AccordionItemTextProps: PropTypes.object,
  /**
   * Props of mailer container
   * @See @pagerland/common/src/components/Box
   */
  MailerColumnProps: PropTypes.object,
  /**
   * Props of mailer title node
   * @See @pagerland/common/src/components/Typography
   */
  MailerTitleProps: PropTypes.object,
  /**
   * Props of mailer text node
   * @See @pagerland/common/src/components/Typography
   */
  MailerTextProps: PropTypes.object,
  /**
   * Form wrapper props
   * @See @pagerland/common/src/components/Box
   */
  FormProps: PropTypes.object,
  /**
   * Send button props
   * @See @pagerland/common/src/components/Button
   */
  ButtonProps: PropTypes.object,
  /**
   * Props of success message
   * @See @pagerland/common/src/components/Box
   */
  SuccessMessageProps: PropTypes.object,
  /**
   * Props of success message text
   * @See @pagerland/common/src/components/Box
   */
  SuccessMessageTextProps: PropTypes.object,
  /**
   * Props of error message
   * @See @pagerland/common/src/components/Box
   */
  ErrorMessageProps: PropTypes.object,
  /**
   * Props of error message text
   * @See @pagerland/common/src/components/Box
   */
  ErrorMessageTextProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main text node of component
   */
  text: PropTypes.node,
  /**
   * FAQ Details
   */
  faq: PropTypes.shape({
    title: PropTypes.node,
    text: PropTypes.node,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.node,
        text: PropTypes.node,
      }),
    ),
  }),
  /**
   * Mailer Details
   */
  mailer: PropTypes.shape({
    title: PropTypes.node,
    text: PropTypes.node,
    sendButtonText: PropTypes.node,
    successMessage: PropTypes.node,
    errorMessage: PropTypes.node,
  }),
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
    /**
     * If show success message
     */
    hasSuccessStatus: PropTypes.bool,
    /**
     * If show error message
     */
    hasErrorStatus: PropTypes.bool,
    /**
     * List of fields
     */
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Name of field
         */
        name: PropTypes.string.isRequired,
        /**
         * Type of field
         */
        type: PropTypes.string,
        /**
         * Placeholder for field
         */
        placeholder: PropTypes.string,
        /**
         * Initial value used in formik
         */
        initialValue: PropTypes.string,
      }),
    ),
  }),
};

Support.defaultProps = {
  ...data.support,
  WrapperProps: {
    py: {
      _: 30,
      md: 100,
    },
  },
  CaptionProps: {
    maxWidth: 544,
    mb: {
      _: 30,
      md: 100,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    accent: true,
    mb: 3,
  },
  TextProps: {
    variant: 'body1',
  },
  ColumnsWrapperProps: {
    flexBox: true,
    justifyContent: 'space-between',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  FaqColumnProps: {
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: 544,
    width: '100%',
  },
  FaqTitleProps: {
    as: 'h4',
    variant: 'h4',
  },
  FaqTextProps: {
    variant: 'h5',
    color: 'primary',
  },
  AccordionProps: {
    mt: {
      _: 24,
      md: 48,
    },
  },
  AccordionItemProps: {
    py: 24,
    pl: {
      _: 24,
      md: 16,
    },
    pr: {
      _: 24,
      md: 32,
    },
    mb: 2,
  },
  AccordionItemIconProps: {
    fontSize: 24,
    color: 'primary',
    lineHeight: 1,
    mr: 3,
    mt: '1px',
    display: {
      _: 'none',
      md: 'block',
    },
  },
  AccordionItemTitleProps: {
    variant: 'h5',
    color: 'gray.0',
  },
  AccordionItemTextProps: {
    color: 'gray.1',
    pt: 3,
    pr: 3,
  },
  MailerColumnProps: {
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: 448,
    width: '100%',
    mt: {
      _: 48,
      lg: 0,
    },
  },
  MailerTitleProps: {
    as: 'h4',
    variant: 'h4',
  },
  MailerTextProps: {
    variant: 'h5',
    color: 'primary',
  },
  FormProps: {
    mt: {
      _: 24,
      md: 48,
    },
  },
  ButtonProps: {
    mt: 24,
    variant: 'primary',
  },
  SuccessMessageProps: {
    bg: 'accent',
    color: 'gray.6',
  },
  SuccessMessageTextProps: {
    fontWeight: 600,
  },
  ErrorMessageProps: {
    bg: 'error',
    color: 'gray.6',
  },
  ErrorMessageTextProps: {
    fontWeight: 600,
  },
};

export default Support;
