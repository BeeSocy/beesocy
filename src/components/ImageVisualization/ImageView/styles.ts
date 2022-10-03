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
    max-height: 120vh;

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
  onEnd?: 'left' | 'right';
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

    @media (max-width: ${breakpoint}) {
      width: 4.4rem;
      height: 4.4rem;
    }
  }

  ${props =>
    props.onEnd === 'left' &&
    css`
      &:nth-child(1) {
        opacity: 0.8;

        &:hover {
          cursor: not-allowed;
        }
      }
    `}

  ${props =>
    props.onEnd === 'right' &&
    css`
      &:nth-child(3) {
        opacity: 0.8;

        &:hover {
          cursor: not-allowed;
        }
      }
    `}
`;
