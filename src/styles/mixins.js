import { css } from 'styled-components';

const flex = (justify = 'normal', align = 'normal') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export { flex };
