import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  width: 35%;
  display: flex;
  justify-content: space-between;
  margin: 6rem auto 10rem;
`;

export const ItemWrap = styled.div`
  width: 45%;
  text-align: center;
  p {
    font-size: 1.6rem;
  }
  button {
    height: 10rem;
    width: 10rem;
    overflow: hidden;
  }
  a:hover {
    none;
  }
  svg {
    width: 4rem;
    color: black;
  }
`;
