import { css } from 'styled-components';

import { Wrapper } from '@pagerland/common/src/components/Icon/styled.components';

import Typography from '../Typography';
import { borderRadius, colors } from '../../styles';

export default {
  main: css`
    ${Typography.variants.button};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: ${borderRadius.normal}px;
    color: ${colors.gray[6]};
    background-color: ${colors.brand};

    ${Wrapper} {
      margin-right: 8px;
      font-size: 24px;
    }
  `,
};
