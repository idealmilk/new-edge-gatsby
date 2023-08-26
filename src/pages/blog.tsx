import React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import BlogHeader from 'assets/PageHeaders/blog.gif';
import { Blog, PageHeader, SEO } from 'components';
import { InnerWrap, TextWrapMin } from 'components/common/Containers/styled';
import MainLayout from 'layouts/MainLayout';
import { BlogTypes } from 'types/types';

type GraphQLResult = {
  allContentfulBlogPost: {
    edges: BlogTypes[];
  };
};

const BlogPage = ({ data }: PageProps<GraphQLResult>) => {
  const { allContentfulBlogPost } = data;

  return (
    <MainLayout>
      <SEO
        title='Blog'
        description='Musings, stories and insights into life at NewEdge Studio, as we turn start-up ideas into scale-up brand identities.'
      />

      <PageHeader title='Blog' gif={BlogHeader} />
      <aside>
        <TextWrapMin>
          <p>
            Musings, stories and insights into life at NewEdge Studio, as we
            turn start-up ideas into scale-up brand identities.
          </p>
        </TextWrapMin>
      </aside>

      <section>
        <Blog data={allContentfulBlogPost.edges} />
      </section>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { createdAt: DESC }) {
      edges {
        node {
          title
          slug
          coverImage {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default BlogPage;
