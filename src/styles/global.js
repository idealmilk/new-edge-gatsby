import * as styled from 'styled-components';

import Grafier from './../assets/Fonts/PPGrafier-Regular.otf';
import RadioGrotesk from './../assets/Fonts/PPRadioGrotesk-Regular.otf';

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Grafier';
    src: url(${Grafier}) format('woff');
  }

  @font-face {
    font-family: 'Radio Grotesk';
    src: url(${RadioGrotesk}) format('woff');
  }

  *,
  html,
  body {
    margin: 0;
    font-family: 'Radio Grotesk', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgZmlsbD0iI0U4QjA1OSIvPjwvc3ZnPg=='),
      auto;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.colors.black};
    font-family: 'Radio Grotesk';
    line-height: 1.1;
  }

  h1 {
    font-size: 7rem;
    @media (max-width: 950px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 4.6rem;
    @media (max-width: 950px) {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 3rem;
    @media (max-width: 950px) {
      font-size: 2rem;
    }
  }

  h4 {
    font-size: 2.8rem;
    @media (max-width: 950px) {
      font-size: 1.8rem;
    }
  }

  h5 {
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.gray};
  }

  p,
  i,
  a,
  b {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.8rem;
    line-height: 1.7;
  }

  i {
    font-style: italic;
  }

  b {
    font-family: 'Radio Grotesk';
  }

  span {
    font-size: inherit;
  }

  a {
    color: black;
    cursor: pointer;
    text-decoration: none;
  }

  li {
    color: black;
    font-size: 1.6rem;
  }

  strong {
    font-weight: 700;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  main {
    background: #f0f0f0;
    /* display: flex;
    flex-direction: row; */
  }

  .canvas {
    order: 2;
    flex: 1;
    height: 100vh !important;
  }

  .overlay {
    position: relative;
    order: 1;
    flex: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  tspan {
    font-size: 4rem;
  }

  .drop-shadow {
    box-shadow: 12px 12px 0px 2px rgba(72, 102, 130, 1);
  }

  img.badge {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
    pointer-events: none;
    @media (max-width: 1300px) {
      width: 120px;
    }
  }

  hr {
    display: block;
    width: 100%;
    height: 0;
    border: 1px #eeeeee solid;
  }

  article,
  aside,
  dialog,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html,
  body {
    text-rendering: optimizeLegibility;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  :focus {
    outline: 0;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .clear {
    clear: both;
  }

  img {
    border: 0;
  }

  img a {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .active {
    background-color: white !important;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray} !important;
    a {
      color: black !important;
    }
  }

  .shadow-container {
    visibility: hidden !important;
  }

  #cookie-notification {
    border-radius: 14px;
    a,
    button {
      font-size: 1.6rem !important;
      color: ${(props) => props.theme.colors.orange} !important;
    }
    a {
      color: ${(props) => props.theme.colors.orange} !important;
    }
    button {
      background: ${(props) => props.theme.colors.orange} !important;
      color: white !important;
    }
  }

  .enzuzo-notification-desc {
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
