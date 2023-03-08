import styled from 'styled-components';

export const Container = styled.div`
  height: 52rem !important;
  position: relative;
  max-width: 1300px;
  width: 90%;
  margin: auto;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent 22%,
    black 27%,
    black 80%,
    transparent 90%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 15%,
    black 20%,
    black 80%,
    transparent 90%
  );

  .slide {
    width: 90%;
    min-height: 18rem !important;
    max-height: 18rem !important;
    margin: -2rem auto;
    transform: scale(0.94);
    transition: transform 300ms color 300ms;
    opacity: 0.5;
  }

  .activeSlide {
    position: relative;
    transform: scale(1);
    opacity: 1;
    background: white;
    z-index: 10;
  }

  .slick-dots {
    bottom: -35px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: relative;

    width: 100%;
    margin-top: 6rem;
    height: 32rem !important;
    mask-image: none;
    -webkit-mask-image: none;
    .slide {
      width: 90% !important;
      margin: 0 6% 2rem 4%;
    }
    .slick-slide {
      height: 104%;
    }
    .activeSlide,
    .slide {
      transform: revert !important;
      height: auto;
    }
  }
`;

export const InnerWrap = styled.div``;

export const TextWrap = styled.div`
  width: 76rem;
  max-width: 90%;
  margin: 0 auto;
  p {
    font-family: 'Gotham Bold';
    color: white;
    text-align: center;
  }
`;

export const Card = styled.div`
  margin: 8rem auto 0;
  border: 1px solid black;
  border-radius: 1rem;
  width: calc(70%);
`;

type CardInnerProps = {
  solo?: boolean;
};

export const CardInner = styled.div<CardInnerProps>`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  min-height: ${(props) => (props.solo ? 'auto' : '20rem !important')};
  max-height: ${(props) => (props.solo ? 'auto' : '20rem !important')};
  background: white;
  transform: ${(props) => (props.solo ? 'translate(1rem, 1rem)' : 'none')};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-height: unset !important;
    max-height: unset !important;
    transform: revert !important;
  }
`;

export const Staff = styled.div`
  text-align: right;
  margin-top: 1rem;
  p:last-of-type {
    margin-top: -0.2rem;
    font-size: 1.4rem;
  }
`;
