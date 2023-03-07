import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto 8rem auto;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`;

export const BlogCard = styled.div`
  position: relative;
  margin: 0 4rem 6.4rem;
  */ p {
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: 0 2rem 6.4rem;
    p {
      font-size: 1.6rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 0;
    height: 30rem;
    &:last-of-type {
      margin-bottom: 5rem;
    }
    p {
      display: none;
    }
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.4s ease-in-out;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
  @media (max-width: ${(props) =>
      props.theme.breakpoints.laptop} and (hover:none)) {
    &:hover {
      .gatsby-image-wrapper {
        transform: scale(1);
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 30rem;
  }
`;

export const ResponsiveMasonry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  box-sizing: border-box;
  width: 100%;
  gap: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MasonryLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  flex: 1;
  width: 0;
  gap: 0;
`;

export const MasonryRight = styled.div`
  display: flex;
  flex-direction: column;
  place-content: stretch flex-start;
  flex: 1 1 0%;
  width: 0px;
  gap: 0px;
`;

export const MobileList = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;
