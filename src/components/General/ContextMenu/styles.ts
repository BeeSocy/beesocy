import styled from 'styled-components';

interface IStyledContextContainer {
  $xPosition: number;
  $yPosition: number;
}

export const ContextContainer = styled.div<IStyledContextContainer>`
  position: fixed;

  z-index: 120;

  top: ${props => props.$yPosition}px;
  left: ${props => props.$xPosition}px;
`;
