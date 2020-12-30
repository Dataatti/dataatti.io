import styled from 'styled-components';
import media from 'styled-media-query';

import { darken, lighten, transparentize } from 'polished';
import { base } from '@pagerland/common/src/utils';

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 8px 24px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
  user-select: none;
  background: ${props => props.theme.colors.primary};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  ${media.lessThan('medium')`
    padding: 8px 16px;
    margin-left: 16px;
  `}

  &:hover {
    background-color: ${props => lighten(0.05, props.theme.colors.primary)};
  }

  &:active,
  &:focus {
    background-color: ${props => darken(0.1, props.theme.colors.primary)};
    box-shadow: 0 0 0 2px ${props => transparentize(0.7, props.theme.colors.primary)};
  }

  svg {
    width: 24px;
    height: 24px;
  }

  ${base}
`;

export default Button;
