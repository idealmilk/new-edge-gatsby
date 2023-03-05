import React from 'react';

import AboutPageHeader from 'assets/PageHeaders/about.gif';

import { Container } from './styled';

type Props = {
  title: string;
  gif: string;
};

const PageHeaeder = ({ title, gif }: Props) => {
  return (
    <Container>
      <img src={gif} alt={title} />
    </Container>
  );
};

export default PageHeaeder;
