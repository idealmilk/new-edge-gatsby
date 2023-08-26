import styled from 'styled-components';

type FullWidthImageWrapProps = {
  gradientLeft?: string;
  gradientRight?: string;
};

export const FullWidthImageWrap = styled.div<FullWidthImageWrapProps>`
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
    max-width: 100%;
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

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    background: none;
    img {
      mask-image: none;
      -webkit-mask-image: none;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    height: auto;
    margin: 1.2rem 0 0;

    img {
      height: auto;
    }
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8rem -4rem 8rem;
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
    order: 2;
    width: 48%;
  }

  .brand {
    order: 1;
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
    width: 100%;
    h4 {
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img,
    video {
      margin: 0 auto;
    }
  }
`;

export const SquareTextWrapBrand = styled(SquareTextWrap)`
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    flex-direction: column;

    .brand {
      order: 2;
      width: 100%;
    }

    img,
    video {
      width: 100%;
      order: -1;
      margin: 0 0 8rem;
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
    height: 30rem !important;
    width: 30rem !important;
    span {
      font-size: 2.6rem;
      transform-origin: center 6em 0px !important;
    }
  }

  img {
    width: 16rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      width: 8rem;
    }

    .circle {
      height: 12.6rem !important;
      width: 12.6rem !important;
      span {
        font-size: 1.1rem;
        transform-origin: center 6em 0px !important;
      }
    }
  }
`;
