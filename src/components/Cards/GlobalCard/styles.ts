import { css } from 'styled-components';

export const scaleUpAnimation = css`
  @keyframes scaleUp {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  animation: scaleUp 0.5s;
`;
