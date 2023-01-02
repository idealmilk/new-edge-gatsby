import styled from 'styled-components';

export const BlogWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 11rem -1.5rem 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: -1rem 0;
  }
`;

export const BlogCard = styled.div`
  position: relative;
  margin: 0 4rem 6.4rem;
  */ p {
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    flex-basis: calc(50% - 3rem);
    margin: 0 1.5rem 5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-basis: 100%;
    margin: 0 0 5rem;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
