import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      desktop: string;
      laptop: string;
      tabletLan: string;
      tabletPor: string;
      mobile: string;
    };
    colors: {
      blue: string;
      orange: string;
      navy: string;
      sand: string;
      green: string;
    };
  }
}
