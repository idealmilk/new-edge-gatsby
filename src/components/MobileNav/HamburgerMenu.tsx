import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import MenuToggle from './MenuToggle';
import NavMenu from './NavMenu';
import {
  HamburgerMenuContainer,
  LogoContainer,
  MenuContainer,
  ContentContainer,
} from './styled';

const menuVariants = {
  open: {
    transform: 'translateX(3%)',
  },
  closed: {
    transform: 'translateX(103%)',
  },
};

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

type Props = {
  logo: string;
};

const HamburgerMenu = ({ logo }: Props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <LogoContainer>
          <Link to='/'>
            <img src={logo} alt=' New Edge' />
          </Link>
        </LogoContainer>

        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
