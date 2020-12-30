import _ from 'lodash';
import { css } from 'styled-components';
import { borderRadius, colors } from '../../styles';

export default {
  main: css`
    position: relative;
    padding: 24px 32px;
    text-align: left;
    background-color: ${colors.gray[4]};
    border: none;
    border-radius: ${borderRadius.normal}px;
    outline: none !important;

    button& {
      cursor: pointer;
    }

    ${props =>
      props.bubble &&
      css`
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 100%;
          left: 24px;
          border: 32px solid transparent;
          border-top-color: ${colors.gray[4]};
          border-bottom: 0;
          border-left: 0;
        }
      `}

    ${props =>
      props.boxShadow &&
      css`
        box-shadow: ${props.boxShadow
          .map(shadow => `${shadow[0]}px ${shadow[1]}px ${shadow[2]}px ${_.get(colors, shadow[3], shadow[3])}`)
          .join(', ')};
      `}
  `,
};
