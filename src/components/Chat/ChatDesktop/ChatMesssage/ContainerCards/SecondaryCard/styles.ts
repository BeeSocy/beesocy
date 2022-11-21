import styled from 'styled-components';

export const ContainerSecondaryCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
`;

export const SecondaryCardStyled = styled.section`
  display: flex;
  align-items: center;

  border-radius: 1.6rem;
  padding: 0.8rem 1.2rem;
  max-width: 22rem;

  font-size: 1.4rem;

  background: ${props => props.theme.colors.light};
`;
