import { useState } from 'react';
import { Container, CarouselContent, Carousel } from './styles';

interface IImageViewProps {
  name: string;
  img: string[];
}

export function ImageView({ img, name }: IImageViewProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <Container>
      {img.length > 1 ? (
        <Carousel>
          <CarouselContent>
            <a href={img[currentImage]} target={'_blank'}>
              <img
                src={img[currentImage]}
                alt={`Album ${name} em grande escala`}
              />
            </a>
          </CarouselContent>
        </Carousel>
      ) : (
        <a href={img[0]} target={'_blank'}>
          <img src={img[0]} alt={`Imagem ${name} em grande escala`} />
        </a>
      )}
    </Container>
  );
}
