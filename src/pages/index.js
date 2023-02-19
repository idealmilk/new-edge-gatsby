import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';

import HomeLayout from 'layouts/HomeLayout';
import { SEO, Testimonials, Work } from 'components';
import { Button } from '../components/common/Buttons';
import { InnerWrap, CenterWrap } from '../components/common/Containers/styled';

const HomePage = ({ data }) => {
  const { projects, testimonials } = data;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
    <HomeLayout>
      <SEO />

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => <h3 style={{ marginRight: '6rem' }}>Our latest work</h3>}
          </Ticker>
        )}
      </PageVisibility>

      {/* Hero component is found in the HomeLayout component */}
      <InnerWrap>
        <Work {...projects} />

        <CenterWrap>
          <Link to='/work' style={{ margin: '0 auto' }}>
            <Button>View all...</Button>
          </Link>
        </CenterWrap>
      </InnerWrap>

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
        <Testimonials {...testimonials} />
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
