import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;

  top: 0;
  background-color: transparent;
  z-index: 500;
  width: 100%;
  border: 0px solid transparent;

  transition: 0.3s ease-in, border 0.3s ease-in;
  a {
    transition: color 0.3s ease-in, border 0.3s ease-in;
    font-size: 2.2rem;
    &:hover {
      font-family: 'Grafik';
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    display: none;
  }
`;

export const NavList = styled.nav`
  display: flex;
  padding: 30px 0;
  li {
    display: inline-block;
    margin-right: 15px;
    transition: all 0.3s ease-in-out;
    &:hover {
      .submenu {
        height: 22rem;
      }
      a {
        color: black;
        &::before {
          visibility: visible;
          transform: scale(1, 1);
        }
      }
    }
    .submenu {
      overflow: hidden;
      position: absolute;
      right: 0;
      width: 32rem;
      height: 0;
      line-height: 40px;
      box-sizing: border-box;
      transition: height 0.3s ease-in-out;
      transition-delay: 0.1s;
      a {
        color: black;
        margin-top: 0.6rem;
        font-size: 2.2rem;
        border: 1px solid black;
        border-radius: 3rem;
        padding: 1rem 2.2rem;
        &:hover {
          color: black;
          font-family: 'Grafik';
        }
      }
    }
    a {
      color: black;
      display: block;
      padding: 0 7px 0 7px;
      margin: 0 0 10px;
      text-decoration: none;
      position: relative;
    }
  }
  img {
    width: 2rem;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  img {
    display: flex;
    margin: auto 0;
    width: 14rem;
    transform: translateY(-0.6rem);
  }
`;
