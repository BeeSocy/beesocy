import styled, { css, keyframes } from 'styled-components';
import { ILikeButton } from '.';

import { Button } from '../../Button';

const Pulse = keyframes`
  0% {
    transform: scale(1)
  }
  
  50% {
    transform: scale(1.3)
  }

  100% {
    transform: scale(1)
  }
`;

export const Container = styled(Button)<ILikeButton>`
  svg {
    * {
      color: ${props =>
        props.isLiked ? props.theme.colors.bee : props.theme.colors.text};
    }

    ${props =>
      props.isLiked &&
      css`
        animation: ${Pulse} 0.3s ease-out;
      `}
  }
`;
