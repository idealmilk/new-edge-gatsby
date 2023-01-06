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
`;

export const Content = styled.div`
  position: relative;
  background-color: white;
  z-index: 3;
  transform: translateY(100vh);
  padding-top: 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    transform: none;
  }
`;
