export const space = [0, 4, 8, 16, 32, 64];

export const colors = {
  primary: '#189AB4',
  secondary: '#05445E',
  accent: '#26CFBD',
  neutral: '#70AAC2',
  error: '#E1544B',
  success: '#26CFBD',
  gray: ['#144052', '#3D778F', '#70AAC2', '#B8D4E0', '#DBEAF0', '#F8FBFC', '#FFFFFF'],
  shades: {
    primary: ['#127487', '#189AB4', '#1EC1E1', '#4BCDE7', '#78DAED'],
    secondary: ['#02202C', '#05445E', '#07668C', '#0A89BD', '#0DACED'],
    accent: ['#1EA496', '#26CFBD', '#4ADECE', '#75E6DA', '#A0EEE6'],
  },
};

export const typography = {
  googleFont:
    'https://fonts.googleapis.com/css?family=Work+Sans:300,400,400i,500,600,700,800&display=swap',
  fontFamily: '"Work Sans", sans-serif',
  color: colors.gray[0],
  sizes: {
    base: 17,
  },
};

export const body = {
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: colors.gray[1],
};

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
  small: 8,
  normal: 12,
  large: 15,
  xLarge: 25,
};

export const breakpoints = ['450px', '768px', '1170px', '1440px'];
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];
