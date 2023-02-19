import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { InnerFlexWrap } from 'components/common/Containers/styled';
import { Logo } from 'assets/Logos';

import { Container, NavList, LogoWrap } from './styled';

const Header = ({ isClientProject }) => {
  const { allContentfulClientProject } = useStaticQuery(query);
  const [navBar, setNavBar] = useState(false);

  const changeNavBar = () => {
    if (isClientProject) {
      setNavBar(true);
    } else if (!isClientProject && window.scrollY >= 800) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    changeNavBar();
    window.addEventListener('scroll', changeNavBar);
  });

  return (
    <Container className={navBar && 'active'}>
      <InnerFlexWrap>
        <Link to='/'>
          <LogoWrap>
            <img src={Logo} alt='Home' />
          </LogoWrap>
        </Link>
        <NavList>
          <li>
            <Link href='/work'>Work</Link>

            <ul className='submenu'>
              {allContentfulClientProject.edges.map((edge, index) => {
                return (
                  <li key={index}>
                    <Link to={`/work/${edge.node.slug}`}>
                      {edge.node.clientName}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to='/work'>View it all...</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </NavList>
      </InnerFlexWrap>
    </Container>
  );
};

const query = graphql`
  query {
    allContentfulClientProject(sort: { completionDate: DESC }, limit: 4) {
      edges {
        node {
          clientName
          slug
        }
      }
    }
  }
`;

export default Header;
