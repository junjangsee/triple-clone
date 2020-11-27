import { css } from 'styled-components';

export const width = css`
  ${({ width }) =>
    width && `height: ${typeof width === 'string' ? width : `${width}px`}`}
`;
