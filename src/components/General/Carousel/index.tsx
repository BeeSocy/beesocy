import { ReactNode, useRef } from 'react';
import { Arrow, Container, Content } from './styles';

import LightArrowSrc from '../../../assets/icons/light_arrow.svg';
import DarkArrowSrc from '../../../assets/icons/dark_arrow.svg';
import { useTheme } from '../../../context/ThemeProvider/useTheme';
import { useMobile } from '../../../hooks/useMobile';

interface ICarouselProps {
  children: ReactNode;
  smooth?: boolean;
  distance?: number;
  leftArrowPosition: number[];
  rightArrowPosition: number[];
}

export function Carousel({
  children,
  smooth,
  distance = 0,
  leftArrowPosition = [0, 0],
  rightArrowPosition = [0, 0]
}: ICarouselProps) {
  function handleMoveCarousel(
    direction: 'left' | 'right',
    scrollDistance: number
  ) {
    if (ContainerRef.current) {
      if (direction === 'left') {
        if (scrollDistance != 0) {
          ContainerRef.current.scrollTo({
            left: (ContainerRef.current.scrollLeft += scrollDistance)
          });
        } else {
          ContainerRef.current.scrollTo({
            left: (ContainerRef.current.scrollLeft +=
              ContainerRef.current.offsetWidth)
          });
        }
      } else {
        if (scrollDistance != 0) {
          ContainerRef.current.scrollTo({
            left: (ContainerRef.current.scrollLeft -= scrollDistance)
          });
        } else {
          ContainerRef.current.scrollTo({
            left: (ContainerRef.current.scrollLeft -=
              ContainerRef.current.offsetWidth)
          });
        }
      }
    }
  }

  const { title } = useTheme();

  const ContainerRef = useRef<HTMLDivElement>(null);
  const ContentRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useMobile();

  return (
    <Container smooth={smooth} ref={ContainerRef}>
      {!isMobile && (
        <Arrow
          src={title === 'light' ? DarkArrowSrc : LightArrowSrc}
          role={'button'}
          onClick={() => handleMoveCarousel('right', distance)}
          leftPosition={leftArrowPosition}
          rightPosition={rightArrowPosition}
        />
      )}

      <Content ref={ContentRef}>{children}</Content>

      {!isMobile && (
        <Arrow
          src={title === 'light' ? DarkArrowSrc : LightArrowSrc}
          role={'button'}
          onClick={() => handleMoveCarousel('left', distance)}
          leftPosition={leftArrowPosition}
          rightPosition={rightArrowPosition}
        />
      )}
    </Container>
  );
}
