import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Card from '@pagerland/common/src/components/Card';
import List from '@pagerland/common/src/components/List';
import Button from '@pagerland/common/src/components/Button';

import Img from '@pagerland/common/src/components/Img';
import data from '../../data';
import { CardWrapper, ListItem } from './styled.components';
import pricing from '../../assets/pricing.svg';

const Pricing = ({
  WrapperProps,
  SpacerProps,
  ContainerProps,
  CardWrapperProps,
  CardProps,
  CardPriceBadgeProps,
  CardTitleProps,
  CardPriceProps,
  CardPeriodProps,
  CardListProps,
  CardListItemProps,
  CardListItemPrefixProps,
  CardButtonProps,
  sections,
  name,
  prices,
}) => (
  <Box {...WrapperProps} name={name}>
    <Fade top cascade duration={600}>
      <Img src={pricing} alt="Spacer" {...SpacerProps} />
    </Fade>

    <Container {...ContainerProps}>
      <Reveal effect="cards" duration={600}>
        <CardWrapper {...CardWrapperProps}>
          {prices?.sections?.map((section, i) => (
            <Card key={i} {...CardProps} {...sections[i]?.CardProps}>
              <Box {...CardPriceBadgeProps} {...sections[i]?.CardPriceBadgeProps}>
                <Typography {...CardTitleProps} {...sections[i]?.CardTitleProps}>
                  {section.title}
                </Typography>
                <Typography {...CardPriceProps} {...sections[i]?.CardPriceProps}>
                  {section.price}
                </Typography>
                <Typography {...CardPeriodProps} {...sections[i]?.CardPeriodProps}>
                  {section.period}
                </Typography>
              </Box>

              <List {...CardListProps} {...sections[i]?.CardListProps}>
                {section.features?.map((feature, key) => (
                  <ListItem key={key} {...CardListItemProps} {...sections[i]?.CardListItemProps}>
                    <Typography
                      {...CardListItemPrefixProps}
                      {...sections[i]?.CardListItemPrefixProps}
                    >
                      {feature.prefix}
                    </Typography>
                    {' '}
                    {feature.text}
                  </ListItem>
                ))}
              </List>

              <Button
                {...CardButtonProps}
                {...sections[i]?.CardButtonProps}
                {...section.button.ButtonProps}
              >
                {section.button.text}
              </Button>
            </Card>
          ))}
        </CardWrapper>
      </Reveal>
    </Container>
  </Box>
);

const CardPropTypes = {
  /**
   * Main card props
   * @See @pagerland/common/src/components/Card
   */
  CardProps: PropTypes.object,
  /**
   * Wrapper of price details
   * @See @pagerland/common/src/components/Box
   */
  CardPriceBadgeProps: PropTypes.object,
  /**
   * Props of title of the card
   * @See @pagerland/common/src/components/Typography
   */
  CardTitleProps: PropTypes.object,
  /**
   * Props of price in the card
   * @See @pagerland/common/src/components/Typography
   */
  CardPriceProps: PropTypes.object,
  /**
   * Props of price period in the card
   * @See @pagerland/common/src/components/Typography
   */
  CardPeriodProps: PropTypes.object,
  /**
   * Features list props
   * @See @pagerland/common/src/components/List
   */
  CardListProps: PropTypes.object,
  /**
   * Features list single item props
   * @See @pagerland/common/src/components/List
   */
  CardListItemProps: PropTypes.object,
  /**
   * Style of prefix in items
   * @See @pagerland/common/src/components/Typography
   */
  CardListItemPrefixProps: PropTypes.object,
  /**
   * Card button props
   * @See @pagerland/common/src/components/Button
   */
  CardButtonProps: PropTypes.object,
};

Pricing.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Price table related data
   */
  prices: PropTypes.shape({
    /**
     * Sections of price list
     */
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Title of section
         */
        title: PropTypes.node,
        /**
         * Prices divided into types
         */
        price: PropTypes.node,
        /**
         * Period of given price
         */
        period: PropTypes.node,
        /**
         * Features list
         */
        features: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.node,
            prefix: PropTypes.node,
          }),
        ),
        /**
         * Button below features
         */
        button: PropTypes.shape({
          text: PropTypes.node,
          ButtonProps: PropTypes.object,
        }),
      }),
    ),
  }),
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Img spacer props
   * @See @pagerland/common/src/components/Img
   */
  SpacerProps: PropTypes.object,
  /**
   * Container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Price table cards wrapper props. It's needed to use both container and wrapper because of animations
   * @See @pagerland/common/src/components/Box
   */
  CardWrapperProps: PropTypes.object,
  ...CardPropTypes,
  /**
   * Props defined per every card
   */
  sections: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
};

Pricing.defaultProps = {
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
      _: 60,
      lg: 140,
    },
  },
  CardWrapperProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '30px',
  },
  CardProps: {
    display: 'flex',
    flexDirection: 'column',
    p: 0,
    pb: 60,
    my: {
      _: 60,
      lg: 30,
    },
  },
  CardPriceBadgeProps: {
    width: 170,
    height: 170,
    mt: -85,
    mx: 'auto',
    borderRadius: '50%',
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  CardTitleProps: {
    textAlign: 'center',
    as: 'h4',
    variant: 'h4',
  },
  CardPriceProps: {
    variant: 'h1',
    mt: '-4px',
  },
  CardPeriodProps: {
    variant: 'h4',
  },
  CardListProps: {
    mt: 40,
  },
  CardListItemPrefixProps: {
    fontWeight: 'bold',
    as: 'span',
  },
  CardButtonProps: {
    mt: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },
  sections: [
    {
      CardPriceBadgeProps: {
        bg: 'primary',
      },
      CardPriceProps: {
        color: 'gray.7',
      },
      CardButtonProps: {
        variant: 'primary',
      },
    },
    {
      CardPriceBadgeProps: {
        bg: 'secondary',
      },
      CardTitleProps: {
        color: 'gray.7',
      },
      CardPriceProps: {
        color: 'primary',
      },
      CardPeriodProps: {
        color: 'gray.7',
      },
      CardButtonProps: {
        variant: 'secondary',
      },
    },
    {
      CardPriceBadgeProps: {
        bg: 'tertiary',
      },
      CardPriceProps: {
        color: 'gray.7',
      },
      CardButtonProps: {
        variant: 'tertiary',
      },
    },
  ],
  ...data.pricing,
};

export default Pricing;
