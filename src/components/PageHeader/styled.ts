import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: -4rem 0 -4rem;
  text-align: center;
  height: 50rem;
  mask-image: linear-gradient(to bottom, black 75%, transparent 90%);
  -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 90%);
  img {
    mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 90%);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    height: 33%;
  }
`;
