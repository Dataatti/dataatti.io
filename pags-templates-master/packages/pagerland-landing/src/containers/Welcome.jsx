import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Welcome } from '@pagerland/themes/src/Landing/containers';

const WelcomeContainer = props => {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1487, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Welcome
      {...props}
      ImgProps={{
        ...Welcome.defaultProps.ImgProps,
        src: undefined,
        srcSet: undefined,
        as: Img,
        fluid: hero.childImageSharp.fluid,
      }}
    />
  );
};

export default WelcomeContainer;
