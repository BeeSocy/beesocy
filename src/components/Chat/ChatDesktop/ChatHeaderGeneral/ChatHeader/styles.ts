import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.6rem;
  border-bottom: 0.1rem solid ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.primary};
`;
