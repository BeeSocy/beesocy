import styled from 'styled-components';
import { breakpoint } from '../../../../../hooks/useMobile';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0.6rem;
  border-bottom: 0.1rem solid ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.primary};

  @media (max-width: ${breakpoint}) {
  }
`;
