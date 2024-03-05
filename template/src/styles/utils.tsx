import { css } from 'styled-components';

export const screenBreakpoints = {
  mobile: 570,
  tablet: 991,
  laptop: 1200,
  desktop: 1440,
} as const;

export const fonts = {
  main: css`
    font-family: 'Poppins', sans-serif;
  `,
  sub: css`
    font-family: 'Plus Jakarta Sans', sans-serif;
  `,
} as const;
