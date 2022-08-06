import styled, { css } from 'styled-components';
import { IButton } from '.';

export const ButtonStyle = css`
  display: flex;
  align-items: center;
  gap: 2rem;

  background: none;
  outline: none;

  padding: 0.8rem;

  transition: background 0.5s;

  &:active {
    background: ${props => props.theme.colors.light};
  }
`;

export const Container = styled.button<IButton>`
  ${ButtonStyle}
  border-radius: ${props => props.rounded && `100%`};
`;
