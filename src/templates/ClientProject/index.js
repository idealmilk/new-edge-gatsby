import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import CircleType from 'circletype';
import { graphql } from 'gatsby';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MainLayout from 'layouts/MainLayout';
import { Logo } from 'assets/Logos';
import { RichText, SEO, TestimonialCard } from 'components';
import { CTA } from 'components/common/Buttons';
import { InnerWrap } from 'components/common/Containers/styled';
import { checkFormat } from 'utils/checkFormat';

import {
  FullWidthImageWrap,
  DescriptionWrap,
  DescriptionItem,
  LandscapeWrap,
  SquareWrap,
  SquareTextWrap,
  SpinnerWrap,
} from './styled';

const ClientProjectTemplate = ({ data }) => {
  const {
    clientName,
    category,
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
    gradientLeft,
    gradientRight,
    interrogative,
  } = data.contentfulClientProject;

  const circleInstance = useRef();

  useEffect(() => {
    if (category.includes('Identity')) {
      new CircleType(circleInstance.current).radius(40);

      circleInstance.current.classList.add('circle-wrap');

      circleInstance.current.children[0].classList.add('circle');

      window.addEventListener('scroll', function () {
        circleInstance.current.children[0].style.transform =
          'rotate(' + window.scrollY * 0.15 + 'deg)';
      });
    }
  }, []);

  const sortedImages = (imageArray) => {
    if (imageArray === null) {
      return null;
    }

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
    <MainLayout isClientProject={true}>
      <SEO
        title={clientName}
        desc={metaDescription}
        image={headerImage.file.url}
        article={true}
      />

      <FullWidthImageWrap
        gradientLeft={gradientLeft}
        gradientRight={gradientRight}
      >
        <img src={headerImage.file.url} alt={clientName} />
      </FullWidthImageWrap>

      <InnerWrap>
        <DescriptionWrap>
          <DescriptionItem>
            <h4>
              {interrogative ? interrogative : 'What is'} {clientName}
            </h4>
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

        {category.includes('Identity') && (
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
        )}

        {category.includes('Identity') && (
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
        )}

        <SquareTextWrap>
          <div className='brand'>
            <h4>The Brand</h4>
            <RichText {...brandCopy} />
          </div>

          {checkFormat(
            sortedSquareImages[category.includes('Development') ? 0 : 2].file
              .url
          ) && (
            <img
              src={
                sortedSquareImages[category.includes('Development') ? 0 : 2]
                  .file.url
              }
              alt=''
            />
          )}
          {!checkFormat(
            sortedSquareImages[category.includes('Development') ? 0 : 2].file
              .url
          ) && (
            <video controls>
              <source
                src={
                  sortedSquareImages[category.includes('Development') ? 0 : 2]
                    .file.url
                }
                type='video/mp4'
              />
            </video>
          )}
        </SquareTextWrap>

        {category.includes('Identity') && (
          <Slider {...settings}>
            {sortedLandscapeCarouselImages.map((edge, index) => {
              return (
                <LandscapeWrap key={index}>
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
        )}

        <SquareWrap>
          {checkFormat(
            sortedSquareImages[category.includes('Development') ? 1 : 3].file
              .url
          ) && (
            <img
              src={
                sortedSquareImages[category.includes('Development') ? 1 : 3]
                  .file.url
              }
              alt=''
            />
          )}
          {!checkFormat(
            sortedSquareImages[category.includes('Development') ? 1 : 3].file
              .url
          ) && (
            <video controls>
              <source
                src={
                  sortedSquareImages[category.includes('Development') ? 1 : 3]
                    .file.url
                }
                type='video/mp4'
              />
            </video>
          )}

          {checkFormat(
            sortedSquareImages[category.includes('Development') ? 2 : 4].file
              .url
          ) && (
            <img
              src={
                sortedSquareImages[category.includes('Development') ? 2 : 4]
                  .file.url
              }
              alt=''
            />
          )}
          {!checkFormat(
            sortedSquareImages[category.includes('Development') ? 2 : 4].file
              .url
          ) && (
            <video controls>
              <source
                src={
                  sortedSquareImages[category.includes('Development') ? 2 : 4]
                    .file.url
                }
                type='video/mp4'
              />
            </video>
          )}
        </SquareWrap>

        {category.includes('Identity') && (
          <SquareTextWrap>
            {checkFormat(sortedSquareImages[5].file.url) && (
              <img src={sortedSquareImages[5].file.url} alt='' />
            )}
            {!checkFormat(sortedSquareImages[5].file.url) && (
              <video controls>
                <source src={sortedSquareImages[5].file.url} type='video/mp4' />
              </video>
            )}
            <SpinnerWrap>
              <div ref={circleInstance}>NewEdge Studio - NewEdge Studio -</div>
              <img src={Logo} alt='' />
            </SpinnerWrap>
          </SquareTextWrap>
        )}

        {category.includes('Identity') && (
          <SquareWrap>
            {checkFormat(sortedSquareImages[6].file.url) && (
              <img src={sortedSquareImages[6].file.url} alt='' />
            )}
            {!checkFormat(sortedSquareImages[6].file.url) && (
              <video controls>
                <source src={sortedSquareImages[6].file.url} type='video/mp4' />
              </video>
            )}

            {checkFormat(sortedSquareImages[7].file.url) && (
              <img src={sortedSquareImages[7].file.url} alt='' />
            )}
            {!checkFormat(sortedSquareImages[7].file.url) && (
              <video controls>
                <source src={sortedSquareImages[7].file.url} type='video/mp4' />
              </video>
            )}
          </SquareWrap>
        )}

        <LandscapeWrap>
          {checkFormat(
            sortedLandscapeImages[category.includes('Development') ? 0 : 1].file
              .url
          ) && (
            <img
              src={
                sortedLandscapeImages[category.includes('Development') ? 0 : 1]
                  .file.url
              }
              alt=''
            />
          )}
          {!checkFormat(
            sortedLandscapeImages[category.includes('Development') ? 0 : 1].file
              .url
          ) && (
            <video controls>
              <source
                src={
                  sortedLandscapeImages[
                    category.includes('Development') ? 0 : 1
                  ].file.url
                }
                type='video/mp4'
              />
            </video>
          )}
        </LandscapeWrap>

        {testimonialText && (
          <TestimonialCard
            text={testimonialText}
            name={testimonialStaffName}
            role={testimonialStaffRole}
            client={clientName}
            solo={true}
          />
        )}

        <CTA />
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
      category
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
      gradientLeft
      gradientRight
      interrogative
    }
  }
`;

export default ClientProjectTemplate;
