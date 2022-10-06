import React, { useRef } from 'react';
import { usePlayer } from '../../../context/PlayerProvider/usePlayer';
import { MusicCard } from '../../Cards/MusicCard';
import { Container, Item } from './styles';

export function TracksList() {
  const player = usePlayer();

  const MusicCardRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      {player.getTrackList().map(track => (
        <Item key={track.identification} ref={MusicCardRef}>
          <MusicCard
            key={track.identification}
            identification={track.identification}
            name={track.name}
            artists={track.artists}
            duration={track.duration}
            imageUrl={track.imageUrl}
            fileUrl={track.fileUrl}
            description={track.description}
            explicit={track.explicit}
            large={false}
            playlist={track.playlist}
            comments={track.comments}
            createdAt={track.createdAt}
            usersHasLiked={track.usersHasLiked}
            usersHasReported={track.usersHasReported}
            usersHasSaved={track.usersHasSaved}
            categories={track.categories}
          />
        </Item>
      ))}
    </Container>
  );
}
