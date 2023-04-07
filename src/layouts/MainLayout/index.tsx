import React from 'react';

import { Header, MobileNav, Footer, Loader } from 'components';

import { Container, Content, ChildrenWrap } from './styled';

type Props = {
  children: React.ReactNode;
  isClientProject?: boolean;
  showLoader: any;
};

const MainLayout = ({ children, isClientProject, showLoader }: Props) => {
  return (
    <Container>
      <Loader showLoader={showLoader} />
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
