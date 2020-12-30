import { css } from 'styled-components';

export const space = [0, 4, 8, 16, 32, 64];

export const colors = {
  brand: '#23c577',
  error: '#EB5757',
  success: '#27AE60',
  shades: {
    brand: ['#2EFF9B', '#23C577', '#157547'],
  },
  gray: ['#111111', '#1f1f1f', '#444444', '#777777', '#AAAAAA', '#F8F8F8', '#FFFFFF'],
};

export const typography = {
  googleFont: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  fontFamily: "'Inter', sans-serif",
  color: colors.gray[1],
  sizes: {
    base: 20,
  },
};

export const body = css`
  font-size: ${typography.sizes.base}px;
  font-family: ${typography.fontFamily};
  line-height: 1.6;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

export const transition = {
  base: '.2s ease-in-out',
  all: 'all .2s ease-in-out',
};

export const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
};

export const borderRadius = {
  small: 2,
  normal: 4,
  large: 8,
  xLarge: 16,
  xxLarge: 24,
  xxxLarge: 32,
};

export const radii = { ...borderRadius };

export const shadows = {};

export const modes = {
  light: {
    background: colors.gray[6],
    invert: colors.gray[0],
    text: colors.gray[3],
    muted: colors.gray[5],
  },
  dark: {
    background: colors.gray[0],
    invert: colors.gray[6],
    text: colors.gray[4],
    muted: colors.gray[1],
  },
};

export const global = css``;

export const breakpoints = ['450px', '768px', '1170px', '1440px'];
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];
