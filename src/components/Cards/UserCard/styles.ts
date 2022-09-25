import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

export const Container = styled.div`
  display: inherit;

  @media (min-width: ${breakpoint}) {
    gap: 2.4rem;
  }

  gap: 2rem;

  align-items: inherit;
  justify-content: inherit;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 100%;

    @media (min-width: ${breakpoint}) {
      margin-left: 0.6rem;
    }
  }

  span {
    max-width: 11.2rem;

    @media (max-width: ${breakpoint}) {
      max-width: 20rem;
    }

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
  }
`;
