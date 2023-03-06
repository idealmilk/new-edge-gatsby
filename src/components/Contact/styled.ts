import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  width: 35%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 60%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 90%;
  }
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
