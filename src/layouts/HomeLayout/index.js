import React from 'react';

import { Footer, Header, Hero, MobileNav } from 'components';

import { Container, HeroOverlay, Content } from './styled';

const HomeLayout = ({ children }) => {
  return (
    <Container>
      <HeroOverlay>
        <h2>
          From idea to <span>identity</span>, we let the brand do the talking.
          Maybe you should too.
        </h2>
      </HeroOverlay>
      <Hero />

      <Header isClientProject={false} />

      <Content>
        {children} <Footer />
      </Content>
      <MobileNav />
    </Container>
  );
};

export default HomeLayout;
