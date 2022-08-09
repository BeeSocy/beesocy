import styled from 'styled-components';
import { breakpoint } from '../../hooks/useMobile';

interface StyledContainer {
  hasVerticalScroll?: boolean;
}

export const Container = styled.main<StyledContainer>`
  width: 100%;
  height: 100%;

  padding-top: 8.6rem;
  padding-left: 8rem;
  padding-right: ${props => (props.hasVerticalScroll ? '2rem' : '1.2rem')};
  padding-bottom: 1.4rem;

  @media (max-width: ${breakpoint}) {
    padding-bottom: 8rem;
    padding-inline: 2rem;
  }
`;
