import { graphql, useStaticQuery } from 'gatsby';
import { useCallback } from 'react';

export default () => {
  const { demosImages } = useStaticQuery(graphql`
    query {
      demosImages: allFile(filter: { relativeDirectory: { eq: "demos" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 360, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const getDemoImage = useCallback(
    imageName =>
      demosImages.edges.find(edge => edge.node.childImageSharp.fluid.originalName === imageName)
        ?.node.childImageSharp.fluid,
    [demosImages],
  );

  return { demosImages, getDemoImage };
};
