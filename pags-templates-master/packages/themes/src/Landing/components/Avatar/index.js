import { css } from 'styled-components';
import { colors } from '../../styles';

export default {
  main: css`
    width: 48px;
    height: 48px;
    border: 1px solid ${colors.gray[4]};
    border-radius: 50%;
    object-fit: cover;
  `,
};
