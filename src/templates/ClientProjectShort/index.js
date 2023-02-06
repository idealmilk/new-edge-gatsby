import React from 'react';
import { graphql } from 'gatsby';

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

const ClientProjectShortTemplate = ({ data }) => {
  const {
    clientName,
    metaDescription,
    headerImage,
    clientDescription,
    clientBrief,
    ourWork,
    brandCopy,
    landscapeImages,
    squareImages,
    testimonialText,
    testimonialStaffName,
    testimonialStaffRole,
  } = data.contentfulClientProjectShort;

  const sortedImages = (imageArray) => {
    const sortedArray = imageArray.sort(
      (a, b) => Number(a.description) - Number(b.description)
    );

    return sortedArray;
  };

  const sortedSquareImages = sortedImages(squareImages);
  const sortedLandscapeImages = sortedImages(landscapeImages);

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

        <SquareWrap>
          <div className='brand'>
            <h4>What we got up to...</h4>
            <RichText {...brandCopy} />
          </div>

          {checkFormat(sortedSquareImages[0].file.url) && (
            <img src={sortedSquareImages[0].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[0].file.url) && (
            <video controls>
              <source src={sortedSquareImages[0].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

        <SquareWrap>
          {checkFormat(sortedSquareImages[1].file.url) && (
            <img src={sortedSquareImages[1].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[1].file.url) && (
            <video controls loop autoplay muted>
              <source src={sortedSquareImages[1].file.url} type='video/mp4' />
            </video>
          )}

          {checkFormat(sortedSquareImages[2].file.url) && (
            <img src={sortedSquareImages[2].file.url} alt='' />
          )}
          {!checkFormat(sortedSquareImages[2].file.url) && (
            <video controls>
              <source src={sortedSquareImages[2].file.url} type='video/mp4' />
            </video>
          )}
        </SquareWrap>

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
    contentfulClientProjectShort(slug: { eq: $slug }) {
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

export default ClientProjectShortTemplate;
