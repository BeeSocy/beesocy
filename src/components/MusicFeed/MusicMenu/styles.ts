import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};

  border-radius: 2rem;

  border: 0.1rem solid ${props => props.theme.colors.light};

  height: 100vh;
  max-height: 41.8rem;

  overflow: auto;
`;
