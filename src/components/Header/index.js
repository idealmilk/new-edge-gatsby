import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { InnerFlexWrap } from 'components/common/Containers/styled';
import { Logo } from 'assets/Logos';

import { Container, NavList, LogoWrap } from './styled';

const Header = () => {
  const { allContentfulClientProject } = useStaticQuery(query);
  return (
    <Container>
      <InnerFlexWrap>
        <Link to='/'>
          <LogoWrap>
            <img src={Logo} alt='Home' />
          </LogoWrap>
        </Link>
        <NavList>
          <li>
            <Link href='/work'>Work</Link>

            <ul class='submenu'>
              {allContentfulClientProject.edges.map((edge, index) => {
                return (
                  <li>
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
    allContentfulClientProject(limit: 4) {
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
