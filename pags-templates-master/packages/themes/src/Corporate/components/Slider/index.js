import { css } from 'styled-components';
import { colors, transition } from '../../styles';

export default {
  main: css`
    position: relative;

    .slick-dots {
      position: absolute;
      bottom: -24px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;

      button {
        display: block;
        width: 12px;
        height: 12px;
        padding: 0;
        margin: 0 4px;
        text-indent: -9999px;
        cursor: pointer;
        border: 2px solid ${colors.brand};
        background-color: transparent;
        border-radius: 50%;
        outline: none;
        transition: ${transition.all};

        &:hover {
          background-color: ${colors.brand};
        }
      }

      .slick-active button {
        background-color: ${colors.brand};
      }
    }
  `,
};
