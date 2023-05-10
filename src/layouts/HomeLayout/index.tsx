import React, { useEffect, useState } from 'react';

import Logo from 'assets/Logos/logo.png';
import { Footer, Header, Hero, Loader, MobileNav, RichText } from 'components';

import { Container, HeroOverlay, Content } from './styled';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  showLoader: any;
  heroText: {};
};

const HomeLayout = ({ children, showLoader, heroText }: Props) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log(offsetY);

  return (
    <Container>
      <Loader showLoader={showLoader} />
      <HeroOverlay offsetY={offsetY}>
        <img src={Logo} alt='' />
        <motion.div
          initial={{ opacity: showLoader ? 0 : 1, y: showLoader ? 100 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: showLoader ? 3 : 0,
          }}
        >
          <div style={{ transform: `translateY(-${offsetY * 0.6}px)` }}>
            <RichText {...heroText} />
          </div>
        </motion.div>
      </HeroOverlay>
      <Hero showLoader={showLoader} offsetY={offsetY} />

      <Header isClientProject={false} />

      <Content>
        {children} <Footer />
      </Content>
      <MobileNav />
    </Container>
  );
};

export default HomeLayout;
