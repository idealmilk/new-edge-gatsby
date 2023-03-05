import React from 'react';
import { Link } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { SEO } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';

const FourOhFourPage = () => {
  return (
    <MainLayout>
      <SEO title='Page not Found' description='This page cannot be found' />
      <InnerWrap>
        <p>
          Your page could not be found. Click <Link to='/'>here</Link> to return
          to the homepage.
        </p>
      </InnerWrap>
    </MainLayout>
  );
};

export default FourOhFourPage;
