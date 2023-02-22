import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 500;
  width: 100%;
  height: 9rem;
  border-bottom: 0px solid transparent;
  transition: background-color 0.3s ease-out, border-bottom 0.2s ease-out;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavList = styled.nav`
  display: flex;
  padding: 30px 0;
  li {
    display: inline-block;
    width: 10rem;
    transition: all 0.3s ease-in-out;
    a {
      transition: border-color 0.1s;
      font-size: 2.2rem;
      &:hover {
        font-family: 'Grafier';
        /* transform: scale(1.07); */
      }
    }
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
      text-align: right;
      margin-top: 2rem;
      right: 0;
      width: 32rem;
      height: 0;
      line-height: 40px;
      box-sizing: border-box;
      transition: height 0.3s ease-in-out;
      transition-delay: 0.1s;
      li {
        width: auto;
        margin-left: 1rem;
      }
      a {
        color: black;
        margin-top: 0.6rem;
        font-size: 2.2rem;
        background: white;
        border: 1px solid black;
        border-radius: 3rem;
        padding: 1rem 2.2rem;
        &:hover {
        font-family: 'Grafier';
        transform: none;
      }
    }
        &:hover {
          color: black;
          font-family: 'Grafier';
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
