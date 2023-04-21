import React from 'react';

import Logo from 'assets/Logos/logo.png';
import { Footer, Header, Hero, MobileNav, RichText } from 'components';

import { Container, HeroOverlay, Content } from './styled';

type Props = {
  children: React.ReactNode;
  heroText: {};
};

const HomeLayout = ({ children, heroText }: Props) => {
  return (
    <Container>
      <HeroOverlay>
        <img src={Logo} alt='' />
        <RichText {...heroText} />
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
