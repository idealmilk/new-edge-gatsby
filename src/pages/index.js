import React from 'react';
import { graphql } from 'gatsby';

import HomeLayout from 'layouts/HomeLayout';
import { SEO, Testimonials, Works } from 'components';
import { InnerWrap } from '../components/common/Containers/styled';

const HomePage = ({ data }) => {
  const { allContentfulClientProject } = data;

  return (
    <HomeLayout>
      <SEO />

      {/* Hero component is found in the HomeLayout component */}
      <InnerWrap>
        <Works {...allContentfulClientProject} />

        <Testimonials {...allContentfulClientProject} />
      </InnerWrap>
    </HomeLayout>
  );
};

export const query = graphql`
  query {
    allContentfulClientProject {
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
