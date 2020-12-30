import { css } from 'styled-components';
import { transparentize } from 'polished';
import { breakpoints, colors, transition } from '../../styles';

export default {
  main: css`
    .slick-list {
      margin: 0 -2000px;

      @media (max-width: ${breakpoints.md}) {
        margin: 0 -16px;
      }
    }

    .slick-slide {
      opacity: 0.3;
      transition: ${transition.all};

      &.slick-active {
        opacity: 1;
      }
    }

    .slick-arrow {
      position: absolute;
      top: 50%;
      z-index: 99;
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      margin-top: -28px;
      font-size: 32px;
      color: ${colors.gray[6]};
      cursor: pointer;
      background-color: ${colors.shades.primary[2]};
      border: 0;
      border-radius: 50%;
      outline: none;
      box-shadow: 0 24px 48px ${transparentize(0.8, colors.shades.primary[2])};
      transition: ${transition.all};
      appearance: none;

      &.slick-prev {
        left: 0;
      }

      &.slick-next {
        right: 0;
      }

      &:hover {
        background-color: ${colors.shades.primary[3]};
      }

      &:active,
      &:focus {
        background-color: ${colors.shades.primary[4]};
      }

      &.slick-disabled {
        cursor: default;
        background-color: ${colors.gray[4]} !important;
        box-shadow: none;
      }

      svg {
        display: block;
      }
    }
  `,
};
