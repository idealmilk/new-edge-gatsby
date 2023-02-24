import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from 'styles/theme';
import GlobalStyles from 'styles/global';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location);
  if (currentPosition) {
    window.scrollTo(...currentPosition);
  } else {
    window.scrollTo(0, 0);
  }
  return false;
};
