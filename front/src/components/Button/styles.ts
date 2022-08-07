import styled, { css } from 'styled-components';
import { IButton } from '.';
import { breakpoint } from '../../hooks/useMobile';

export const ButtonStyle = css`
  display: flex;
  align-items: center;
  gap: 2rem;

  background: none;
  outline: none;

  padding: 0.8rem;

  transition: background 0.3s;

  &:active {
    background: ${props => props.theme.colors.light};
  }

  @media (min-width: ${breakpoint}) {
    &:hover {
      background: ${props => props.theme.colors.light};
    }
  }
`;

export const Container = styled.button<IButton>`
  ${ButtonStyle}

  border-radius: ${props => props.rounded && `100%`};

  flex-direction: ${props => (props.wrap ? 'column' : 'row')};

  gap: ${props => (props.wrap ? '0rem' : '2rem')};
`;
