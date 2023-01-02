import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999992;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-tap-highlight-color: transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
`;

export const OverlayInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const OverlayStage = styled.div`
  overflow: hidden;
  direction: ltr;
  z-index: 99994;
  -webkit-transform: translate3d(0, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const OverlaySlide = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  outline: none;
  white-space: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  z-index: 99994;
`;

export const Container = styled.div`
  max-width: 1082px;
  width: 45%;
  background: white;
  margin: 100px auto 0;
  text-align: center;
  padding: 50px 35px;
  border-radius: 30px;
  position: relative;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: 85%;
    height: auto !important;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 30px auto 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  svg {
    font-size: 26px;
    margin: auto;
  }
`;

export const InnerWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  img {
    height: 35px !important;
    width: auto !important;
  }
  p {
    font-size: 16px;
    color: #969ca0;
    letter-spacing: 0;
    line-height: 1.7;
    margin: 25px auto;
  }
  h2 {
    margin: 35px 0;
  }
  h4 {
    display: block;
    text-align: center;
    font-size: 17px;
    color: #1c2d3b;
    letter-spacing: 0;
    line-height: 1.5;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 auto 25px;
    span {
      color: #ff722e;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      height: 20px !important;
    }
    p {
      font-size: 14px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;
