import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 12rem;
  padding: 4rem 0;

  h2 {
    text-align: center;
    color: white;
    margin-bottom: 4rem;
  }
  .slick-dots,
  .slick-active {
    button {
      &::before {
        color: white !important;
      }
    }
  }
  .slick-prev,
  .slick-next {
    &::before {
      font-size: 3rem;
    }
  }
  .slick-prev {
    transform: translate(18rem, -5rem);
    z-index: 100;
  }
  .slick-next {
    transform: translate(-18rem, -5rem);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    .slick-prev,
    .slick-next {
      display: none !important;
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
