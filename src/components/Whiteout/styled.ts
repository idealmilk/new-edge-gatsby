import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 10000000;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;

  .row {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .circle {
    display: inline-block;
    width: 30px;
    height: 30px;
  }
  .circle1 {
    animation-name: loading;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    transform: translate(0);
    animation-timing-function: ease-in-out;
    background-color: black;
  }
  @keyframes loading {
    0% {
      transform: translate(0, -30px);
    }
    50% {
      transform: translate(0);
    }
    100% {
      transform: translate(0, 30px);
    }
  }
  .circle2 {
    animation-name: loading2;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    transform: translate(0);
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    background-color: black;
  }
  @keyframes loading2 {
    0% {
      transform: translate(0, -30px);
    }
    50% {
      transform: translate(0);
    }
    100% {
      transform: translate(0, 30px);
    }
  }
  .circle3 {
    animation-name: loading3;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    transform: translate(0);
    animation-timing-function: ease-in-out;
    background-color: black;
  }
  @keyframes loading3 {
    0% {
      transform: translate(0, -30px);
    }
    50% {
      transform: translate(0);
    }
    100% {
      transform: translate(0, 30px);
    }
  }
`;
