import { color, space, layout, flexbox } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { css, mq, styled } from '../utils/styles';

export const Grid = styled('div', { shouldForwardProp })(
  ({ theme }) => css`
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    flex-grow: 1;
    max-width: ${theme.breakpoints[theme.breakpoints.length - 1]};

    ${mq({
      padding: ['0 8px', '0 8px', '0 16px', '0 24px'],
    })}
  `,
  space,
  color,
  layout,
  flexbox,
);
