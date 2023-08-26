import styled from 'styled-components';

export const InnerWrap = styled.div`
  width: 80rem;
  max-width: 90%;
  margin: 16rem auto 3rem;
  h1 {
    font-style: italic;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    font-family: 'Grafier';
    text-align: center;
    text-align: center;
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 10rem auto 3rem;
  }
`;

export const OuterTextWrap = styled.div`
  width: 100%;
  margin: 6rem auto 0;
  border: 1px solid black;
  border-radius: 2.2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    border: none;
  }
`;

export const TextWrap = styled.div`
  border: 1px solid black;
  padding: 4rem;
  border-radius: 2.2rem;
  transform: translate(2rem, 2rem);
  background: white;

  p {
    margin-bottom: 2rem;
    text-align: left;
    font-family: 'Radio Grotesk';
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    transform: none;
    border: none;
    padding: 0;
  }
`;
