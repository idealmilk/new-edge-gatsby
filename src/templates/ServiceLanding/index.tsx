import React, { useRef, useState } from 'react';
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
import { ImgWrap, WorkCard } from 'components/Work/styled';
import { HorizontalLock } from 'components';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import CallToAction from 'components/common/Buttons/CallToAction';

import {
  CaseStudies,
  Header,
  ProcessItem,
  ProcessPadding,
  ServiceItem,
  VideoWrap,
} from './styled';
import {
  ServicesWrap,
  ServiceWrap,
  ServiceInner,
} from 'components/Services/styled';
import { motion, useInView } from 'framer-motion';

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
        <TextWrap>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '4rem' }}>
            {heroText}
          </h2>
          <CallToAction>
            <Link to='/contact'>{callToAction}</Link>
          </CallToAction>
        </TextWrap>

        {title === 'Marketing' && (
          <>
            <Header>{mainContentHeader}</Header>
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
          </>
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
                  <p className='main-content-body-header'>{item.header}</p>
                  {item.text.map((text, index) => {
                    return <p key={index}>{text}</p>;
                  })}
                </ProcessItem>
              );
            })}
          </HorizontalLock>
        </>
      )}

      <InnerWrap>
        <VideoWrap>
          <video muted autoPlay playsInline>
            <source
              src='https://player.vimeo.com/progressive_redirect/playback/850200532/rendition/720p?loc=external&amp;signature=7d00857bf5a6c8e4e2995588259490fedd2d5882814102cf55341c963a87d855'
              type='video/mp4'
            />
          </video>
        </VideoWrap>

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
                    <span>{caseStudy.testimonialText}</span>
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
        testimonialText
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
