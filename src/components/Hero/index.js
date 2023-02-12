import React, { useState, useEffect } from 'react';

import { LiquidSphere } from 'components';

import {
  Container,
  InnerWrapStyled,
  ContentWrap,
  GradientBackground,
} from './styled';

const Hero = () => {
  const [renderedBackground, setRenderedBackground] = useState(
    <GradientBackground />
  );

  const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window['safari'] ||
        (typeof safari !== 'undefined' && safari.pushNotification)
    );

  useEffect(() => {
    if (!isSafari) {
      setRenderedBackground(<LiquidSphere />);
    }
  }, [isSafari]);

  return (
    <Container>
      {renderedBackground}
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
