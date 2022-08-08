import styled from 'styled-components';
import { breakpoint } from '../../hooks/useMobile';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: dense;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${breakpoint}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
