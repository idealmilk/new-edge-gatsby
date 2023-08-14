import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { useWindowSize } from 'react-use';

import { Content, Header } from './styled';

interface HorizontalLockProps {
  children: React.ReactNode;
}

const HorizontalLock = ({ children }: HorizontalLockProps) => {
  const controllerRef = useRef(null);
  const sideRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const size = useWindowSize();

  useLayoutEffect(() => {
    if (sideRef.current) {
      let boxWidth = 0;

      [...sideRef.current.children].forEach((c) => {
        const childBox = c.getBoundingClientRect();
        boxWidth = boxWidth + childBox.width;
      });

      const w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const totalScrollWidth = boxWidth > w ? boxWidth - w : 0;

      setScrollWidth(totalScrollWidth);
    }
  }, [size.height, size.width]);

  return (
    <Controller ref={controllerRef}>
      <Scene
        duration={scrollWidth}
        pin
        triggerHook={0.25}
        enabled={size.width > 768}
      >
        {(progress: any) => {
          return (
            <div>
              <div
                className='cnt'
                style={{
                  transform: `translate3d(-${scrollWidth * progress}px, 0, 0)`,
                }}
              >
                <Header
                  style={{
                    transform: `translate3d(${scrollWidth * progress}px, 0, 0)`,
                  }}
                >
                  The Process
                </Header>
                <Content ref={sideRef} style={{ width: scrollWidth }}>
                  <div
                    style={{
                      height: '30rem',
                      width: `${60 * 6}rem`,
                      display: 'flex',
                    }}
                  >
                    {children}
                  </div>
                </Content>
              </div>
            </div>
          );
        }}
      </Scene>
    </Controller>
  );
};

export default HorizontalLock;
