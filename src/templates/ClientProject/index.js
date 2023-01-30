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

  const sortedImages = (imageArray) => {
    const sortedArray = imageArray.sort(
      (a, b) => Number(a.description) - Number(b.description)
    );

    return sortedArray;
  };

  const sortedSquareImages = sortedImages(squareImages);
  const sortedLandscapeImages = sortedImages(landscapeImages);
  const sortedLandscapeCarouselImages = sortedImages(landscapeCarouselImages);

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
          {checkFormat(sortedLandscapeImages[0].file.url) && (
            <img src={sortedLandscapeImages[0].file.url} alt='' />
          )}
          {!checkFormat(sortedLandscapeImages[0].file.url) && (
            <video controls loop autoplay muted>
              <source
                src={sortedLandscapeImages[0].file.url}
                type='video/mp4'
              />
            </video>
          )}
        </LandscapeWrap>

        <SquareWrap>
          {checkFormat(sortedSquareImages[0].file.url) && (
            <img src={sortedSquareImages[0].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[0].file.url) && (
            <video controls loop autoplay muted>
              <source src={sortedSquareImages[0].file.url} type='video/mp4' />
            </video>
          )}

          {checkFormat(sortedSquareImages[1].file.url) && (
            <img src={sortedSquareImages[1].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[1].file.url) && (
            <video controls>
              <source src={sortedSquareImages[1].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <SquareWrap>
          <div className='brand'>
            <h4>What we got up to...</h4>
            <RichText {...brandCopy} />
          </div>

          {checkFormat(sortedSquareImages[2].file.url) && (
            <img src={sortedSquareImages[2].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[2].file.url) && (
            <video controls>
              <source src={sortedSquareImages[2].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <Slider {...settings}>
          {sortedLandscapeCarouselImages.map((edge, index) => {
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
          {checkFormat(sortedSquareImages[3].file.url) && (
            <img src={sortedSquareImages[3].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[3].file.url) && (
            <video controls>
              <source src={sortedSquareImages[3].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <SquareWrap>
          {checkFormat(sortedSquareImages[4].file.url) && (
            <img src={sortedSquareImages[4].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[4].file.url) && (
            <video controls>
              <source src={sortedSquareImages[4].file.url} type='video/mp4' />
            </video>
          )}

          {checkFormat(sortedSquareImages[5].file.url) && (
            <img src={sortedSquareImages[5].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[5].file.url) && (
            <video controls>
              <source src={sortedSquareImages[5].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <LandscapeWrap>
          {checkFormat(sortedLandscapeImages[1].file.url) && (
            <img src={sortedLandscapeImages[1].file.url} alt='' />
          )}
          {!checkFormat(sortedLandscapeImages[1].file.url) && (
            <video controls>
              <source
                src={sortedLandscapeImages[1].file.url}
                type='video/mp4'
              />
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
