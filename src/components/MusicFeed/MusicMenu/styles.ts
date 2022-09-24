import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};

  height: 100vh;

  /* max-height: 47.2rem; */
  max-height: 27.2rem;
  overflow: auto;

  @media (min-width: ${breakpoint}) {
    border: 0.1rem solid ${props => props.theme.colors.light};
    border-radius: 2rem;
  }

  @media (max-height: 500px) {
    max-height: 17.2rem;
  }

  @media (min-height: 500px) {
    max-height: 27.2rem;
  }

  @media (min-height: 600px) {
    max-height: 37.2rem;
  }
`;
