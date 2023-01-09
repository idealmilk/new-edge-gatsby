import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { RichText, SEO, Services, StaffMembers } from 'components';
import { InnerWrap, HeaderWrap } from 'components/common/Containers/styled';

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
        <h2 style={{ marginTop: '80rem;' }}>About</h2>

        <RichText {...body} />

        <HeaderWrap>
          <h2>{teamSectionTitle}</h2>
        </HeaderWrap>
        <StaffMembers {...allContentfulStaffMember} />
        <p style={{ margin: '0 auto', width: '50%', textAlign: 'center' }}>
          {teamSectionText}
        </p>

        <HeaderWrap>
          <h2>{serviceSectionTitle}</h2>
        </HeaderWrap>
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
