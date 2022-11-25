import styled from 'styled-components';

export const ContainerPrimaryCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const PrimaryCardStyled = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  max-width: 22rem;

  border-radius: 1.6rem;
  padding: 0.8rem 1.2rem;
  background: ${props => props.theme.colors.light};
  font-size: 1.4rem;
`;

export const MessagePrimary = styled.span`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
`;
