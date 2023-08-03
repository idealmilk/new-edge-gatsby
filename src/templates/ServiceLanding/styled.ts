import styled from 'styled-components';

export const OuterTextWrap = styled.div`
  width: 100%;
  margin: 6rem auto 0;
  border: 1px solid black;
  border-radius: 2.2rem;
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
`;
