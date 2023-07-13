import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { InnerFlexWrap } from 'components/common/Containers/styled';
import Logo from 'assets/Logos/logo.png';

import { Container, NavList, LogoWrap } from './styled';

type ClientProjectType = {
  node: {
    clientName: string;
    slug: string;
  };
};

type Props = {
  isClientProject?: boolean;
};

const Header = ({ isClientProject }: Props) => {
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
    <Container active={navBar}>
      <InnerFlexWrap>
        <Link to='/'>
          <LogoWrap>
            <img src={Logo} alt='Home' />
          </LogoWrap>
        </Link>
        <NavList>
          <li>
            <Link to='/work'>Work</Link>

            <ul className='submenu'>
              {allContentfulClientProject.edges.map(
                (edge: ClientProjectType, index: number) => {
                  return (
                    <li key={index}>
                      <Link to={`/work/${edge.node.slug}`}>
                        {edge.node.clientName}
                      </Link>
                    </li>
                  );
                }
              )}
              <li>
                <Link to='/work'>View it all...</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
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
