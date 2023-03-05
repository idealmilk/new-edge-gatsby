import type { GatsbyNode } from 'gatsby';
import * as path from 'path';

type TypeData = {
  allContentfulClientProject: {
    edges: {
      node: {
        slug: string;
      };
    }[];
  };
  allContentfulBlogPost: {
    edges: {
      node: {
        slug: string;
      };
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const res = await graphql<TypeData>(`
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

  if (res.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      res.errors
    );
    return;
  }

  const projects = res.data?.allContentfulClientProject.edges;
  const blogPosts = res.data?.allContentfulBlogPost.edges;

  if (projects && projects.length > 0) {
    projects.forEach((edge) => {
      createPage({
        component: path.resolve('./src/templates/ClientProject/index.tsx'),
        path: `/work/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
        },
      });
    });
  }

  if (blogPosts && blogPosts.length > 0) {
    blogPosts.forEach((edge) => {
      createPage({
        component: path.resolve('./src/templates/BlogPost/index.tsx'),
        path: `/blog/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
        },
      });
    });
  }
};
