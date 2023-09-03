import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 100%;
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
  img {
    display: none;
    width: 12rem;
    margin: 0 auto 2rem;
  }
  h2 {
    pointer-events: none;
    b {
      color: white;
      font-size: 5rem;
      font-family: 'Grafier';
    }
  }
  @media (max-width: 950px) {
    h2 b {
      font-size: 3rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    h2 {
      line-height: 1.6;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    top: 38vh;
    img {
      display: block;
    }
    h2,
    h2 b {
      font-size: 2.2rem;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: white;
  z-index: 3;
  transform: translateY(100vh);
  padding-top: 5rem;
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
