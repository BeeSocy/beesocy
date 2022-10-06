import styled, { css } from 'styled-components';
import { Button } from '../../../Widgets/Buttons/Button';

export const Carousel = styled.div`
  display: flex;

  align-items: center;

  position: relative;

  & > button:nth-child(1) {
    transform: rotate(180deg);
    left: 2rem;
  }

  & > button:nth-child(3) {
    right: 2rem;
  }
`;

export const CarouselContent = styled.section`
  display: flex;

  a {
    margin-inline: 10rem;
  }
`;

interface IArrowButtonProps {
  atEnd?: boolean;
}

export const ArrowButton = styled(Button)<IArrowButtonProps>`
  width: fit-content;
  height: fit-content;

  padding: 0.8rem;

  position: absolute;

  svg,
  div {
    width: 5.4rem;
    height: 5.4rem;
  }

  ${props =>
    props.atEnd &&
    css`
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }
    `}
`;
