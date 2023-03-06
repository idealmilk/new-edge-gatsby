import React from 'react';
import { Link } from 'gatsby';

import Logo from 'assets/Logos/logo.png';

import HamburgerMenu from './HamburgerMenu';
import { NavbarContainer, NavbarLogo } from './styled';
import { useScrollDirection } from 'hooks/useScrollDirection';

const MobileNav = () => {
  const scrollDirection = useScrollDirection();

  return (
    <NavbarContainer className={scrollDirection === 'down' ? 'hide' : 'show'}>
      <NavbarLogo>
        <Link to='/'>
          <img src={Logo} alt='New Edge' />
        </Link>
      </NavbarLogo>
      <HamburgerMenu logo={Logo} />
    </NavbarContainer>
  );
};

export default MobileNav;
