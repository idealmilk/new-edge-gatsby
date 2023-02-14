import styled from 'styled-components';

export const Container = styled.div`
  height: 44rem !important;
  width: 70%;
  margin: 0 auto;
  transform: translateY(-8rem);
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent 12%,
    black 18%,
    black 80%,
    transparent 90%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 12%,
    black 18%,
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

export const CardInner = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  min-height: ${(props) => (props.solo ? 'auto' : '20rem !important')};
  max-height: ${(props) => (props.solo ? 'auto' : '20rem !important')};
  background: white;
  transform: ${(props) => (props.solo ? 'translate(1rem, 1rem' : 'none')};
`;

export const Staff = styled.div`
  text-align: right;
  margin-top: 1rem;
  p:last-of-type {
    margin-top: -0.2rem;
    font-size: 1.4rem;
  }
`;
