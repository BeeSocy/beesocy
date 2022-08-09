import styled from 'styled-components';
import { breakpoint } from '../../hooks/useMobile';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;

  grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));

  gap: 2rem;
`;
