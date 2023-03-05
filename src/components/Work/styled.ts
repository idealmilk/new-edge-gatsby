import styled from 'styled-components';

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
    transition: transform 0.4s ease-in-out;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    &:hover {
      .gatsby-image-wrapper {
        transform: none;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
  
    height: 30rem;
   
`;
