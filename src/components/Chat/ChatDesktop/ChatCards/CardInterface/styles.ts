import styled from 'styled-components';

export const ChatCardStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.2rem 1rem;
  width: 100%;

  flex: none;
  border-style: none;
  border: none;
  background: ${props => props.theme.colors.primary};
  margin-top: 0.1rem;
  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.light};
    transition: 0.4s;
  }
`;
