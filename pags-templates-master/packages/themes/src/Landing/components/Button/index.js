import _ from 'lodash';
import { css } from 'styled-components';
import { variant } from '@pagerland/common/src/utils';
import { transparentize } from 'polished';

import { borderRadius, colors, transition } from '../../styles';
import Typography from '../Typography';

export default {
  main: css`
    ${Typography.main};
    ${Typography.variants.button2};

    padding: 14px 32px;
    white-space: nowrap;
    border-radius: ${borderRadius.small}px;
    transition: ${transition.all};
    ${props =>
      props.bg &&
      css`
        box-shadow: 0 24px 48px ${transparentize(0.84, _.get(colors, props.bg, props.bg))};
      `}

    & > span {
      position: relative;
      z-index: 2;
    }

    & + & {
      margin-left: ${props => props.theme.space[3]}px;
    }

    &[disabled] {
      color: ${props => props.theme.colors.gray[4]};
      cursor: default;
      box-shadow: none;
    }

    ${variant({
      prop: 'size',
      scale: 'Button.sizes',
    })}
    ${variant({
      prop: 'variant',
      scale: 'Button.variants',
    })}
    ${variant({
      prop: 'flat',
      scale: 'Button.flat',
    })}
    ${variant({
      prop: 'icon',
      scale: 'Button.icon',
    })}
  `,
  variants: {
    primary: css`
      color: ${props => props.theme.colors.gray[6]};
      background-color: ${props => props.theme.colors.primary};
      box-shadow: 0 24px 48px ${props => transparentize(0.84, props.theme.colors.primary)};

      &:hover {
        background-color: ${props => props.theme.colors.shades.primary[2]};
      }

      &:focus,
      &:active {
        background-color: ${props => props.theme.colors.shades.primary[3]};
      }

      &[disabled] {
        color: ${props => props.theme.colors.gray[6]};
        background-color: ${props => props.theme.colors.gray[4]};
        box-shadow: none;
      }
    `,
    secondary: css`
      color: ${props => props.theme.colors.gray[6]};
      background-color: ${props => props.theme.colors.secondary};
      box-shadow: 0 24px 48px ${props => transparentize(0.84, props.theme.colors.secondary)};

      &:hover {
        background-color: ${props => props.theme.colors.shades.secondary[2]};
      }

      &:focus,
      &:active {
        background-color: ${props => props.theme.colors.shades.secondary[3]};
      }

      &[disabled] {
        color: ${props => props.theme.colors.gray[6]};
        background-color: ${props => props.theme.colors.gray[4]};
        box-shadow: none;
      }
    `,
    accent: css`
      color: ${props => props.theme.colors.gray[6]};
      background-color: ${props => props.theme.colors.accent};
      box-shadow: 0 24px 48px ${props => transparentize(0.84, props.theme.colors.accent)};

      &:hover {
        background-color: ${props => props.theme.colors.shades.accent[2]};
      }

      &:focus,
      &:active {
        background-color: ${props => props.theme.colors.shades.accent[3]};
      }

      &[disabled] {
        color: ${props => props.theme.colors.gray[6]};
        background-color: ${props => props.theme.colors.gray[4]};
        box-shadow: none;
      }
    `,
    neutral: css`
      background-color: ${props => props.theme.colors.gray[6]};
      box-shadow: 0 24px 48px ${props => transparentize(0.9, props.colors.gray[0])};

      &:hover {
        color: ${props => props.theme.colors.gray[1]};
      }

      &:focus,
      &:active {
        color: ${props => props.theme.colors.gray[2]};
      }

      &[disabled] {
        color: ${props => props.theme.colors.gray[4]};
        box-shadow: none;
      }
    `,
  },
  flat: {
    true: css`
      box-shadow: none;
    `,
  },
  sizes: {
    small: css`
      padding: 6px 16px;
      ${Typography.variants.button};
    `,
    large: css`
      padding: 16px 48px;
      ${Typography.variants.button1};
      border-radius: ${borderRadius.large}px;
    `,
  },
  icon: {
    true: css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      padding: 0;
      font-size: 24px;
      border-radius: 50%;

      span {
        line-height: 1;
      }

      svg {
        display: block;
      }
    `,
  },
};
