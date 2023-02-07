import React from 'react';
import { graphql } from 'gatsby';

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

        <h2>{teamSectionTitle}</h2>

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

        <h2>{serviceSectionTitle}</h2>

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
    allContentfulStaffMember {
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
