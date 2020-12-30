import { css } from 'styled-components';
import { variant } from '@pagerland/common/src/utils';

import { colors, transition } from '../../styles';
import Typography from '../Typography';

export default {
  main: css`
    ${Typography.main};
    ${Typography.variants.button2};

    padding: 10px 30px;
    white-space: nowrap;
    border-radius: 15px;
    transition: ${transition.all};

    ${variant({
      prop: 'variant',
      scale: 'Button.variants',
    })}
    ${variant({
      prop: 'size',
      scale: 'Button.sizes',
    })}
  `,
  variants: ['primary', 'secondary', 'tertiary', 'quaternary'].reduce(
    (variants, color) => ({
      ...variants,
      [color]: css`
        ${props =>
          props.outlined
            ? css`
                color: ${colors[color]};
                background: transparent;
                box-shadow: inset 0 0 0 2px ${colors[color]};

                &:hover {
                  color: ${colors.shades[color][1]};
                  box-shadow: inset 0 0 0 2px ${colors.shades[color][1]};
                }

                &:active,
                &:focus {
                  color: ${colors.shades[color][2]};
                  box-shadow: inset 0 0 0 2px ${colors.shades[color][2]};
                }
              `
            : css`
                color: ${colors.gray[7]};
                background: ${colors[color]};

                &:hover {
                  background: ${colors.shades[color][1]};
                }

                &:active,
                &:focus {
                  background: ${colors.shades[color][2]};
                }
              `}
      `,
    }),
    {},
  ),
  sizes: {
    small: css`
      padding: 6px 16px;
      border-radius: 8px;
      ${Typography.variants.button};
    `,
    large: css`
      padding: 20px 30px;
      ${Typography.variants.button1};
      border-radius: 15px;
    `,
  },
};
