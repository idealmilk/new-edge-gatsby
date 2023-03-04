import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { RichText, SEO } from 'components';

import { InnerWrap, OuterTextWrap, TextWrap } from './styled';

const BlogPostTemplate = ({ data }) => {
  const { title, body, metaDescription } = data.contentfulBlogPost;

  return (
    <MainLayout isBlogPost={true}>
      <SEO title={title} desc={metaDescription} article={true} />
      <InnerWrap>
        <h1>{title}</h1>
        <p>by Evan Oliver</p>
        <p>March 9, 2023</p>
        <OuterTextWrap>
          <TextWrap>
            <RichText {...body} />
          </TextWrap>
        </OuterTextWrap>
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        raw
      }
      metaDescription
    }
  }
`;

export default BlogPostTemplate;
