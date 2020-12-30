import { css } from 'styled-components';
import { colors } from '../../styles';

export default {
  main: css`
    display: flex;
  `,
  Star: {
    main: css`
      width: 1em;
      height: 1em;
      color: ${colors.gray[4]};

      &.active {
        color: ${colors.accent};
      }
    `,
  },
};
