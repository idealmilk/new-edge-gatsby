import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import GlobalStyles from 'styles/global';
import { LoaderProvider } from 'context/LoaderContext';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return (
    <>
      <LoaderProvider>
        <GlobalStyles />
        {element}
      </LoaderProvider>
    </>
  );
};
