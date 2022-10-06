import styled from 'styled-components';

export const StyledHeader = styled.section`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 0.8rem;

  border-bottom: 1px solid ${props => props.theme.colors.light};

  padding: 0.8rem 0;
  margin-bottom: 0.8rem;
`;
