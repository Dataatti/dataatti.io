import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { base } from '@pagerland/common/src/utils';

import Typography from '@pagerland/common/src/components/Typography';
import CommonBadge from '@pagerland/common/src/components/Badge';
import { Wrapper as ButtonWrapper } from '@pagerland/common/src/components/Button/styled.components';

import { colors, space, transition } from '../../styles';

export const Wrapper = styled.div`
  position: relative;
  ${base};
`;

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.small}px;
  box-shadow: 0 24px 48px rgba(31, 59, 71, 0.1);

  ${props =>
    props.disabled &&
    css`
      opacity: 0.3 !important;
    `}

  &::before {
    display: block;
    padding-top: 70%;
    content: '';
  }

  ${props =>
    props.placeholder &&
    css`
      border: 1px solid ${props.theme.colors.gray[4]};
      box-shadow: none;
      color: ${props.theme.colors.gray[4]};

      svg {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -102.5px;
        margin-top: -15px;
      }
    `}

  ${base};
`;

export const ImgInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${base};

  img {
    width: 100%;
  }
`;

export const Title = styled(Typography).attrs({ variant: 'h5' })`
  margin-top: ${space[2]}px;
  color: ${colors.gray[0]};
  text-align: center;

  ${base}
`;

export const Badge = styled(CommonBadge)`
  position: absolute;
  top: -${space[3]}px;
  left: -${space[3]}px;
  z-index: 2;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => transparentize(0.1, props.theme.colors.secondary)};
  opacity: 0;
  transition: ${transition.all};
  transform: scale(1.2);

  &:hover {
    opacity: 1;
    transform: scale(1);
  }

  ${ButtonWrapper} {
    margin: 0 !important;
    border-radius: 0;
    box-shadow: none;

    &:first-child {
      border-top-left-radius: ${props => props.theme.borderRadius.small}px;
      border-bottom-left-radius: ${props => props.theme.borderRadius.small}px;
    }

    &:last-child {
      border-top-right-radius: ${props => props.theme.borderRadius.small}px;
      border-bottom-right-radius: ${props => props.theme.borderRadius.small}px;
    }
  }
`;
