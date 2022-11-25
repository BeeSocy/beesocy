import styled from 'styled-components';

export const ContainerSecondaryCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
`;

export const SecondaryCardStyled = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  max-width: 22rem;

  border-radius: 1.6rem;
  padding: 0.8rem 1.2rem;

  font-size: 1.4rem;
  background: ${props => props.theme.colors.primary};
  border: 0.1rem solid ${props => props.theme.colors.light};
`;

export const MessageSecondary = styled.span`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
`;
