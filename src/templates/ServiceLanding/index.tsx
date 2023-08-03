import React, { useState } from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';

import PageVisibility from 'react-page-visibility';
import Ticker from 'react-ticker';
import {
  DescriptionWrap,
  DescriptionItem,
} from 'templates/ClientProject/styled';
import { WorkHeader } from 'assets/PageHeaders';

type Props = {
  data: {
    contentfulServiceLanding: {
      title: string;
      heroText: string;
      callToAction: string;
    };
  };
};

const ServiceLandingTemplate = ({ data }: Props) => {
  const { title, heroText, callToAction } = data.contentfulServiceLanding;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <MainLayout>
      <SEO title={title} description={heroText} article={false} />

      <PageHeader title='Work' gif={WorkHeader} />

      <InnerWrap>
        <p>{heroText}</p>
        <p>{callToAction}</p>

        <h2>Making Brand & Design easy for you</h2>
        <DescriptionWrap>
          <DescriptionItem>
            <h4>Price</h4>
            {/* <RichText {...clientDescription} /> */}
          </DescriptionItem>

          <DescriptionItem>
            <h4>Deliverables</h4>
            {/* <RichText {...clientBrief} /> */}
          </DescriptionItem>

          <DescriptionItem>
            <h4>Timelines</h4>
            {/* <RichText {...ourWork} /> */}
          </DescriptionItem>
        </DescriptionWrap>
      </InnerWrap>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => <h3 style={{ marginRight: '6rem' }}>Our {title}</h3>}
          </Ticker>
        )}
      </PageVisibility>
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulServiceLanding(slug: { eq: $slug }) {
      title
      heroText
      callToAction
    }
  }
`;

export default ServiceLandingTemplate;
