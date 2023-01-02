import React from 'react';

import { Footer, Header, Hero, MobileNav } from 'components';

import { Container, Content } from './styled';

const HomeLayout = ({ children }) => {
  return (
    <Container>
      <Hero />

      <Header />

      <Content>
        {children} <Footer />
      </Content>
      <MobileNav />
    </Container>
  );
};

export default HomeLayout;
