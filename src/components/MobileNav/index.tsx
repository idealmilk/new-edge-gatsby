import React from 'react';

import Logo from 'assets/Logos/logo.png';
import { useScrollDirection } from 'hooks/useScrollDirection';

import HamburgerMenu from './HamburgerMenu';
import { NavbarContainer } from './styled';
const MobileNav = () => {
  const scrollDirection = useScrollDirection();

  return (
    <NavbarContainer className={scrollDirection === 'down' ? 'hide' : 'show'}>
      <HamburgerMenu logo={Logo} />
    </NavbarContainer>
  );
};

export default MobileNav;
