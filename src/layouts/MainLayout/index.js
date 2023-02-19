import React from 'react';

import { Header, MobileNav, Footer } from 'components';

import { Container, Content, ChildrenWrap } from './styled';

const MainLayout = ({ children, isClientProject }) => {
  return (
    <Container>
      <Content>
        <Header isClientProject={isClientProject} />
        <MobileNav />
        <ChildrenWrap>{children}</ChildrenWrap>
        <Footer />
      </Content>
    </Container>
  );
};

export default MainLayout;
