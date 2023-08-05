import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import {
  InnerFlexWrap,
  InnerWrap,
  TextWrap,
} from 'components/common/Containers/styled';

import PageVisibility from 'react-page-visibility';
import Ticker from 'react-ticker';
import {
  DescriptionWrap,
  DescriptionItem,
} from 'templates/ClientProject/styled';
import MarketingHeader from 'assets/PageHeaders/marketing.gif';
import BrandingHeader from 'assets/PageHeaders/branding.gif';
import { WorkHeader } from 'assets/PageHeaders';
import { ProjectSummaryTypes } from 'types/types';
import { CaseStudies, Header, ServicesWrap, VideoWrap } from './styled';
import { ImgWrap, WorkCard } from 'components/Work/styled';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import CallToAction from 'components/common/Buttons/CallToAction';

type Props = {
  data: {
    contentfulServiceLanding: {
      title: string;
      heroText: string;
      callToAction: string;
      mainContentHeader: string;
      mainContentBody: {
        content: {
          text: string[];
          header: string;
        }[];
      };
      priceSectionBody: any;
      deliverablesSectionBody: any;
      timelinesSectionBody: any;
      caseStudies: any;
    };
  };
};

const ServiceLandingTemplate = ({ data }: Props) => {
  const {
    title,
    heroText,
    callToAction,
    mainContentHeader,
    mainContentBody,
    priceSectionBody,
    deliverablesSectionBody,
    timelinesSectionBody,
    caseStudies,
  } = data.contentfulServiceLanding;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <MainLayout>
      <SEO title={title} description={heroText} article={false} />

      <PageHeader
        title={title}
        gif={title === 'Branding' ? BrandingHeader : MarketingHeader}
      />

      <InnerWrap>
        <TextWrap>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '4rem' }}>
            {heroText}
          </h2>
          <CallToAction>
            <Link to='/contact'>{callToAction}</Link>
          </CallToAction>
        </TextWrap>
        <Header>{mainContentHeader}</Header>
      </InnerWrap>

      <InnerFlexWrap>
        <ServicesWrap>
          {mainContentBody.content.map((item, index) => {
            return (
              <div>
                <p className='main-content-body-header'>{item.header}</p>
                {item.text.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </div>
            );
          })}
        </ServicesWrap>
        <VideoWrap>Video</VideoWrap>
      </InnerFlexWrap>

      <InnerWrap>
        <Header>Making Brand & Design easy for you</Header>
        <DescriptionWrap>
          <DescriptionItem>
            <h4>Price</h4>
            <RichText {...priceSectionBody} />
          </DescriptionItem>

          <DescriptionItem>
            <h4>Deliverables</h4>
            <RichText {...deliverablesSectionBody} />
          </DescriptionItem>

          <DescriptionItem>
            <h4>Timelines</h4>
            <RichText {...timelinesSectionBody} />
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

      <InnerWrap>
        <CaseStudies>
          {caseStudies.map((caseStudy: any, index: any) => {
            const image: IGatsbyImageData | undefined = getImage(
              caseStudy.thumbnail
            );

            return (
              <Link to={`/work/${caseStudy.slug}`} key={index}>
                <WorkCard>
                  <ImgWrap>
                    {image && (
                      <GatsbyImage image={image} alt={caseStudy.clientName} />
                    )}
                  </ImgWrap>
                  <p>
                    <span>{caseStudy.metaDescription}</span>
                  </p>
                </WorkCard>
              </Link>
            );
          })}
        </CaseStudies>

        <TextWrap>
          <CallToAction>
            <Link to='/contact'>{callToAction}</Link>
          </CallToAction>
        </TextWrap>
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulServiceLanding(slug: { eq: $slug }) {
      title
      heroText
      callToAction
      mainContentHeader
      mainContentBody {
        content {
          header
          text
        }
      }
      priceSectionBody {
        raw
      }
      deliverablesSectionBody {
        raw
      }
      timelinesSectionBody {
        raw
      }
      caseStudies {
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
`;

export default ServiceLandingTemplate;
