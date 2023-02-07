import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO, Work } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';

const WorkPage = ({ data }) => {
  const { allContentfulClientProject } = data;

  return (
    <MainLayout>
      <SEO title='Work' />
      <InnerWrap>
        <PageHeader title='Work' />
        <Work {...allContentfulClientProject} />
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allContentfulClientProject {
      edges {
        node {
          clientName
          category
          slug
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default WorkPage;
