import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { darken, lighten } from 'polished';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Icon from '@pagerland/common/src/components/Icon';
import ShoppingBasket from '@pagerland/icons/src/line/ShoppingBasket';
import Link from '@pagerland/common/src/components/Link';
import theme from '@pagerland/themes/src/Landing/theme';
import Global from '@pagerland/common/src/components/Global';

import DemoIframe from '../components/DemoIframe';
import SEO from '../components/SEO';
import CoffeeCreamLogo from '../components/CoffeeCreamLogo';
import Button from '../components/Button';
import DemoSelector from '../components/DemoSelector';
import DemoSelectorPopup from '../components/DemoSelectorPopup';

import { demos } from '../../config/demos';

const Demo = ({
  pageContext,
  WrapperProps,
  SwitchWrapper,
  ContainerProps,
  LogoLinkProps,
  BuyButtonProps,
  BuyButtonTextProps,
}) => {
  const [visiblePopUp, setVisiblePopUp] = useState(false);

  const currentDemoIndex = useMemo(() => demos.findIndex(demo => demo.slug === pageContext.slug), [
    pageContext,
  ]);

  const nextDemo = currentDemoIndex === demos.length - 1 ? demos[0] : demos[currentDemoIndex + 1];
  const prevDemo = currentDemoIndex === 0 ? demos[demos.length - 1] : demos[currentDemoIndex - 1];

  const openPopUp = useCallback(() => {
    setVisiblePopUp(true);
  }, [setVisiblePopUp]);

  const closePopUp = useCallback(() => {
    setVisiblePopUp(false);
  }, [setVisiblePopUp]);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: {
          primary: '#6FB418',
          secondary: '#222',
          accent: '#538712',
          gray: ['#262522', '#5C5B57', '#ADADAB', '#E0E0DF', '#EBEAEA', '#F9F9F9', '#FFFFFF'],
          shades: {
            primary: [
              darken(0.2, '#6FB418'),
              darken(0.4, '#6FB418'),
              '#6FB418',
              lighten(0.1, '#6FB418'),
              lighten(0.2, '#6FB418'),
            ],
            secondary: ['#262522', '#5C5B57', '#ADADAB', '#E0E0DF', '#EBEAEA', '#F9F9F9'],
            accent: [
              darken(0.2, '#538712'),
              darken(0.4, '#538712'),
              '#538712',
              lighten(0.1, '#538712'),
              lighten(0.2, '#538712'),
            ],
          },
        },
        typography: {
          ...theme.typography,
          fontFamily: 'Inter, sans-serif',
        },
        body: {
          ...theme.body,
          fontFamily: 'Inter, sans-serif',
        },
        borderRadius: {
          small: 4,
          normal: 6,
          large: 8,
          xLarge: 10,
        },
      }}
    >
      <Global />
      <SEO title={`[${pageContext.platform.title}] ${pageContext.title}`} />
      <DemoSelectorPopup onClose={closePopUp} visible={visiblePopUp} />
      <Box {...WrapperProps}>
        <Box {...SwitchWrapper}>
          <Container {...ContainerProps}>
            <Link {...LogoLinkProps}>
              <CoffeeCreamLogo />
            </Link>

            <DemoSelector
              onClick={openPopUp}
              prevUrl={`/demo/${pageContext.platform.slug}/${prevDemo.slug}`}
              nextUrl={`/demo/${pageContext.platform.slug}/${nextDemo.slug}`}
              currentTheme={`[${pageContext.platform.title}] ${pageContext.title}`}
            />

            <Button {...BuyButtonProps}>
              <Icon icon={ShoppingBasket} />
              <Box {...BuyButtonTextProps}>Buy on Themeforest</Box>
            </Button>
          </Container>
        </Box>
        <DemoIframe
          frameBorder="0"
          title="demo-frame"
          src={`/${pageContext.platform.slug}/${pageContext.slug}`}
        />
      </Box>
    </ThemeProvider>
  );
};

Demo.propTypes = {
  pageContext: PropTypes.shape({
    platform: PropTypes.shape({
      slug: PropTypes.oneOf(['gatsby', 'next']).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  WrapperProps: PropTypes.object,
  SwitchWrapper: PropTypes.object,
  ContainerProps: PropTypes.object,
  LogoLinkProps: PropTypes.object,
  BuyButtonProps: PropTypes.object,
  BuyButtonTextProps: PropTypes.object,
};

Demo.defaultProps = {
  WrapperProps: {
    flexBox: true,
    flexDirection: 'column',
    height: '100vh',
  },
  SwitchWrapper: {
    height: 64,
    bg: '#222',
    flexBox: true,
    alignItems: 'center',
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LogoLinkProps: {
    href: 'https://themeforest.net/user/coffeecream',
    target: '_blank',
    rel: 'noreferrer',
    display: {
      _: 'none',
      lg: 'inline',
    },
  },
  BuyButtonProps: {
    href: 'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    target: '_blank',
    rel: 'noreferrer',
  },
  BuyButtonTextProps: {
    as: 'span',
    display: {
      _: 'none',
      lg: 'inline',
    },
    ml: 24,
  },
};

export default Demo;
