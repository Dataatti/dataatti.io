import styled from 'styled-components';

import Img from '@pagerland/common/src/components/Img';
import { base } from '@pagerland/common/src/utils';

import dashedCircle from './dashedCircle.svg';
import fullCircle from './fullCircle.svg';
import square from './square.svg';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 70px;
  height: 70px;

  &.fancy {
    width: 130px;
    height: 130px;
  }

  ${base};
`;

export const Image = styled(Img)`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const DashedCircle = styled.img.attrs({ src: dashedCircle })`
  position: absolute;
  top: 90px;
  left: -30px;
  z-index: 2;
`;

export const FullCircle = styled.img.attrs({ src: fullCircle })`
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 2;
`;

export const Square = styled.img.attrs({ src: square })`
  position: absolute;
  top: 20px;
  left: 108px;
  z-index: 2;
`;
