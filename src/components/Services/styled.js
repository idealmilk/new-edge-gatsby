import styled from 'styled-components';

export const ServicesWrap = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: 8rem auto 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Service = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 1rem;
`;

export const ServiceInner = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  background: white;
  transform: translate(1rem, 1rem);
  p {
    font-size: 2.6rem;
  }
  ul {
    margin-top: 1.4rem;
    list-style-type: disc;
    list-style-position: inside;
    li {
      line-height: 2;
    }
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
