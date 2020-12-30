import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Check from '@pagerland/icons/src/line/Check';
import Minus from '@pagerland/icons/src/line/Minus';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Typography from '@pagerland/common/src/components/Typography';
import Switch from '@pagerland/common/src/components/Switch';
import Card from '@pagerland/common/src/components/Card';
import List from '@pagerland/common/src/components/List';
import Icon from '@pagerland/common/src/components/Icon';
import Button from '@pagerland/common/src/components/Button';

import data from '../../data';
import { CardWrapper } from './styled.components';
import { borderRadius } from '../../styles';

const Pricing = ({
  WrapperProps,
  ContainerProps,
  GridProps,
  CaptionProps,
  TitleProps,
  TextProps,
  SwitchWrapperProps,
  SwitchTextProps,
  SwitchProps,
  CardContainerProps,
  CardWrapperProps,
  CardProps,
  CardTitleProps,
  CardPriceProps,
  CardListProps,
  CardListItemProps,
  CardListItemActiveProps,
  CardListIconCheckProps,
  CardListIconMinusProps,
  CardButtonProps,
  sections,
  name,
  prices,
  title,
  text,
}) => {
  const [selectedSection, setSelectedSection] = useState('a');

  const handleToggleSection = () => setSelectedSection(selected => (selected === 'a' ? 'b' : 'a'));
  const handleSelectA = () => setSelectedSection('a');
  const handleSelectB = () => setSelectedSection('b');

  return (
    <Box {...WrapperProps}>
      <Container {...ContainerProps} name={name}>
        <Grid {...GridProps}>
          <Box {...CaptionProps}>
            <Fade cascade bottom duration={600}>
              <Typography {...TitleProps}>{title}</Typography>
              {text ? <Typography {...TextProps}>{text}</Typography> : <></>}
            </Fade>
          </Box>
          <Box {...SwitchWrapperProps}>
            <Fade bottom delay={100} duration={600}>
              <Typography onClick={handleSelectA} {...SwitchTextProps}>
                {prices?.types?.a}
              </Typography>
              <Switch
                checked={selectedSection === 'b'}
                onToggle={handleToggleSection}
                {...SwitchProps}
              />
              <Typography onClick={handleSelectB} {...SwitchTextProps}>
                {prices?.types?.b}
              </Typography>
            </Fade>
          </Box>

          <Box {...CardContainerProps}>
            <Reveal effect="cards" duration={600}>
              <CardWrapper {...CardWrapperProps}>
                {prices?.sections?.map((section, i) => (
                  <Card key={i} {...CardProps} {...sections[i]?.CardProps}>
                    <Typography {...CardTitleProps} {...sections[i]?.CardTitleProps}>
                      {section.title}
                    </Typography>
                    <Typography {...CardPriceProps} {...sections[i]?.CardPriceProps}>
                      {selectedSection === 'a' ? section.price?.a : section.price?.b}
                    </Typography>

                    <List {...CardListProps} {...sections[i]?.CardListProps}>
                      {section.features?.map((feature, key) => (
                        <List.Item
                          key={key}
                          {...CardListItemProps}
                          {...(feature.check ? CardListItemActiveProps : {})}
                          {...sections[i]?.CardListItemProps}
                          {...(feature.check ? sections[i]?.CardListItemProps : {})}
                        >
                          <Icon
                            icon={feature.check ? Check : Minus}
                            {...(feature.check ? CardListIconCheckProps : CardListIconMinusProps)}
                            {...(feature.check
                              ? sections[i]?.CardListIconCheckProps
                              : sections[i]?.CardListIconMinusProps)}
                          />
                          {feature.text}
                        </List.Item>
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
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

const CardPropTypes = {
  CardProps: PropTypes.object,
  CardTitleProps: PropTypes.object,
  CardPriceProps: PropTypes.object,
  CardListProps: PropTypes.object,
  CardListItemProps: PropTypes.object,
  CardListItemActiveProps: PropTypes.object,
  CardListIconCheckProps: PropTypes.object,
  CardListIconMinusProps: PropTypes.object,
  CardButtonProps: PropTypes.object,
};

Pricing.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  prices: PropTypes.shape({
    types: PropTypes.shape({
      a: PropTypes.node,
      b: PropTypes.node,
    }),
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.node,
        price: PropTypes.shape({
          a: PropTypes.node,
          b: PropTypes.node,
        }),
        features: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.node,
            check: PropTypes.bool,
          }),
        ),
        button: PropTypes.shape({
          text: PropTypes.node,
          ButtonProps: PropTypes.object,
        }),
      }),
    ),
  }),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  GridProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  SwitchWrapperProps: PropTypes.object,
  SwitchTextProps: PropTypes.object,
  SwitchProps: PropTypes.object,
  CardContainerProps: PropTypes.object,
  CardWrapperProps: PropTypes.object,
  ...CardPropTypes,
  sections: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
};

Pricing.defaultProps = {
  ContainerProps: {
    py: {
      _: 32,
      md: 48,
      lg: 96,
    },
  },
  GridProps: {
    gridTemplateAreas: '"caption" "switch" "cards"',
    gridRowGap: '30px',
  },
  CaptionProps: {
    maxWidth: 770,
    textAlign: 'center',
    mx: 'auto',
    gridArea: 'caption',
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
  TextProps: {
    variant: 'body2',
    color: 'gray.1',
    mt: {
      _: 3,
      lg: 4,
    },
  },
  SwitchWrapperProps: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
    gridArea: 'switch',
    mb: {
      _: 3,
      lg: 5,
    },
  },
  SwitchTextProps: {
    as: 'label',
  },
  SwitchProps: {
    mx: 3,
  },
  RadioProps: {
    IndicatorProps: {
      color: 'primary',
    },
    mr: 30,
  },
  CardContainerProps: {
    gridArea: 'cards',
  },
  CardWrapperProps: {
    flexBox: true,
    justifyContent: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  CardProps: {
    display: 'flex',
    flexDirection: 'column',
    flex: {
      _: '0 0 1',
      lg: '0 0 300px',
    },
    p: 30,
    my: {
      _: 0,
      lg: 30,
    },
  },
  CardTitleProps: {
    textAlign: 'center',
    as: 'h4',
    variant: 'h6',
    color: 'invert',
    mb: {
      _: 2,
      lg: 3,
    },
  },
  CardPriceProps: {
    variant: 'h2',
    color: 'brand',
    textAlign: 'center',
  },
  CardListProps: {
    mt: 30,
  },
  CardListItemProps: {
    display: 'flex',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: {
      _: 'center',
      lg: 'flex-start',
    },
    mb: 12,
  },
  CardListItemActiveProps: {
    color: 'invert',
    fontWeight: 500,
  },
  CardListIconCheckProps: {
    color: 'brand',
    fontSize: 24,
    lineHeight: 1,
    mr: 3,
  },
  CardListIconMinusProps: {
    color: 'gray.4',
    fontSize: 24,
    lineHeight: 1,
    mr: 3,
  },
  CardButtonProps: {
    mt: {
      _: 3,
      lg: 48,
    },
    variant: 'outline',
    mx: 'auto',
  },
  sections: [
    {
      CardProps: {
        borderTopRightRadius: {
          _: borderRadius.xxLarge,
          lg: 0,
        },
        borderBottomLeftRadius: {
          _: 0,
          lg: borderRadius.xxLarge,
        },
        borderBottomRightRadius: 0,
      },
    },
    {
      CardProps: {
        my: 0,
        flex: {
          _: '0 0 1',
          lg: '0 0 330px',
        },
        zIndex: 2,
        py: {
          _: 30,
          lg: 60,
        },
        borderRadius: {
          _: 0,
          lg: borderRadius.xxLarge,
        },
      },
      CardButtonProps: {
        variant: 'brand',
      },
    },
    {
      CardProps: {
        borderBottomLeftRadius: {
          _: borderRadius.xxLarge,
          lg: 0,
        },
        borderTopRightRadius: {
          _: 0,
          lg: borderRadius.xxLarge,
        },
        borderTopLeftRadius: 0,
      },
    },
  ],
  ...data.pricing,
};

export default Pricing;
