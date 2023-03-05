import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import AboutHeader from 'assets/PageHeaders/about.gif';
import { PageHeader, RichText, SEO, Services, StaffMembers } from 'components';
import { InnerWrap, FeatureWrap } from 'components/common/Containers/styled';
import { About, StaffMember, Service } from 'types/types';

type GraphQLResult = {
  contentfulAboutPage: About;
  allContentfulStaffMember: {
    nodes: StaffMember[];
  };
  allContentfulService: {
    nodes: Service[];
  };
};

const AboutPage = ({ data }: PageProps<GraphQLResult>) => {
  const {
    contentfulAboutPage,
    allContentfulStaffMember,
    allContentfulService,
  } = data;

  const { body, teamSectionTitle, teamSectionText, serviceSectionTitle } =
    contentfulAboutPage;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <MainLayout>
      <SEO
        title='About'
        description='About
NewEdge is the Brand & Design studio that takes founders, entrepreneurs, start-ups and small businesses from idea to identity.'
      />
      <InnerWrap>
        <PageHeader title='About' gif={AboutHeader} />

        <FeatureWrap>
          <div className='text'>
            <RichText document={body} />
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
        <StaffMembers staffMembers={allContentfulStaffMember.nodes} />
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
        <Services services={allContentfulService.nodes} />
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
