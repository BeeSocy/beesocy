import styled, { css } from 'styled-components';

import { breakpoint } from '../../../hooks/useMobile';
import { scaleUpAnimation } from '../GlobalCard/styles';

interface StyledImageCard {
  large?: boolean;
}

export const Container = styled.div<StyledImageCard>`
  width: 100%;
  max-width: 82rem;

  border-radius: 2rem;

  overflow: hidden;

  background: ${props => props.theme.colors.primary};

  position: relative;

  img {
    width: 100%;
    height: 40rem;

    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: ${breakpoint}) {
    ${props =>
      props.large &&
      css`
        grid-column: span 2;
      `}
  }

  ${scaleUpAnimation}
`;

export const Content = styled.div`
  display: flex;

  position: relative;

  & > svg {
    position: absolute;
    right: 2rem;
    top: 1rem;

    height: 4.2rem;

    padding: 0.8rem;

    border-radius: 50%;

    background: ${props => props.theme.colors.light}80;
  }
`;

export const Toolbar = styled.section`
  display: flex;

  justify-content: space-evenly;
  align-items: center;

  height: fit-content;
`;

export const CenterElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  z-index: 1;

  width: 100%;
  height: 100%;

  pointer-events: none;
`;
