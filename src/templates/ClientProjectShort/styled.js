import styled from 'styled-components';

export const FullWidthImageWrap = styled.div`
  margin-top: 9rem;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const DescriptionWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8rem -4rem 4rem;
`;

export const DescriptionItem = styled.ul`
  position: relative;
  flex-basis: calc(33% - 8rem);
  margin: 0 4rem 6.4rem;
  h4 {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    flex-basis: 100%;
    margin: 0 0 5rem;
  }
`;

export const LandscapeWrap = styled.ul`
  width: 100%;
  img,
  video {
    width: 100%;
  }
`;

export const SquareWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0;
  img,
  video {
    width: 48%;
  }

  .brand {
    width: 40%;
    margin: auto 0;
    h4 {
      font-size: 2.4rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;