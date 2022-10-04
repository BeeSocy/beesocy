import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};

  border-radius: 2rem;

  padding: 2.8rem 2rem 1.2rem;

  width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;
