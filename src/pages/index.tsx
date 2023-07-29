import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import HomeLayout from 'layouts/HomeLayout';
import { RichText, SEO, Testimonials, Work } from 'components';
import { Button } from '../components/common/Buttons';
import {
  InnerWrap,
  InnerWrapWork,
  CenterWrap,
  TextWrap,
} from '../components/common/Containers/styled';
import type { ProjectSummaryTypes, TestimonialTypes } from 'types/types';

type GraphQLResult = {
  projects: {
    edges: ProjectSummaryTypes[];
  };
  testimonials: {
    edges: TestimonialTypes[];
  };
  text: {
    heroText: string;
    homeDesc: any;
  };
};

const HomePage = ({ data }: PageProps<GraphQLResult>) => {
  const { projects, testimonials, text } = data;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <HomeLayout heroText={text.heroText}>
      <SEO title='NewEdge Studio' description='NewEdge Studio' />

      <InnerWrap>
        <TextWrap style={{ marginBottom: '10rem' }}>
          <RichText {...text.homeDesc} />
        </TextWrap>
      </InnerWrap>

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
          <Link to='/work'>
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

      <Testimonials testimonials={testimonials.edges} />
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
    text: contentfulMiscText {
      heroText {
        raw
      }
      homeDesc {
        raw
      }
    }
  }
`;

export default HomePage;
