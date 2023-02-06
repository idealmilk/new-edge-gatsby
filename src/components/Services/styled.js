import styled from 'styled-components';

export const ServicesWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 4rem 0 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Service = styled.div`
  width: 28%;
  p {
    font-size: 2.6rem;
  }
  ul {
    margin-top: 1.4rem;
    list-style-type: disc;
    list-style-position: inside;
  }
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    &:hover {
      transform: none;
    }
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.4rem;
  img {
    width: 100%;
  }
`;

export const Bio = styled.div`
  margin-top: 1rem;
  p {
    font-size: 1.8rem;
  }
`;
