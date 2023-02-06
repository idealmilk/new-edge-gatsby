const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const res = await graphql(`
    query {
      allContentfulClientProject {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulClientProjectShort {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulClientProject.edges.forEach((edge) => {
    createPage({
      component: path.resolve('./src/templates/ClientProject/index.js'),
      path: `/works/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  res.data.allContentfulClientProjectShort.edges.forEach((edge) => {
    createPage({
      component: path.resolve('./src/templates/ClientProjectShort/index.js'),
      path: `/works/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
