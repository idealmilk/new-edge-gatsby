import styled from 'styled-components';

export const CaseStudies = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap;
  margin: 8rem 2rem 4rem; */

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }

  a {
    /* position: relative;
    flex-basis: calc(33% - 4rem);
    margin: 0 2rem 6.4rem; */
    width: 30%;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 100%;
    }
  }

  a > div {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Header = styled.h2`
  margin: 10rem 0 0;
`;

export const ServicesWrap = styled.div`
  width: 44%;
  margin-top: 9rem;

  div {
    margin-bottom: 2rem;

    .main-content-body-header {
      font-weight: bold;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const VideoWrap = styled.div`
  width: 50%;
  height: 30rem;
  background-color: lightgray;
  border: 1px solid black;
  text-align: center;
  justify-content: center;
  margin: auto 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
