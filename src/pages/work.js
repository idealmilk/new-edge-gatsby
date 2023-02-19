import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO, Work } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';

const WorkPage = ({ data }) => {
  const { identity, development } = data;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
    <MainLayout>
      <SEO title='Work' />
      <PageHeader title='Work' />
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => <h3 style={{ marginRight: '6rem' }}>Brand Identity</h3>}
          </Ticker>
        )}
      </PageVisibility>

      <InnerWrap>
        <Work {...identity} />
      </InnerWrap>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => <h3 style={{ marginRight: '6rem' }}>Brand Development</h3>}
          </Ticker>
        )}
      </PageVisibility>
      <InnerWrap>
        <Work {...development} />
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    identity: allContentfulClientProject(
      sort: { completionDate: DESC }
      filter: { category: { in: "Identity" } }
    ) {
      edges {
        node {
          clientName
          metaDescription
          category
          slug
          thumbnail {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    development: allContentfulClientProject(
      sort: { completionDate: DESC }
      filter: { category: { in: "Development" } }
    ) {
      edges {
        node {
          clientName
          metaDescription
          category
          slug
          thumbnail {
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

export default WorkPage;
