import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};

  height: 100vh;
  max-height: 41.8rem;

  overflow: auto;

  @media (min-with: ${breakpoint}) {
    border: 0.1rem solid ${props => props.theme.colors.light};
    border-radius: 2rem;
  }
`;
