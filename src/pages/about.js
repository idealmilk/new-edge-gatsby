import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO, Services, StaffMembers } from 'components';
import { InnerWrap, FeatureWrap } from 'components/common/Containers/styled';

const AboutPage = ({ data }) => {
  const {
    contentfulAboutPage,
    allContentfulStaffMember,
    allContentfulService,
  } = data;

  const { body, teamSectionTitle, teamSectionText, serviceSectionTitle } =
    contentfulAboutPage;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
    <MainLayout cta={true}>
      <SEO title='About' />
      <InnerWrap>
        <PageHeader title='About' />

        <FeatureWrap>
          <div className='text'>
            <RichText {...body} className='text' />
          </div>
          {/* <div className='img'></div> */}
        </FeatureWrap>
      </InnerWrap>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => <h3 style={{ marginRight: '6rem' }}>{teamSectionTitle}</h3>}
          </Ticker>
        )}
      </PageVisibility>

      <InnerWrap>
        <StaffMembers {...allContentfulStaffMember} />
        <p
          style={{
            margin: '8rem auto 16rem',
            width: '50%',
            textAlign: 'center',
          }}
        >
          {teamSectionText}
        </p>
      </InnerWrap>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => (
              <h3 style={{ marginRight: '6rem' }}>{serviceSectionTitle}</h3>
            )}
          </Ticker>
        )}
      </PageVisibility>

      <InnerWrap>
        <Services {...allContentfulService} />
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulAboutPage {
      body {
        raw
      }
      teamSectionTitle
      teamSectionText
      serviceSectionTitle
    }
    allContentfulStaffMember(sort: { name: DESC }) {
      edges {
        node {
          name
          bio {
            raw
          }
          headshot {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulService {
      edges {
        node {
          title
          features
        }
      }
    }
  }
`;

export default AboutPage;
