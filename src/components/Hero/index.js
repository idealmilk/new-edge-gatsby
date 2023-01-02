import React from 'react';

import { LiquidSphere } from 'components';

import { Container, InnerWrapStyled, ContentWrap } from './styled';

const Hero = () => {
  return (
    <Container>
      <LiquidSphere />
      <InnerWrapStyled>
        <ContentWrap>
          <h1>Edge</h1>
          <p>
            From idea to identity, we let the brand do the talking. Maybe you
            should too.
          </p>
        </ContentWrap>
      </InnerWrapStyled>
    </Container>
  );
};

export default Hero;
