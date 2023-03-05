import React from 'react';

import { Header, MobileNav, Footer } from 'components';

import { Container, Content, ChildrenWrap } from './styled';

type Props = {
  children: React.ReactNode;
  isClientProject?: boolean;
};

const MainLayout = ({ children, isClientProject }: Props) => {
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
