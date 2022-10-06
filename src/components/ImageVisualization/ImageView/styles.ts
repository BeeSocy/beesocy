import styled, { css } from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';
import { Button } from '../../Widgets/Buttons/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  a {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;

    max-width: 70vw;
    max-height: 75vh;

    object-fit: contain;

    &:hover {
      cursor: zoom-in;
    }

    @media (max-width: ${breakpoint}) {
      width: 200%;

      max-width: 80vw;
    }
  }
`;
