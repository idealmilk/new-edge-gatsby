import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import { NavMenuContainer, NavList, NavLink } from './styled';

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

type Props = {
  isOpen?: boolean;
};

export function NavMenu({ isOpen }: Props) {
  const location = useLocation();

  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/work'
            style={{
              color:
                location.pathname === '/work'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            Work
          </Link>
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/about'
            style={{
              color:
                location.pathname === '/about'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            About
          </Link>
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/blog'
            style={{
              color:
                location.pathname === '/blog'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            Blog
          </Link>
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/contact'
            style={{
              color:
                location.pathname === '/contact'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            Contact
          </Link>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}

export default NavMenu;
