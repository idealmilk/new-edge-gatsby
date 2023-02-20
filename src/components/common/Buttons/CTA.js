import React from 'react';

import { Container } from './styled';

const CTA = ({ children }) => {
  return <Container>{children ? children : 'Come get us'}</Container>;
};

export default CTA;
