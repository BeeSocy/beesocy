import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Container, CarouselContent, Carousel, ArrowButton } from './styles';

import DarkArrow from '../../../assets/icons/dark_arrow.svg';
import LightArrow from '../../../assets/icons/light_arrow.svg';

import { Button } from '../../Widgets/Buttons/Button';
import { useTheme } from '../../../context/ThemeProvider/useTheme';

interface IImageViewProps {
  name: string;
  img: string[];
}

export function ImageView({ img, name }: IImageViewProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const { title } = useTheme();

  function handleChangeCarouselImage(direction: 'left' | 'right'): void {}

  return (
    <Container>
      {img.length > 1 ? (
        <Carousel>
          <ArrowButton full={false} rounded={true}>
            <ReactSVG src={title == 'dark' ? DarkArrow : LightArrow} />
          </ArrowButton>

          <CarouselContent>
            <a href={img[currentImage]} target={'_blank'}>
              <img
                src={img[currentImage]}
                alt={`Album ${name} em grande escala`}
              />
            </a>
          </CarouselContent>

          <ArrowButton full={false} rounded={true}>
            <ReactSVG src={title == 'dark' ? DarkArrow : LightArrow} />
          </ArrowButton>
        </Carousel>
      ) : (
        <a href={img[0]} target={'_blank'}>
          <img
            src={img[0]}
            alt={`Imagem ${name} em grande escala`}
            loading="lazy"
          />
        </a>
      )}
    </Container>
  );
}
