import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { RichText, SEO } from 'components';

import { InnerWrap, OuterTextWrap, TextWrap } from './../BlogPost/styled';

type Props = {
  data: {
    contentfulLegalDoc: {
      title: string;
      body: Document;
    };
  };
};

const LegalDoc = ({ data }: Props) => {
  const { title, body } = data.contentfulLegalDoc;

  return (
    <MainLayout>
      <SEO title={title} description={title} article={true} />
      <InnerWrap>
        <h1>{title}</h1>
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
    contentfulLegalDoc(slug: { eq: $slug }) {
      title
      body {
        raw
      }
    }
  }
`;

export default LegalDoc;
