import React from 'react';

import AboutPageHeader from 'assets/PageHeaders/about.gif';

import { Container } from './styled';

const PageHeaeder = ({ title }) => {
  return (
    <Container>
      {/* <h1>{title}</h1> */}
      <img src={AboutPageHeader} alt='' />
    </Container>
  );
};

export default PageHeaeder;
