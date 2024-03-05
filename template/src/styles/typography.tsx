import { css } from 'styled-components';
import { fonts } from './utils';

export const typography = {
  h1: css`
    font-size: 5.5rem;
    font-weight: 800;
    line-height: 1.15;
    text-align: inherit;
  `,
  h2: css`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.15;
    text-align: inherit;
  `,
  h3: css`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.15;
    text-align: inherit;
  `,
  h4: css`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.15;
    text-align: inherit;
  `,
  text: css`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: inherit;
  `,
  menu: css`
    ${fonts.sub}
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    text-align: inherit;
  `,
  button: css`
    font-size: 2.1rem;
    font-weight: 600;
    line-height: 1.43;
    text-align: inherit;
  `,
} as const;
