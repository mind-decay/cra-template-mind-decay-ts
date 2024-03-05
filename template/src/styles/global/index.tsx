import { createGlobalStyle } from 'styled-components';
import { resetCSS } from './reset';
import { defaultStylesCSS } from './default';

export const GlobalStyles = createGlobalStyle`
  ${resetCSS}
  ${defaultStylesCSS}
`;
