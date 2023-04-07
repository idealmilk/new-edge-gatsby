import React from 'react';

import Logo from 'assets/Logos/logo.png';
import { Footer, Header, Hero, Loader, MobileNav } from 'components';

import { Container, HeroOverlay, Content } from './styled';

type Props = {
  children: React.ReactNode;
  showLoader: any;
};

const HomeLayout = ({ children, showLoader }: Props) => {
  return (
    <Container>
      <Loader showLoader={showLoader} />
      <HeroOverlay>
        <img src={Logo} alt='' />
        <h2>
          Taking you from idea to <span>identity</span>.<br></br> Let your brand
          do the talking.
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
