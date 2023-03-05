import React from 'react';

import { Container } from './styled';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
};

const Button = ({ children, type, value }: Props) => {
  return (
    <Container type={type} value={value}>
      {children}
    </Container>
  );
};

export default Button;
