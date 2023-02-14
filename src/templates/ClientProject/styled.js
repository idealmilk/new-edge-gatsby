import styled from 'styled-components';

export const FullWidthImageWrap = styled.div`
  margin: 9rem 0 3rem;
  width: 100%;
  height: 50rem;
  overflow: none;
  text-align: center;
  background: ${(props) =>
    props.gradientLeft
      ? `linear-gradient(90deg, ${props.gradientLeft} 0%, ${props.gradientRight} 100%)`
      : 'black'};

  img {
    object-fit: cover;
    height: 50rem;
    width: 1600px;
    margin: 0 auto;
    mask-image: linear-gradient(
      transparent,
      black 20%,
      black 80%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 20%,
      black 80%,
      transparent 100%
    );
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

  .circle-wrap {
    position: relative;
    width: 48%;
  }

  .circle {
    position: absolute !important;
    top: 50%;
    left: 50%;
    height: 26em !important;
    width: 26em !important;
  }

  span {
    font-size: 2rem;
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
