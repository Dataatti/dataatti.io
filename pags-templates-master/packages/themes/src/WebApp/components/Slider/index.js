import { css } from 'styled-components';
import { breakpoints, colors, transition } from '../../styles';

export default {
  main: css`
    .slick-arrow {
      position: absolute;
      top: 50%;
      z-index: 99;
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 90px;
      margin-top: -45px;
      font-size: 48px;
      color: ${colors.gray[6]};
      cursor: pointer;
      background-color: ${colors.tertiary};
      border: 0;
      border-radius: 50%;
      outline: none;
      transition: ${transition.all};
      appearance: none;

      @media (max-width: ${breakpoints.md}) {
        width: 40px;
        height: 40px;
        margin-top: -20px;
        font-size: 24px;
      }

      &.slick-prev {
        left: 0;
      }

      &.slick-next {
        right: 0;
      }

      &:hover {
        background-color: ${colors.shades.tertiary[1]};
      }

      &:active,
      &:focus {
        background-color: ${colors.shades.tertiary[2]};
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
