import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { RichText, SEO, TestimonialCard } from 'components';

import { FullWidthImageWrap, DescriptionWrap, DescriptionItem } from './styled';
import { InnerWrap } from '../../components/common/Containers/styled';

const ClientProjectTemplate = ({ data }) => {
  const {
    clientName,
    metaDescription,
    headerImage,
    clientDescription,
    clientBrief,
    ourWork,
    fullWidthImage,
    testimonialText,
    testimonialStaffName,
    testimonialStaffRole,
  } = data.contentfulClientProject;

  return (
    <MainLayout>
      <SEO
        title={clientName}
        desc={metaDescription}
        image={headerImage.file.url}
        article={true}
      />

      <FullWidthImageWrap>
        <img src={headerImage.file.url} alt={clientName} />
      </FullWidthImageWrap>

      <InnerWrap>
        <DescriptionWrap>
          <DescriptionItem>
            <h4>What is {clientName}</h4>
            <RichText {...clientDescription} />
          </DescriptionItem>

          <DescriptionItem>
            <h4>The Brief</h4>
            <RichText {...clientBrief} />
          </DescriptionItem>

          <DescriptionItem>
            <h4>What we got up to...</h4>
            <RichText {...ourWork} />
          </DescriptionItem>
        </DescriptionWrap>
      </InnerWrap>

      <FullWidthImageWrap>
        <img src={fullWidthImage.file.url} alt={clientName} />
      </FullWidthImageWrap>

      <InnerWrap>
        <TestimonialCard
          text={testimonialText}
          name={testimonialStaffName}
          role={testimonialStaffRole}
          client={clientName}
        />
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulClientProject(slug: { eq: $slug }) {
      clientName
      headerImage {
        file {
          url
        }
      }
      clientDescription {
        raw
      }
      clientBrief {
        raw
      }
      ourWork {
        raw
      }
      fullWidthImage {
        file {
          url
        }
      }
      testimonialText
      testimonialStaffName
      testimonialStaffRole
    }
  }
`;

export default ClientProjectTemplate;
