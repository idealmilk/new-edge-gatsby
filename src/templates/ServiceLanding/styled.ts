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
