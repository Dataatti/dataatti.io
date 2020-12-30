import { css } from 'styled-components';
import { breakpoints, colors, space } from '../../styles';

export default {
  main: css`
    font-family: ${props => props.theme.body.fontFamily};
    font-size: ${props => props.theme.body.fontSize}px;
    font-weight: 400;
    line-height: ${props => props.theme.body.lineHeight};

    h1&,
    h2&,
    h3&,
    h4&,
    h5&,
    h6& {
      color: ${props => props.theme.colors.gray[0]};
    }

    label& {
      cursor: pointer;
      user-select: none;
    }

    ${props =>
      props.accent &&
      css`
        display: flex;
        align-items: center;

        &::after {
          display: block;
          content: '';
          width: 0.5em;
          height: 0.5em;
          background-color: ${props.theme.colors.accent};
          border-radius: 50%;
          margin-left: ${space[3]}px;
          margin-top: 6px;
          box-shadow: 24px 0 0 ${props.theme.colors.accent}, 48px 0 0 ${props.theme.colors.accent};
        }
      `}
  `,
  variants: {
    h1: css`
      font-size: 42px;
      font-weight: 600;
      line-height: 1.2;

      @media (max-width: ${breakpoints.md}) {
        font-size: 32px;
        line-height: 1.1;
      }
    `,
    h2: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.7,
    },
    body1: {
      fontSize: 22,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 17,
      lineHeight: 1.6,
    },
    body: {
      fontSize: 14,
      lineHeight: 1.7,
    },
    quote1: {
      fontSize: 24,
      lineHeight: 1.4,
      fontStyle: 'italic',
    },
    quote2: {
      fontSize: 18,
      lineHeight: 1.6,
      fontStyle: 'italic',
    },
    button1: {
      fontSize: 24,
      lineHeight: 1.3,
      fontWeight: 600,
      color: colors.gray[0],
    },
    button2: {
      fontSize: 17,
      lineHeight: 1.6,
      fontWeight: 600,
      color: colors.gray[0],
    },
    button: {
      fontSize: 14,
      lineHeight: 1.7,
      fontWeight: 600,
      color: colors.gray[0],
    },
  },
};
