import styled from 'styled-components';
import media from 'styled-media-query';

import Box from '@pagerland/common/src/components/Box';

export const CardsGrid = styled(Box)`
  margin-bottom: -30px;
  column-count: 2;
  column-gap: 30px;

  ${media.lessThan('medium')`
    column-count: 1;
  `}

  ${media.lessThan('large')`
    margin-top: 60px;
  `}

  & > * {
    break-inside: avoid-column;
  }
`;
