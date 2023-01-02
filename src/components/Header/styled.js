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

export const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
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
      left: 0;
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
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  svg {
    font-size: 1.1rem;
    background: transparent;
    margin-left: 6px;
  }
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
  a {
    font-size: 1.6rem;
    display: block;
    &:hover {
      color: ${(props) => props.theme.colors.orange} !important;
    }
  }
`;
