import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import GlobalStyles from 'styles/global';

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
      <GlobalStyles />
      {element}
    </>
  );
};
