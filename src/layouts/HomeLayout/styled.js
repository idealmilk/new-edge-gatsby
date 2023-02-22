import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 100%;
  background-color: aqua;
`;

export const HeroOverlay = styled.div`
  position: fixed;
  top: 48vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 80rem;
  max-width: 90%;
  text-align: center;
  z-index: 1;
  h2 {
    pointer-events: none;
    span {
      color: white;
      font-size: 5rem;
      font-family: 'Grafier';
    }
  }
  @media (max-width: 950px) {
    h2 span {
      font-size: 3rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    h2 {
      line-height: 1.6;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: white;
  z-index: 3;
  transform: translateY(100vh);
  padding-top: 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-top: 0;
  }
`;

export const GradientBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgb(39, 219, 255) 0%,
    rgb(232, 83, 255) 100%
  );
`;
