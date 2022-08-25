import { useEffect, useRef } from 'react';
import { IMusicPost } from '../../../types/musicPost';
import { formatArtists } from '../../Cards/MusicCard';
import { Title } from '../../General/Title';
import { Container, Details } from './styles';

interface IMusicInfoProps {
  name: string;
  artists: string[];
  imageUrl: string;
}

export function MusicInfo({ name, artists, imageUrl }: IMusicInfoProps) {
  const DetailsContainerRef = useRef<HTMLDivElement>(null);
  const TitleSpanRef = useRef<HTMLSpanElement>(null);
  const ArtistSpanRef = useRef<HTMLSpanElement>(null);

  const ArtistSpanHasOverflow = useRef<boolean>(false);
  const TitleSpanHasOverflow = useRef<boolean>(false);

  useEffect(() => {
    if (
      TitleSpanRef.current &&
      DetailsContainerRef.current &&
      ArtistSpanRef.current
    ) {
      if (
        TitleSpanRef.current?.scrollWidth >
        DetailsContainerRef.current?.offsetWidth
      ) {
        TitleSpanHasOverflow.current = true;
      }

      if (
        ArtistSpanRef.current?.scrollWidth >
        DetailsContainerRef.current?.offsetWidth
      ) {
        ArtistSpanHasOverflow.current = true;
        setInterval(() => {
          ArtistSpanRef.current?.scrollTo({
            left: (ArtistSpanRef.current.scrollLeft += 1),
            behavior: 'smooth'
          });
          console.log(
            ArtistSpanRef.current?.scrollLeft,
            ArtistSpanRef.current?.scrollWidth
          );
          if (
            ArtistSpanRef.current &&
            ArtistSpanRef.current?.scrollLeft >=
              ArtistSpanRef.current?.scrollWidth - 140
          ) {
            ArtistSpanRef.current?.scrollTo({ left: 0 });
          }
        }, 50);
      }
    }
  }, []);

  return (
    <Container>
      <img src={imageUrl} />

      <Details ref={DetailsContainerRef}>
        <Title ref={TitleSpanRef} size={'small'}>
          {name}
        </Title>
        <span ref={ArtistSpanRef}>
          {formatArtists(artists)}{' '}
          {ArtistSpanHasOverflow && `ㅤㅤㅤ${formatArtists(artists)}`}
        </span>
      </Details>
    </Container>
  );
}
