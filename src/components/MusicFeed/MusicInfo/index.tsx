import { useEffect, useRef, useState } from 'react';

import { formatArtists } from '../../Cards/MusicCard';
import { Container, Details, MusicTitle, Artists } from './styles';

interface IMusicInfoProps {
  name: string;
  artists: string[];
  imageUrl: string;
}

export function MusicInfo({ name, artists, imageUrl }: IMusicInfoProps) {
  const DetailsContainerRef = useRef<HTMLDivElement>(null);
  const TitleSpanRef = useRef<HTMLSpanElement>(null);
  const ArtistSpanRef = useRef<HTMLSpanElement>(null);

  const [artistSpanOverflowIsGreaterZero, setArtistSpanOverflowIsGreaterZero] =
    useState<boolean>(false);
  const [titleSpanOverflowIsGreaterZero, setTitleSpanOverflowIsGreaterZero] =
    useState<boolean>(false);

  useEffect(() => {
    if (DetailsContainerRef.current && ArtistSpanRef.current) {
      if (
        ArtistSpanRef.current?.scrollWidth >
        DetailsContainerRef.current?.offsetWidth
      ) {
        let invertScroll = true;

        setInterval(() => {
          if (invertScroll) {
            ArtistSpanRef.current?.scrollTo({
              left: (ArtistSpanRef.current.scrollLeft -= 1),
              behavior: 'smooth'
            });
          } else {
            ArtistSpanRef.current?.scrollTo({
              left: (ArtistSpanRef.current.scrollLeft += 1),
              behavior: 'smooth'
            });
          }

          if (ArtistSpanRef.current && ArtistSpanRef.current.scrollLeft == 0) {
            setTimeout(() => {
              invertScroll = false;
            }, 2000);
          }

          if (
            ArtistSpanRef.current &&
            ArtistSpanRef.current.offsetWidth +
              Math.round(ArtistSpanRef.current.scrollLeft) ==
              ArtistSpanRef.current.scrollWidth
          ) {
            setTimeout(() => {
              invertScroll = true;
            }, 1000);
          }

          if (ArtistSpanRef.current && ArtistSpanRef.current.scrollLeft > 0) {
            setArtistSpanOverflowIsGreaterZero(true);
          } else {
            setArtistSpanOverflowIsGreaterZero(false);
          }
        }, 50);
      }
    }
  }, []);

  return (
    <Container>
      <img src={imageUrl} />

      <Details ref={DetailsContainerRef}>
        <MusicTitle ref={TitleSpanRef} size={'small'}>
          {name}
        </MusicTitle>
        <Artists
          ref={ArtistSpanRef}
          overflowIsGreaterZero={artistSpanOverflowIsGreaterZero}
        >
          {formatArtists(artists)}
        </Artists>
      </Details>
    </Container>
  );
}
