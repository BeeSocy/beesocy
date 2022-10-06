import { ReactSVG } from 'react-svg';
import { IImageViewProps } from '..';

import { useTheme } from '../../../../context/ThemeProvider/useTheme';

import { Carousel, ArrowButton, CarouselContent } from './styles';

import DarkArrow from '../../../../assets/icons/dark_arrow.svg';
import LightArrow from '../../../../assets/icons/light_arrow.svg';

interface IImageViewDesktopProps extends IImageViewProps {
  currentImage: number;
  handleChangeCarouselImage: (direction: 'left' | 'right') => void;
}

export function ImageViewDesktop({
  img,
  name,
  currentImage,
  handleChangeCarouselImage
}: IImageViewDesktopProps) {
  const { title } = useTheme();

  return (
    <>
      {img.length > 1 ? (
        <Carousel>
          <ArrowButton
            full={false}
            rounded={true}
            onClick={() => handleChangeCarouselImage('right')}
            atEnd={currentImage === 0}
          >
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

          <ArrowButton
            full={false}
            rounded={true}
            onClick={() => handleChangeCarouselImage('left')}
            atEnd={currentImage === img.length - 1}
          >
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
    </>
  );
}
