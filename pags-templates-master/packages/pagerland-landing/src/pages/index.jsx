import React from 'react';
import Sticky from 'react-sticky-el';

import {
  Navbar,
  Features,
  Reviews,
  BuyCta,
  Copyright,
} from '@pagerland/themes/src/Landing/containers';

import Welcome from '../containers/Welcome';
import Support from '../containers/Support';
import Demos from '../containers/Demos';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Sticky style={{ zIndex: 999, position: 'relative' }}>
        <Navbar />
      </Sticky>
      <Welcome name="" />
      <Demos name="demos" />
      <Features name="features" />
      <Reviews name="reviews" />
      <BuyCta />
      <Support name="support" />
      <Copyright />
    </Layout>
  );
};

export default IndexPage;
