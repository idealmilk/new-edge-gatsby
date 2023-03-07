import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  width: 100%;
  margin-top: 4rem;
  padding-top: 6rem;
  h4 {
    margin-bottom: 2rem;
  }
`;

export const InfoWrap = styled.div`
  width: 45%;
  margin-bottom: 6rem;
  p {
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin-bottom: 4rem;
  }
`;

export const Content = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    padding-top: 2rem;
    flex-direction: column;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: 100%;
  }
`;

export const PagesWrap = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    justify-content: space-between;
  }
`;

export const PageList = styled.ul`
  margin-right: 24rem;
  &:last-of-type {
    margin-right: 16rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    margin-right: 0;
    margin-bottom: 30px;
    width: 50%;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const PageItem = styled.li`
  margin-bottom: 0.6rem;
  font-size: 1.6rem;
  color: black;
  a {
    font-size: 1.6rem;
    color: black;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: ${(props) =>
        props.theme.breakpoints.laptop}) and (hover: none) {
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const SmallPrint = styled.div`
  display: block;
  width: 100%;
  padding: 1rem;
  border-top: 1px solid black;
  text-align: center;
  opacity: 0.9;
  p {
    color: black;
    font-size: 1.2rem;
  }
`;

export const InnerWrap = styled.div`
  width: 600px;
  max-width: 70%;
  margin: auto;
  text-align: center;
`;
