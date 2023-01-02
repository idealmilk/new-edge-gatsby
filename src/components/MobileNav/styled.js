import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: none;
  position: fixed;
  top: 0;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  z-index: 1000;
  display: none;
  background-color: white;
  border-bottom: 1px #eeeeee solid;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    display: block;
  }
`;

export const NavbarLogo = styled.div`
  width: 140px;
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 20px;
  transform: translateY(-50%);
  img {
    display: block;
    width: 100%;
    margin: 0;
  }
`;

export const HamburgerMenuContainer = styled.div`
  display: flex;
  background-color: hsl(20, 100%, 62%);
`;

export const LogoContainer = styled.div`
  width: 140px;
  margin: 10px 0 0 17px;
`;

export const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 104%;
  height: 100%;
  background-color: white;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
  box-shadow: inset 8px 0px 19px -14px rgba(48, 48, 48, 0.28);
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
  button {
    margin: 0 auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 20px;
`;

export const NavLink = styled(motion.li)`
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  cursor: pointer;
  padding: 20px 0 19px;
  a {
    font-size: 3rem;
    transition: all 200ms ease-in-out;
  }
`;

export const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin: 15px 28px 0 0;
  padding: 10px 10px 5px;
  border-radius: 5px;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  svg {
    background: transparent;
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
  transition: background-color 0.25s ease-out;
`;

export const ParentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  p {
    font-size: 3rem;
  }

  .closed {
    .vertical {
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
    }
    .horizontal {
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      opacity: 1;
    }
  }

  .opened {
    opacity: 1;
    .vertical {
      transition: all 0.5s ease-in-out;
      transform: rotate(90deg);
    }
    .horizontal {
      transition: all 0.5s ease-in-out;
      transform: rotate(90deg);
      opacity: 0;
    }
  }

  .circle-plus {
    transform: translate(-16px, 22px);
  }

  .circle-plus .circle {
    position: relative;
  }
  .circle-plus .circle .horizontal {
    position: absolute;
    background-color: black;
    width: 16px;
    height: 2px;
    left: 50%;
    margin-left: -7px;
    top: 50%;
  }
  .circle-plus .circle .vertical {
    position: absolute;
    background-color: black;
    width: 2px;
    height: 16px;
    left: 50%;
    margin-left: -0.5px;
    top: 50%;
    margin-top: -7px;
  }
`;

export const ChildWrap = styled.li`
  height: 0;
  overflow: hidden;
  background-color: transparent;
  transition: height 0.25s ease-in-out;
`;

export const ChildItem = styled.ul`
  margin: 10px 0 10px 20px;
  font-size: 2rem;
  a {
    font-size: 2rem;
    margin-left: 14px;
  }
`;
