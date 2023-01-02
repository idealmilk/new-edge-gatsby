import React from 'react';
import { Link } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { SEO } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';

const FourOhFourPage = () => {
  return (
    <MainLayout cta={true}>
      <SEO title='Page not Found' />
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
