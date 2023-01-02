import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@gatsbyjs/reach-router';

import CollapsibleListItem from './CollapsibleListItem';
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

const servicesMenu = [
  {
    title: 'Financial planning',
    slug: '/services/financial-planning',
  },
  {
    title: 'Retirement planning',
    slug: '/services/retirement-planning',
  },
  {
    title: 'Mentoring & coaching',
    slug: '/services/mentoring-and-coaching',
  },
];

export function NavMenu({ isOpen }) {
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
            to='/about'
            style={{
              color:
                location.pathname === '/about-us'
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
          <CollapsibleListItem parent='Services' children={servicesMenu} />
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
            to='/pricing'
            style={{
              color:
                location.pathname === '/pricing'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            Pricing
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
      </NavList>
    </NavMenuContainer>
  );
}

export default NavMenu;
