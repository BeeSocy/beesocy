import styled from 'styled-components';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { breakpoint } from '../../../hooks/useMobile';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';

export const StyledToastRoot = styled(ToastPrimitive.Root)`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 0.8rem;

  padding: 1.2rem;

  background: ${props => props.theme.colors.primary};

  border-radius: 0.8rem;
  border: 0.1rem solid ${props => props.theme.colors.light};

  overflow: hidden;

  &[data-state='open'] {
    animation: slideUp 0.3s;
  }

  &[data-state='closed'] {
    animation: slideDown 0.3s;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20rem);
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateX(4rem);
    }
  }
`;

export const StyledToastViewPort = styled(ToastPrimitive.Viewport)`
  position: fixed;
  z-index: 800;
  bottom: 0;
  right: 0;

  margin: 12rem 2rem;

  max-width: 60vw;

  @media (max-width: ${breakpoint}) {
    max-width: 100vw;
  }
`;

export const StyledToastClose = styled(ToastPrimitive.Close)`
  all: unset;
  ${ButtonStyle}
  border-radius: 100%;
`;
