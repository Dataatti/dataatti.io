import { css } from 'styled-components';
import { boxShadow } from 'styled-system';
import { borderRadius, colors } from '../../styles';

export default {
  main: css`
    padding: 30px 45px;
    text-align: left;
    background-color: ${colors.gray[7]};
    border: none;
    border-radius: ${borderRadius.large}px;
    outline: none !important;
    box-shadow: 0 30px 60px rgba(32, 74, 101, 0.07);

    button& {
      cursor: pointer;
    }

    ${boxShadow}
  `,
};
