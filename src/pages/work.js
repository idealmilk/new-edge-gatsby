import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO, Work } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';

const WorkPage = ({ data }) => {
  const { identity, development } = data;

  return (
    <MainLayout>
      <SEO title='Work' />
      <InnerWrap>
        <PageHeader title='Work' />
        <h3
          style={{
            marginBottom: '4rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid black',
          }}
        >
          Brand Identiy
        </h3>
        <Work {...identity} />
        <h3
          style={{
            marginBottom: '4rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid black',
          }}
        >
          Brand Development
        </h3>
        <Work {...development} />
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    identity: allContentfulClientProject(
      filter: { category: { in: "Identity" } }
    ) {
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
    development: allContentfulClientProject(
      filter: { category: { in: "Development" } }
    ) {
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
