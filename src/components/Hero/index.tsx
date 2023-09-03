import React from 'react';

import { LiquidSphere } from 'components';
import { InnerFlexWrapMin } from 'components/common/Containers/styled';

import { Container, ContentWrap } from './styled';

const Hero = () => {
  return (
    <Container>
      <LiquidSphere />
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
