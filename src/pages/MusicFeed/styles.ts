import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  gap: 3.2rem;
`;

export const AlgorithmContainer = styled.div``;

interface IAlgorithmContent {
  $multiLines: boolean;
}

export const AlgorithmContent = styled.div<IAlgorithmContent>`
  display: flex;
  gap: 1.8rem;

  ${props =>
    props.$multiLines &&
    css`
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-auto-flow: column;
      padding: 0.4rem;
    `};
`;
