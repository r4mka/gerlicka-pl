import facepaint from 'facepaint';
import emotionNormalize from 'emotion-normalize';
import { css } from '@emotion/react';

export { default as styled } from '@emotion/styled';
export { default as emotionNormalize } from 'emotion-normalize';
export * from '@emotion/react';

export const breakpoints = ['480px', '760px', '960px', '1120px'];
export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp})`));

const colors = {
  beige: '#F0E7DE',
  rust: '#C06318',
  brown: '#D1947a',
  pink: '#E7B7AD',
  black: '#000',
};

export const theme = { colors, breakpoints };

export const globalStyle = css`
  ${emotionNormalize}

  #___gatsby {
    min-height: 100vh;
    display: flex;
  }

  #gatsby-focus-wrapper {
    flex: 1;
    display: flex;
  }
`;
