import { css } from 'styled-components';
import { variant } from '@pagerland/common/src/utils';

import { lighten } from 'polished';
import { TextWrapper } from '@pagerland/common/src/components/Button/styled.components';
import { borderRadius, colors, transition } from '../../styles';
import Typography from '../Typography';

export default {
  main: css`
    ${Typography.main};
    ${Typography.variants.button};

    box-sizing: border-box;
    padding: 1rem 2rem;
    border-radius: ${borderRadius.large}px;
    white-space: nowrap;
    transition: ${transition.all};

    & + & {
      margin-left: 16px;
    }

    ${variant({
      prop: 'variant',
      scale: 'Button.variants',
    })}
    ${variant({
      prop: 'size',
      scale: 'Button.sizes',
    })}
  `,
  variants: {
    brand: css`
      color: ${colors.gray[6]};
      background-color: ${colors.brand};

      &:hover {
        background-color: ${lighten(0.05, colors.brand)};
      }

      &:active,
      &:focus {
        background-color: ${lighten(0.1, colors.brand)};
      }
    `,
    outline: css`
      padding: calc(1rem - 2px) calc(2rem - 2px);
      color: ${props => props.theme.colors.invert};
      background: none;
      border-width: 2px;
      border-style: solid;
      border-color: ${colors.brand};

      &:hover {
        border-color: ${lighten(0.05, colors.brand)};
      }

      &:active,
      &:focus {
        border-color: ${lighten(0.1, colors.brand)};
      }
    `,
    link: css`
      padding: 0;
      background: none;

      ${TextWrapper} {
        color: ${colors.brand};
      }
    `,
  },
  sizes: {
    small: css`
      ${Typography.variants.button2};
      padding: 14px 24px;
    `,
    large: css`
      ${Typography.variants.button2};
      padding: 20px 32px;
    `,
    huge: css`
      ${Typography.variants.button2};
      font-size: 20px;
      padding: 16px 32px;
    `,
  },
  Icon: {
    main: css`
      color: inherit;
      display: inline-block;
      width: 24px;
      height: 24px;
      font-size: 24px;
      vertical-align: text-top;

      ${variant({
        prop: 'placement',
        scale: 'Button.Icon.placements',
      })}
    `,
    placements: {
      left: css`
        margin-right: 8px;
      `,
      right: css`
        margin-left: 8px;
      `,
    },
  },
};
