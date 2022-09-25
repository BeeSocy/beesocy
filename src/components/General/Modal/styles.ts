import styled, { css } from 'styled-components';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';
import { breakpoint } from '../../../hooks/useMobile';

interface IStyledDialogOverlayProps {
  $active?: boolean;
}

export const StyledDialogOverlay = styled(
  DialogPrimitive.Overlay
)<IStyledDialogOverlayProps>`
  position: fixed;
  z-index: 150;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: block;

  &[data-state='open'] {
    animation: showOverlayOn 0.3s both;
  }

  &[data-state='closed'] {
    animation: showOverlayOff 0.3s both;
  }

  @keyframes showOverlayOn {
    from {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes showOverlayOff {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }

  ${props =>
    !props.$active &&
    css`
      display: none;
    `}
`;

interface IStyledDialogContentProps {
  $xPos?: number;
  $yPos?: number;
  $center?: boolean;
}

export const StyledDialogContent = styled(
  DialogPrimitive.Content
)<IStyledDialogContentProps>`
  display: flex;

  flex-direction: column;

  background: ${props => props.theme.colors.primary};

  border-radius: 0.8rem;

  padding: 1.2rem;

  position: fixed;
  z-index: 200;
  bottom: 0;

  overflow: auto;

  max-height: 85vh;
  width: 100vw;

  &[data-state='open'] {
    animation: showContentOn 0.3s both;
  }

  &[data-state='closed'] {
    animation: showContentOff 0.3s both;
  }

  @keyframes showContentOn {
    from {
      opacity: 0;
      visibility: hidden;
      transform: translateY(50%);
    }
  }

  @keyframes showContentOff {
    to {
      opacity: 0;
      visibility: hidden;
      transform: translateY(50%);
    }
  }

  @media (min-width: ${breakpoint}) {
    top: ${props => (props.$yPos ? `${props.$yPos}px` : 0)};
    left: ${props => (props.$xPos ? `${props.$xPos}px` : 0)};

    max-width: 70rem;

    @keyframes showContentOn {
      from {
        opacity: 0;
        visibility: hidden;
        transform: translateY(50%);

        ${props =>
          props.$center &&
          css`
            transform: translate(-50%, 0%);
          `}
      }
    }

    @keyframes showContentOff {
      to {
        opacity: 0;
        visibility: hidden;
        transform: translateY(50%);

        ${props =>
          props.$center &&
          css`
            transform: translate(-50%, 0%);
          `}
      }
    }

    ${props =>
      props.$center &&
      css`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `};
  }
`;

export const StyledDialogHeader = styled.section`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 0.8rem;

  border-bottom: 1px solid ${props => props.theme.colors.light};

  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const StyledDialogClose = styled(DialogPrimitive.Close)`
  ${ButtonStyle};
  width: fit-content;
  border-radius: 100%;
`;
