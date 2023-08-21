import styled from 'styled-components';

export const Content = styled.div`
  height: 30rem;
`;

export const Header = styled.h2`
  margin: 0 0 10rem calc((100vw - 1300px) / 2);

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    margin: 0 0 10rem 5%;
  }
`;
