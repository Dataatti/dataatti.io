import { css } from 'styled-components';
import { borderRadius } from '../../styles';

export default {
  main: css`
    position: relative;
    padding: 3rem;
    text-align: left;
    background-color: ${props => props.theme.colors.muted};
    border: none;
    outline: none !important;
    border-radius: ${borderRadius.xxLarge}px;

    button& {
      cursor: pointer;
    }

    a& {
      color: inherit;
      text-decoration: none;
    }
  `,
};
