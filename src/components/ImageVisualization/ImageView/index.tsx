import { useState } from 'react';
import { Container } from './styles';

import { useTheme } from '../../../context/ThemeProvider/useTheme';
import { useMobile } from '../../../hooks/useMobile';
import { ImageViewDesktop } from './Desktop';
import { ImageViewMobile } from './Mobile';

export interface IImageViewProps {
  name: string;
  img: string[];
}

export function ImageView({ img, name }: IImageViewProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const { isMobile } = useMobile();

  function handleChangeCarouselImage(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      if (currentImage != img.length - 1) {
        setCurrentImage(state => state + 1);
      }
    }

    if (direction === 'right') {
      if (currentImage != 0) {
        setCurrentImage(state => state - 1);
      }
    }
  }

  return (
    <Container>
      {isMobile ? (
        <ImageViewMobile
          img={img}
          handleChangeCarouselImage={handleChangeCarouselImage}
          currentImage={currentImage}
          name={name}
        />
      ) : (
        <ImageViewDesktop
          img={img}
          handleChangeCarouselImage={handleChangeCarouselImage}
          currentImage={currentImage}
          name={name}
        />
      )}
    </Container>
  );
}
