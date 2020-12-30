import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Img from '@pagerland/common/src/components/Img';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  opacity: ${props => (props.theme.mode === 'dark' ? 0.4 : 0.2)};
`;

const calc = o => `translateY(${o * 0.1}px)`;

const ParallaxBackground = props => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const newOffset = window.pageYOffset - posY;
    setOffset(newOffset * 2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={ref}>
      <StyledImg
        {...props}
        style={{
          transform: calc(offset),
        }}
      />
    </Wrapper>
  );
};

export default ParallaxBackground;
