import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const ContentWrap = styled.div`
  margin: auto 0;
  background-color: transparent;
  color: white;
  width: 60%;
  p {
    margin: 1rem 0;
    width: 75%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
    margin: 36vh auto;
    text-align: center;
    p {
      text-align: center;
      margin: 1rem auto 3rem;
    }
    h1 {
      text-align: center;
      width: 90%;
      margin: 0 auto;
    }
  }
`;
