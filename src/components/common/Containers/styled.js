import styled from 'styled-components';

export const InnerWrap = styled.div`
  position: relative;
  max-width: 1300px;
  width: 90%;
  margin: auto;
`;

export const TightInnerWrap = styled(InnerWrap)`
  max-width: 1100px;
`;

export const TextWrap = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
`;

export const QuoteWrap = styled.div`
  width: 100%;
  margin: 6rem 0;
  padding: 3rem 0;
  background-color: ${(props) =>
    props.color === 'sand'
      ? props.theme.colors.sand
      : props.theme.colors.green};
  p {
    width: 84rem;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    font-family: 'Gotham Bold';
    font-size: 3rem;
    font-style: italic;
  }
`;

export const BodyWrap = styled.div`
  width: 66rem;
  max-width: 90%;
  margin: 0 auto;
  &:last-of-type {
    margin-bottom: 8rem;
  }
  h3 {
    margin: 3rem 0 1rem;
  }
  .cover-image {
    display: block;
    width: 40rem;
    max-height: 30rem;
    max-width: 90%;
    object-fit: cover;
    border-radius: 2.5rem;
    margin: -16rem auto 8rem;
  }
  a {
    position: relative;
    color: ${(props) => props.theme.colors.orange};
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.orange};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    .cover-image {
      margin: -14rem auto 8rem;
    }
  }
`;

export const HeaderWrap = styled(InnerWrap)`
  h2 {
  }
`;
