import styled from 'styled-components';
import Card from '@pagerland/common/src/components/Card';
import { breakpoints, colors, transition } from '../../styles';

export const FeatureItem = styled(Card).attrs({ as: 'button' })`
  position: relative;
  padding: 30px 45px;
  background-color: ${props => (props.active ? colors.gray[7] : 'transparent')};
  border-radius: 30px;
  box-shadow: ${props => (props.active ? '0px 30px 60px rgba(32, 74, 101, 0.07)' : 'none')};
  transition: ${transition.all};

  @media (max-width: ${breakpoints.lg}) {
    padding: 0;
    margin-bottom: 60px;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }
`;
