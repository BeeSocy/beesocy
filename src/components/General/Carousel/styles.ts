import styled, { css } from 'styled-components';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';

import { ReactSVG } from 'react-svg';
import { breakpoint } from '../../../hooks/useMobile';

interface IStyledContainer {
  smooth?: boolean;
}

export const Container = styled.div<IStyledContainer>`
  display: flex;

  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: none;

  position: relative;

  scroll-snap-type: x mandatory;

  ${props =>
    props.smooth &&
    css`
      scroll-behavior: smooth;
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface IStyledArrow {
  $leftPosition: number[];
  $rightPosition: number[];
  $inStart: boolean;
  $inEnd: boolean;
}

export const Arrow = styled(ReactSVG)<IStyledArrow>`
  position: fixed;

  z-index: 1;

  background: ${props => props.theme.colors.secondary};

  svg {
    ${ButtonStyle};
    border-radius: 100%;
    width: 6.4rem;
    height: 6.4rem;

    &:active {
      background: ${props => props.theme.colors.light}75;
    }

    @media (min-width: ${breakpoint}) {
      &:hover {
        background: ${props => props.theme.colors.light}75;
      }
    }
  }

  &:nth-child(1) {
    transform: translateY(${props => props.$leftPosition[0]}rem) rotate(180deg);
    right: ${props => props.$leftPosition[1]}rem;

    ${props =>
      props.$inStart &&
      css`
        svg {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}
  }

  &:last-child {
    transform: translateY(${props => props.$rightPosition[0]}rem);
    right: ${props => props.$rightPosition[1]}rem;

    ${props =>
      props.$inEnd &&
      css`
        svg {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}
  }
`;

export const Content = styled.div`
  display: flex;

  & > * {
    scroll-snap-align: start;
  }
`;
