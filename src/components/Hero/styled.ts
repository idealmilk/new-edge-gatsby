import styled from 'styled-components';

import { TightInnerWrap } from 'components/common/Containers/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #9fdaea;
`;

export const InnerWrapStyled = styled(TightInnerWrap)`
  display: flex;
  flex-direction: row;
  height: 100%;
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

export const GradientBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #9fdaea 0%, #ff9bd3 100%);
`;
