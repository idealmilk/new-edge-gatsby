import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 100%;
  background-color: black;
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
