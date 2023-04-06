import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: -4rem 0 -4rem;
  text-align: center;
  height: 50rem;
  mask-image: linear-gradient(to bottom, black 75%, transparent 90%);
  -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 90%);
  img {
    /* position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0); */
    mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
  }
`;
