import React, { useRef, useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import { motion, useInView } from 'framer-motion';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import { InnerWrap, TextWrap } from 'components/common/Containers/styled';
import {
  DescriptionWrap,
  DescriptionItem,
} from 'templates/ClientProject/styled';
import MarketingHeader from 'assets/PageHeaders/marketing.gif';
import BrandingHeader from 'assets/PageHeaders/branding.gif';
import { ImgWrap, WorkCard } from 'components/Work/styled';
import { HorizontalLock } from 'components';
import CallToAction from 'components/common/Buttons/CallToAction';
import { ServiceWrap, ServiceInner } from 'components/Services/styled';

import {
  CaseStudies,
  ProcessItem,
  ProcessItemVertical,
  ProcessPadding,
  ServicesWrap,
  VerticalWrap,
  VideoWrap,
} from './styled';

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
      videoEmbed: string;
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
    videoEmbed,
  } = data.contentfulServiceLanding;

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

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
        <section>
          <TextWrap>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '4rem' }}>
              {heroText}
            </h2>
            <CallToAction>
              <Link to='/contact'>{callToAction}</Link>
            </CallToAction>
          </TextWrap>
        </section>

        {title === 'Marketing' && (
          <section>
            <h3>{mainContentHeader}</h3>
            <ServicesWrap ref={containerRef}>
              <ServicesWrap>
                {mainContentBody.content.map((item, index) => {
                  return (
                    <ServiceWrap
                      as={motion.div}
                      marketingPage
                      style={{
                        transform: isInView
                          ? 'translate(0 , 0)'
                          : index === 0
                          ? 'translate(-50vw, 0)'
                          : index === 1
                          ? 'translate(50vw, 0)'
                          : 'translate(0, 20rem)',
                        // transitionDelay: "0.4",
                        opacity: isInView ? 1 : 0,
                        transition:
                          'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
                      }}
                    >
                      <ServiceInner key={index}>
                        <h3>{item.header}</h3>
                        <ul>
                          {item.text.map((text, index) => (
                            <li key={index}>{text}</li>
                          ))}
                        </ul>
                      </ServiceInner>
                    </ServiceWrap>
                  );
                })}
              </ServicesWrap>
            </ServicesWrap>
          </section>
        )}
      </InnerWrap>

      {title === 'Branding' && (
        <>
          <ProcessPadding />
          <HorizontalLock>
            {mainContentBody.content.map((item, index) => {
              return (
                <ProcessItem>
                  <div className='circle' />
                  <div className='line' />
                  <h4>{item.header}</h4>
                  {item.text.map((text, index) => {
                    return <p key={index}>{text}</p>;
                  })}
                </ProcessItem>
              );
            })}
          </HorizontalLock>

          <InnerWrap>
            <VerticalWrap>
              <h3>{mainContentHeader}</h3>
              {mainContentBody.content.map((item, index) => {
                return (
                  <ProcessItemVertical>
                    <div className='circle' />
                    <div className='line' />
                    <div>
                      <h4>{item.header}</h4>
                      {item.text.map((text, index) => {
                        return <p key={index}>{text}</p>;
                      })}
                    </div>
                  </ProcessItemVertical>
                );
              })}
            </VerticalWrap>
          </InnerWrap>
        </>
      )}

      <InnerWrap>
        <section>
          <VideoWrap>
            <iframe
              src={`${videoEmbed}?autoplay=1&muted=1`}
              allow='autoplay; encrypted-media'
              allowFullScreen
            ></iframe>
          </VideoWrap>
        </section>

        <section>
          <h3>Making Brand & Design easy for you</h3>
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
        </section>
      </InnerWrap>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => <h3 style={{ marginRight: '6rem' }}>Our {title}</h3>}
          </Ticker>
        )}
      </PageVisibility>

      <InnerWrap>
        <section>
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
        </section>

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
      videoEmbed
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
