import styled from 'styled-components';
import Img from '@pagerland/common/src/components/Img';
import Typography from '@pagerland/common/src/components/Typography';

export const RoundedImage = styled(Img)`
  border-radius: 128px 0;
`;

export const TextWithLink = styled(Typography)`
  a {
    color: #D06F3F;
    text-decoration: none;
  }
`;