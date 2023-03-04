import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: -4rem 0 -4rem;
  height: 50vh;
  mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
  }
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12rem;
    color: white;
    background-color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;
