import styled from 'styled-components';
import { breakpoint } from '../../../../hooks/useMobile';

export const BoxCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  overflow-y: auto;
  width: 24.5rem;
  height: 100%;
  gap: 0.1rem;
  border-right: 0.1rem solid ${props => props.theme.colors.light};

  @media (max-width: ${breakpoint}) {
    border-right: none;
    width: 100%;
  }
`;

export const ContainerMobile = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${props => props.theme.colors.primary};
`;

export const SectionBoxChat = styled.section`
  display: flex;
  flex-direction: column;
`;
