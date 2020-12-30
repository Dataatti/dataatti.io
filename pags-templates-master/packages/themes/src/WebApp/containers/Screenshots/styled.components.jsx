import styled from 'styled-components';
import Img from '@pagerland/common/src/components/Img';
import { breakpoints } from '../../styles';

export const Image = styled(Img)`
  display: block;
  max-width: 100%;
  margin: 0 auto 48px;
  border-radius: 5px;
  box-shadow: 0 30px 60px rgba(32, 74, 101, 0.07);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 16px;
  }
`;
