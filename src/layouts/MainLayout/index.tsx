import React from 'react';
import { Link } from 'gatsby';

import { Logo } from 'assets/Logos';
import { Header, MobileNav, Footer } from 'components';

import { Container, Content, ChildrenWrap, LogoContainer } from './styled';

type Props = {
  children: React.ReactNode;
  isClientProject?: boolean;
  isSubPage?: boolean;
};

const MainLayout = ({ children, isClientProject, isSubPage }: Props) => {
  return (
    <Container>
      <Content>
        <Header isClientProject={isClientProject} />
        <LogoContainer isSubPage={isSubPage}>
          <Link to='/'>
            <img src={Logo} alt='NewEdge' />
          </Link>
        </LogoContainer>
        <MobileNav />
        <ChildrenWrap>{children}</ChildrenWrap>
        <Footer />
      </Content>
    </Container>
  );
};

export default MainLayout;
