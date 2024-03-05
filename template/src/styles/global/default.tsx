import { css } from 'styled-components';
import { fonts } from 'styles/utils';

export const defaultStylesCSS = css`
  /* Base styles */
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    ${fonts.main};
    overflow-x: hidden;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button,
  input {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, hsl(14, 100%, 69%), hsl(270, 100%, 60%));
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 1rem;
    box-shadow: #383838 0 0 5px inset;
  }
`;
