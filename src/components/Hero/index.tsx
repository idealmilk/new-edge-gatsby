import React, { useState, useEffect } from 'react';

import { LiquidSphere } from 'components';

import {
  Container,
  InnerWrapStyled,
  ContentWrap,
  GradientBackground,
} from './styled';
import { motion } from 'framer-motion';

type HeroProps = {
  showLoader: any;
};

const Hero = ({ showLoader }: HeroProps) => {
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

  return <Container>{renderedBackground}</Container>;
};

export default Hero;
