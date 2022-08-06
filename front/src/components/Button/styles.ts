import styled from 'styled-components';
import { IButton } from '.';

export const Container = styled.button<IButton>`
  display: flex;
  align-items: center;
  gap: 2rem;

  background: none;
  outline: none;

  padding: 0.8rem;
  border-radius: ${props => props.rounded && `100%`};

  transition: background 0.5s;

  &:active {
    background: ${props => props.theme.colors.light};
  }
`;
