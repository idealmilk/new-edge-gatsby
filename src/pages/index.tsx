import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import HomeLayout from 'layouts/HomeLayout';
import { SEO, Testimonials, Work } from 'components';
import { Button } from '../components/common/Buttons';
import {
  InnerWrap,
  InnerWrapWork,
  CenterWrap,
} from '../components/common/Containers/styled';
import type { ProjectSummary, Testimonial } from 'types/types';

type GraphQLResult = {
  projects: {
    edges: ProjectSummary[];
  };
  testimonials: {
    edges: Testimonial[];
  };
};

const HomePage = ({ data }: PageProps<GraphQLResult>) => {
  const { projects, testimonials } = data;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <HomeLayout>
      <SEO title='NewEdge Studio' description='NewEdge Studio' />

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <div className='work-ticker'>
            <Ticker speed={5}>
              {() => <h3 style={{ marginRight: '6rem' }}>Our latest work</h3>}
            </Ticker>
          </div>
        )}
      </PageVisibility>

      {/* Hero component is found in the HomeLayout component */}
      <InnerWrapWork>
        <Work projects={projects.edges} />

        <CenterWrap>
          <Link to='/work' style={{ margin: '0 auto' }}>
            <Button>View all...</Button>
          </Link>
        </CenterWrap>
      </InnerWrapWork>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => (
              <h3 style={{ marginRight: '6rem' }}>What our clients say</h3>
            )}
          </Ticker>
        )}
      </PageVisibility>

      <InnerWrap>
        <Testimonials testimonials={testimonials.edges} />
      </InnerWrap>
    </HomeLayout>
  );
};

export const query = graphql`
  query {
    projects: allContentfulClientProject(
      sort: { completionDate: DESC }
      limit: 6
    ) {
      edges {
        node {
          clientName
          metaDescription
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
    testimonials: allContentfulClientProject(
      filter: { testimonialText: { ne: null } }
    ) {
      edges {
        node {
          clientName
          testimonialText
          testimonialStaffName
          testimonialStaffRole
        }
      }
    }
  }
`;

export default HomePage;
