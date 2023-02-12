import React from 'react';
import { Link, graphql } from 'gatsby';

import HomeLayout from 'layouts/HomeLayout';
import { SEO, Testimonials, Work } from 'components';
import { Button } from '../components/common/Buttons';
import { InnerWrap, CenterWrap } from '../components/common/Containers/styled';

const HomePage = ({ data }) => {
  const { allContentfulClientProject } = data;

  return (
    <HomeLayout>
      <SEO />

      {/* Hero component is found in the HomeLayout component */}
      <InnerWrap>
        <Work {...allContentfulClientProject} />

        <CenterWrap>
          <Link to='/work' style={{ margin: '0 auto' }}>
            <Button>View all...</Button>
          </Link>
        </CenterWrap>

        <Testimonials {...allContentfulClientProject} />
      </InnerWrap>
    </HomeLayout>
  );
};

export const query = graphql`
  query {
    allContentfulClientProject(limit: 6) {
      edges {
        node {
          clientName
          metaDescription
          slug
          thumbnail {
            file {
              url
            }
          }
          testimonialText
          testimonialStaffName
          testimonialStaffRole
        }
      }
    }
  }
`;

export default HomePage;
