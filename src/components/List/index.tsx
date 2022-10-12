import { useState } from 'react';
import { IImagePost } from '../../types/imagePost';
import { IMusicPost } from '../../types/musicPost';
import { ImageCard } from '../Cards/ImageCard';
import { MusicCard } from '../Cards/MusicCard';
import {
  BreadCrump,
  BreadCrumpContainer,
  Container,
  Header,
  ImageContent,
  MusicContent,
  Title
} from './styles';

interface IListProps {
  title: string;
  musics: IMusicPost[];
  images: IImagePost[];
}
export function List({ title, musics, images }: IListProps) {
  const [activeCategory, setActiveCategory] = useState<
    'music' | 'image' | 'code'
  >('music');

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <BreadCrumpContainer>
          <BreadCrump
            active={activeCategory === 'music'}
            onClick={() => setActiveCategory('music')}
          >
            Músicas
          </BreadCrump>
          <BreadCrump
            active={activeCategory === 'image'}
            onClick={() => setActiveCategory('image')}
          >
            Imagens
          </BreadCrump>
          <BreadCrump
            active={activeCategory === 'code'}
            onClick={() => setActiveCategory('code')}
          >
            Códigos
          </BreadCrump>
        </BreadCrumpContainer>
      </Header>

      {activeCategory === 'music' && (
        <MusicContent>
          {musics.map(value => (
            <>
              <MusicCard large {...value} />
            </>
          ))}
        </MusicContent>
      )}

      {activeCategory === 'image' && (
        <ImageContent>
          {images.map(value => (
            <>
              <ImageCard {...value} />
            </>
          ))}
        </ImageContent>
      )}
    </Container>
  );
}
