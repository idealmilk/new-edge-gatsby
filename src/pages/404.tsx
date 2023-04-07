import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { SEO } from 'components';
import { InnerWrap } from 'components/common/Containers/styled';
import { LoaderContext } from 'context/LoaderContext';

const FourOhFourPage = () => {
  const { showLoader, toggleLoader } = useContext(LoaderContext);

  useEffect(() => {
    if (showLoader) {
      toggleLoader();
    }
  }, [showLoader]);

  return (
    <MainLayout showLoader={showLoader}>
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
