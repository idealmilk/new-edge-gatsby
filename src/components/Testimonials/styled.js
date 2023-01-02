import styled from 'styled-components';

export const Container = styled.div`
  .slide {
    transform: scale(0.96);
    transition: transform 300ms;
    opacity: 0.5;
  }

  .activeSlide {
    transform: scale(1.02);
    opacity: 1;
  }

  .arrow {
    background-color: #fff;
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }

  .arrow svg {
    transition: color 300ms;
  }

  .arrow svg:hover {
    color: #68edff;
  }

  .next {
    right: 0%;
    top: 50%;
  }

  .prev {
    left: 0%;
    top: 50%;
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
  border: 1px solid black;
  border-radius: 3rem;
  padding: 3rem;
  margin: 2rem;
`;

export const Staff = styled.div`
  text-align: right;
  margin-top: 1rem;
  p:last-of-type {
    margin-top: -0.2rem;
    font-size: 1.4rem;
  }
`;
