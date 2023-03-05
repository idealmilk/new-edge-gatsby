import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import WorkHeader from 'assets/PageHeaders/work.gif';
import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO, Work } from 'components';
import { InnerWrapWork } from 'components/common/Containers/styled';
import type { ProjectSummary } from 'types/types';

type GraphQLResult = {
  identity: {
    edges: ProjectSummary[];
  };
  development: {
    edges: ProjectSummary[];
  };
};

const WorkPage = ({ data }: PageProps<GraphQLResult>) => {
  const { identity, development } = data;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <MainLayout>
      <SEO title='Work' description='A selection of our works' />
      <PageHeader title='Work' gif={WorkHeader} />
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <div className='work-ticker'>
            <Ticker speed={5}>
              {() => <h3 style={{ marginRight: '6rem' }}>Brand Identity</h3>}
            </Ticker>
          </div>
        )}
      </PageVisibility>

      <InnerWrapWork>
        <Work projects={identity.edges} />
      </InnerWrapWork>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <div className='work-ticker'>
            <Ticker speed={5}>
              {() => <h3 style={{ marginRight: '6rem' }}>Brand Development</h3>}
            </Ticker>
          </div>
        )}
      </PageVisibility>
      <InnerWrapWork>
        <Work projects={development.edges} />
      </InnerWrapWork>
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
