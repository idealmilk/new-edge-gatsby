import React from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MainLayout from 'layouts/MainLayout';
import { RichText, SEO, TestimonialCard } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';
import { checkFormat } from 'utils/checkFormat';

import {
  FullWidthImageWrap,
  DescriptionWrap,
  DescriptionItem,
  LandscapeWrap,
  SquareWrap,
} from './styled';

const ClientProjectTemplate = ({ data }) => {
  const {
    clientName,
    metaDescription,
    headerImage,
    clientDescription,
    clientBrief,
    ourWork,
    brandCopy,
    landscapeCarouselImages,
    landscapeImages,
    squareImages,
    testimonialText,
    testimonialStaffName,
    testimonialStaffRole,
  } = data.contentfulClientProject;

  const NextArrow = ({ onClick }) => {
    return (
      <div className='landscape-carousel-next' onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className='landscape-carousel-prev' onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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

        <LandscapeWrap>
          {checkFormat(landscapeImages[0].file.url) && (
            <img src={landscapeImages[0].file.url} alt='' />
          )}
          {!checkFormat(landscapeImages[0].file.url) && (
            <video controls loop autoplay muted>
              <source src={landscapeImages[0].file.url} type='video/mp4' />
            </video>
          )}
        </LandscapeWrap>

        <SquareWrap>
          {checkFormat(squareImages[0].file.url) && (
            <img src={squareImages[0].file.url} alt='' />
          )}
          {!checkFormat(squareImages[0].file.url) && (
            <video controls loop autoplay muted>
              <source src={squareImages[0].file.url} type='video/mp4' />
            </video>
          )}

          {checkFormat(squareImages[1].file.url) && (
            <img src={squareImages[1].file.url} alt='' />
          )}
          {!checkFormat(squareImages[1].file.url) && (
            <video controls>
              <source src={squareImages[1].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <SquareWrap>
          <div className='brand'>
            <h4>What we got up to...</h4>
            <RichText {...brandCopy} />
          </div>

          {checkFormat(squareImages[2].file.url) && (
            <img src={squareImages[2].file.url} alt='' />
          )}
          {!checkFormat(squareImages[2].file.url) && (
            <video controls>
              <source src={squareImages[2].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <Slider {...settings}>
          {landscapeCarouselImages.map((edge, index) => {
            return (
              <LandscapeWrap>
                {checkFormat(edge.file.url) && (
                  <img src={edge.file.url} alt='' />
                )}
                {!checkFormat(edge.file.url) && (
                  <video controls>
                    <source src={edge.file.url} type='video/mp4' />
                  </video>
                )}
              </LandscapeWrap>
            );
          })}
        </Slider>

        <SquareWrap>
          {checkFormat(squareImages[3].file.url) && (
            <img src={squareImages[3].file.url} alt='' />
          )}
          {!checkFormat(squareImages[3].file.url) && (
            <video controls>
              <source src={squareImages[3].file.url} type='video/mp4' />
            </video>
          )}

          {checkFormat(squareImages[4].file.url) && (
            <img src={squareImages[4].file.url} alt='' />
          )}
          {!checkFormat(squareImages[4].file.url) && (
            <video controls>
              <source src={squareImages[4].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <LandscapeWrap>
          {checkFormat(landscapeImages[1].file.url) && (
            <img src={landscapeImages[1].file.url} alt='' />
          )}
          {!checkFormat(landscapeImages[1].file.url) && (
            <video controls>
              <source src={landscapeImages[1].file.url} type='video/mp4' />
            </video>
          )}
        </LandscapeWrap>

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
  query ($slug: String!) {
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
      brandCopy {
        raw
      }
      landscapeCarouselImages {
        description
        file {
          url
        }
      }
      landscapeImages {
        description
        file {
          url
        }
      }
      squareImages {
        description
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
