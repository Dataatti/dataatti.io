import React from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

import { AngleLeft, AngleRight } from '@pagerland/icons/src/line';
import Icon from '@pagerland/common/src/components/Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Selector = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 100% 0 0;
  max-width: 400px;
  height: 40px;
  padding: 0 16px;
  margin: 0 16px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 150%;
  color: #222;
  cursor: pointer;
  user-select: none;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;

  ${media.lessThan('medium')`
    margin: 0;
  `}
`;

const ArrowButton = styled(Link)`
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

const DemoSelector = ({ currentTheme, nextUrl, prevUrl, onClick }) => (
  <Wrapper>
    <ArrowButton to={prevUrl}>
      <Icon icon={AngleLeft} />
    </ArrowButton>
    <Selector onClick={onClick}>{currentTheme}</Selector>
    <ArrowButton to={nextUrl}>
      <Icon icon={AngleRight} />
    </ArrowButton>
  </Wrapper>
);

DemoSelector.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
  prevUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DemoSelector;
