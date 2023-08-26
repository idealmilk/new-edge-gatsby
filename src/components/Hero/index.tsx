import React, { useState, useEffect } from 'react';

import { LiquidSphere } from 'components';
import { InnerFlexWrapMin } from 'components/common/Containers/styled';

import { Container, ContentWrap, GradientBackground } from './styled';

const Hero = () => {
  const [renderedBackground, setRenderedBackground] = useState(
    <GradientBackground />
  );

  const userAgent =
    typeof window !== 'undefined' ? window.navigator.userAgent : '';

  let browser = '';
  if (userAgent.indexOf('Chrome') !== -1) {
    browser = 'Chrome';
  } else if (userAgent.indexOf('Firefox') !== -1) {
    browser = 'Firefox';
  } else if (userAgent.indexOf('Safari') !== -1) {
    browser = 'Safari';
  } else if (userAgent.indexOf('Edge') !== -1) {
    browser = 'Edge';
  } else if (userAgent.indexOf('Trident') !== -1) {
    browser = 'Internet Explorer';
  }

  useEffect(() => {
    if (browser !== 'Safari') {
      setRenderedBackground(<LiquidSphere />);
    }
  }, [browser]);

  return (
    <Container>
      {renderedBackground}
      <InnerFlexWrapMin>
        <ContentWrap>
          <h1>Edge</h1>
          <p>
            Taking you from idea to identity. Let your brand do the talking.
          </p>
        </ContentWrap>
      </InnerFlexWrapMin>
    </Container>
  );
};

export default Hero;
