const path = require('path');
const { demos } = require('./config/demos');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  demos.forEach(demo => {
    createPage({
      path: `/demo/next/${demo.slug}`,
      component: path.resolve(`src/templates/demo.jsx`),
      context: {
        slug: demo.slug,
        title: demo.title,
        platform: {
          title: 'Next.JS',
          slug: 'next',
        },
      },
    });

    createPage({
      path: `/demo/gatsby/${demo.slug}`,
      component: path.resolve(`src/templates/demo.jsx`),
      context: {
        slug: demo.slug,
        title: demo.title,
        platform: {
          title: 'Gatsby',
          slug: 'gatsby',
        },
      },
    });
  });
};
