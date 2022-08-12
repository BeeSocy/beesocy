import styled, { css } from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

interface StyledImageCard {
  large?: boolean;
}

export const Container = styled.div<StyledImageCard>`
  width: 100%;

  border-radius: 2rem;

  overflow: hidden;

  background: ${props => props.theme.colors.primary};

  img {
    width: 100%;
    height: 40rem;
  }

  @media (min-width: ${breakpoint}) {
    ${props =>
      props.large &&
      css`
        grid-column: span 2;
      `}
  }
`;

export const Toolbar = styled.section`
  display: flex;

  justify-content: space-evenly;
  align-items: center;

  height: fit-content;
`;
