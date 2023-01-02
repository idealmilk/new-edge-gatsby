import React from 'react';

import { Header, MobileNav, Footer } from 'components';

import { Container, Content, ChildrenWrap } from './styled';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Content>
        <Header />
        <MobileNav />
        <ChildrenWrap>{children}</ChildrenWrap>
        <Footer />
      </Content>
    </Container>
  );
};

export default MainLayout;
