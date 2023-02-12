import React from 'react';

import { LiquidSphere } from 'components';

import {
  Container,
  InnerWrapStyled,
  ContentWrap,
  GradientBackground,
} from './styled';

const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(
    !window['safari'] ||
      (typeof safari !== 'undefined' && safari.pushNotification)
  );

const Hero = () => {
  return (
    <Container>
      {!isSafari && <LiquidSphere />}

      {isSafari && <GradientBackground />}
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
