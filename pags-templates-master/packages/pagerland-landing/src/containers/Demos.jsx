import React from 'react';

import Img from 'gatsby-image';

import { Demos } from '@pagerland/themes/src/Landing/containers';
import { demos } from '../../config/demos';

import useDemoImages from '../hooks/useDemoImages';

const DemosContainer = props => {
  const { getDemoImage } = useDemoImages();

  return (
    <Demos
      {...props}
      previews={[
        ...demos.map(demo => ({
          ...demo,
          ImgProps: {
            as: Img,
            fluid: getDemoImage(`${demo.slug}.png`),
          },
        })),
        {
          placeholder: true,
          title: 'Business',
        },
        {
          placeholder: true,
          title: 'Product',
        },
        {
          placeholder: true,
          title: 'Agency',
        },
      ]}
    />
  );
};

export default DemosContainer;
