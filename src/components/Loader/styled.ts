import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000000000;
  transform: translateY(0);
  opacity: 1;
  transition: transform 1s ease-in-out;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;

  .loading {
    --spacer: calc(4rem * 1 + 4rem); /* [3] */
    position: relative;
    width: calc(4rem * 3 + 1 * 4rem * 2);
    height: 4rem;
    /* border: 1px solid red; */ /* [4] */
  }

  .loading span {
    position: absolute;
    top: 0;
    width: 4rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: #ff4da3;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .loading span:nth-child(1) {
    left: 0;
    animation: scale-up 600ms infinite;
  }

  .loading span:nth-child(2) {
    left: 0;
    animation: move-right 600ms infinite;
  }

  .loading span:nth-child(3) {
    left: calc(var(--spacer) * 1);
    animation: move-right 600ms infinite;
  }

  .loading span:nth-child(4) {
    left: calc(var(--spacer) * 2);
    animation: scale-down 600ms infinite;
  }

  @keyframes scale-up {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes scale-down {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }

  @keyframes move-right {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(var(--spacer), 0);
    } /* [3] */
  }

  /* General styling */
  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
`;
