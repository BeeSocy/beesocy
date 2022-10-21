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
  NotFound,
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
          {musics.length > 0 ? (
            musics.map(value => (
              <>
                <MusicCard large {...value} />
              </>
            ))
          ) : (
            <NotFound>Nenhuma música encontrada</NotFound>
          )}
        </MusicContent>
      )}

      {activeCategory === 'image' && (
        <ImageContent>
          {images.length > 0 ? (
            images.map(value => (
              <>
                <ImageCard {...value} />
              </>
            ))
          ) : (
            <NotFound>Nenhuma imagem encontrada</NotFound>
          )}
        </ImageContent>
      )}
    </Container>
  );
}
