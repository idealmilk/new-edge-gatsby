import React from 'react';

import AboutPageHeader from 'assets/PageHeaders/about.gif';

import { Container } from './styled';

const PageHeaeder = ({ title, gif }) => {
  return (
    <Container>
      <img src={gif} alt={title} />
    </Container>
  );
};

export default PageHeaeder;
