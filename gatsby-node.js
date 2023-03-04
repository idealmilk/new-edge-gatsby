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
      allContentfulBlogPost {
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
      path: `/work/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: path.resolve('./src/templates/BlogPost/index.js'),
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
