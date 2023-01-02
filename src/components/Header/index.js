import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Container, NavList, NavItem } from './styled';
import { InnerWrap } from '../common/Containers/styled';

const Header = () => {
  const { allContentfulClientProject } = useStaticQuery(query);
  return (
    <Container>
      <NavList>
        <li>
          <Link href='/works'>Works</Link>
          <InnerWrap>
            <ul class='submenu'>
              {allContentfulClientProject.edges.map((edge, index) => {
                return (
                  <li>
                    <Link to={`/works/${edge.node.slug}`}>
                      {edge.node.clientName}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to='/works'>View it all...</Link>
              </li>
            </ul>
          </InnerWrap>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
      </NavList>
    </Container>
  );
};

const query = graphql`
  query {
    allContentfulClientProject {
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
