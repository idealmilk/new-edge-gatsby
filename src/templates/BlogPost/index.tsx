import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { RichText, SEO } from 'components';

import { InnerWrap, OuterTextWrap, TextWrap } from './styled';

type Props = {
  data: {
    contentfulBlogPost: {
      title: string;
      body: Document;
      metaDescription: string;
    };
  };
};

const BlogPostTemplate = ({ data }: Props) => {
  const { title, body, metaDescription } = data.contentfulBlogPost;

  return (
    <MainLayout>
      <SEO title={title} description={metaDescription} article={true} />
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
