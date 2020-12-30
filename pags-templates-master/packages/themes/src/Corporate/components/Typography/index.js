import { css } from 'styled-components';
import { variant } from '@pagerland/common/src/utils';
import { body, breakpoints, colors } from '../../styles';

export default {
  main: css`
    font-family: ${body.fontFamily};
    font-size: ${body.fontSize}px;
    font-weight: 400;
    line-height: ${body.lineHeight};

    label& {
      cursor: pointer;
      user-select: none;
    }

    a& {
      text-decoration: none;
    }

    ${variant({
      prop: 'accent',
      scale: 'Typography.accents',
    })}
  `,
  variants: {
    h1: css`
      font-size: 128px;
      font-weight: 700;
      line-height: 0.85;
      letter-spacing: -0.05em;

      @media (max-width: ${breakpoints.md}) {
        font-size: 64px;
      }
    `,
    h2: css`
      font-size: 96px;
      font-weight: 700;
      line-height: 0.9;
      letter-spacing: -0.05em;

      @media (max-width: ${breakpoints.md}) {
        font-size: 48px;
      }
    `,
    h3: css`
      font-size: 64px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.05em;

      @media (max-width: ${breakpoints.md}) {
        font-size: 48px;
      }
    `,
    h4: css`
      font-size: 48px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.05em;

      @media (max-width: ${breakpoints.md}) {
        font-size: 40px;
      }
    `,
    h5: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.05em',
    },
    h6: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.05em',
    },
    body1: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 20,
      lineHeight: 1.6,
    },
    button: {
      fontSize: 20,
      lineHeight: 1,
      fontWeight: 600,
    },
    button2: {
      fontSize: 16,
      lineHeight: 1,
      fontWeight: 600,
    },
    quote: {
      fontSize: 24,
      lineHeight: 1.4,
      fontStyle: 'italic',
    },
    pricing: {
      fontSize: 16,
      lineHeight: 2.5,
      fontWeight: 500,
    },
  },
  accents: {
    before: css`
      position: relative;

      &::before {
        position: absolute;
        top: -32px;
        left: -64px;
        z-index: -1;
        display: block;
        width: 256px;
        height: 256px;
        content: '';
        background-color: ${colors.brand};
      }
    `,
    after: css`
      position: relative;

      &::after {
        position: absolute;
        top: -32px;
        right: -64px;
        z-index: -1;
        display: block;
        width: 256px;
        height: 256px;
        content: '';
        background-color: ${colors.brand};
      }
    `,
  },
};
