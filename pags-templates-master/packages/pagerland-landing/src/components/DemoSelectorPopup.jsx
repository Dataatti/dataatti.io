import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import media from 'styled-media-query';

import Img from 'gatsby-image';

import Container from '@pagerland/common/src/components/Container';
import Preview from '@pagerland/themes/src/Landing/components/Preview';

import { Link } from 'gatsby';
import useDemoImages from '../hooks/useDemoImages';
import { demos } from '../../config/demos';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transform: scale(1.2);

  &.visible {
    transform: none;
    opacity: 1;
    visibility: visible;
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  box-sizing: border-box;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 0 0 8px 0;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray[0]};
`;

const Description = styled.p`
  margin: 0;
  max-width: 500px;
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: ${props => props.theme.colors.gray[1]};
`;

const Demos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 32px;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  padding: 0;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  outline: none;
  color: ${props => props.theme.colors.gray[2]};
  z-index: 999;
`;

const DemoSelectorPopup = ({ visible, onClose }) => {
  const { getDemoImage } = useDemoImages();

  return (
    <Wrapper className={classNames({ visible })}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <StyledContainer>
        <Title>Demos</Title>
        <Description>
          View our demos for all kind of business and professionals. More demos are coming soon.
        </Description>
        <Demos>
          {demos.map(demo => (
            <Preview
              ImgProps={{
                fluid: getDemoImage(`${demo.slug}.png`),
                as: Img,
              }}
              TitleProps={{
                color: 'gray.0',
              }}
              key={demo.title}
              title={demo.title}
              actions={
                demo.slug && [
                  {
                    as: Link,
                    to: `/demo/next/${demo.slug}`,
                    label: 'Next.JS',
                    variant: 'primary',
                  },
                  {
                    as: Link,
                    to: `/demo/gatsby/${demo.slug}`,
                    label: 'Gatsby',
                    variant: 'accent',
                  },
                ]
              }
            />
          ))}
          <Preview
            placeholder
            title="Business"
            TitleProps={{
              color: 'gray.0',
            }}
          />
          <Preview
            placeholder
            title="Product"
            TitleProps={{
              color: 'gray.0',
            }}
          />
          <Preview
            placeholder
            title="Agency"
            TitleProps={{
              color: 'gray.0',
            }}
          />
        </Demos>
      </StyledContainer>
    </Wrapper>
  );
};

DemoSelectorPopup.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DemoSelectorPopup;
