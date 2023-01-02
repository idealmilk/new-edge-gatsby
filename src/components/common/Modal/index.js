import React from 'react';
import { MdClose } from 'react-icons/md';

import {
  Overlay,
  OverlayInner,
  OverlayStage,
  OverlaySlide,
  Container,
  InnerWrap,
  CloseButton,
} from './styled';

const Modal = ({ parentCallback, children }) => {
  return (
    <Overlay>
      <OverlayInner>
        <OverlayStage>
          <OverlaySlide>
            <Container>
              <InnerWrap>
                <CloseButton onClick={parentCallback}>
                  <MdClose style={{ color: 'black' }} />
                </CloseButton>
                {children}
              </InnerWrap>
            </Container>
          </OverlaySlide>
        </OverlayStage>
      </OverlayInner>
    </Overlay>
  );
};

export default Modal;
