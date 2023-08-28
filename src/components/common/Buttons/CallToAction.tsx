import React from 'react';

import { CallToActionContainer } from './styled';

type Props = {
  children: React.ReactNode;
};

const CallToAction = ({ children }: Props) => {
  return (
    <CallToActionContainer>
      {children}
      <p>
        <small>
          No fees attached 100% non-committal.<br></br> Just a chat about your
          marketing and content dreams.
        </small>
      </p>
    </CallToActionContainer>
  );
};

export default CallToAction;
