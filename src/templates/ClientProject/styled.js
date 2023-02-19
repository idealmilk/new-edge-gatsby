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
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 30rem;
    margin: 7rem 0 0;
    img {
      height: 30rem;
    }
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8rem -4rem 4rem;
`;

export const DescriptionItem = styled.div`
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
    h4 {
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-basis: 90%;
    margin: 0 4rem 4rem;
  }
`;

export const LandscapeWrap = styled.div`
  width: 100%;
  img,
  video {
    width: 100%;
  }
`;

export const SquareWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0;
  img,
  video {
    width: 48%;
  }
`;

export const SquareTextWrap = styled.div`
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

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    .brand {
      width: 100%;
      h4 {
        font-size: 2rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    .brand {
      width: 100%;
    }
    img {
      margin: 0 auto;
    }
  }
`;

export const SpinnerWrap = styled.div`
  position: relative;
  width: 48%;
  height: auto;
  img,
  .circle-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle {
    height: 28.4em !important;
    width: 28.4em !important;
  }

  img {
    width: 16rem;
  }

  span {
    font-size: 2.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      width: 8rem;
    }
    .circle-wrap {
      /* transform: translate(19rem, -9rem); */
      .circle {
        height: 12.6em !important;
        width: 12.6em !important;
        span {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
