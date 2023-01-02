import React from 'react';

import { Container } from './styled';

const Button = ({ onClick, children, hollow }) => {
  return (
    <Container hollow={hollow} onClick={onClick}>
      {children ? children : 'Get in touch'}
    </Container>
  );
};

export default Button;
