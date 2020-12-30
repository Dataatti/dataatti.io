import React from 'react';

import Container from '@pagerland/common/src/components/Container';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Box
        minHeight="100vh"
        flexBox
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h1" as="h1">
          NOT FOUND
        </Typography>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Button as={Link} to="/" variant="primary">
          Go to homepage
        </Button>
      </Box>
    </Container>
  </Layout>
);

export default NotFoundPage;
