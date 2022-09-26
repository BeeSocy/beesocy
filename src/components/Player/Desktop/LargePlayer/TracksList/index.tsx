import { usePlayer } from '../../../../../context/PlayerProvider/usePlayer';
import { MusicCard } from '../../../../Cards/MusicCard';
import { Container } from './styles';

export function TracksList() {
  const player = usePlayer();

  return (
    <Container>
      {player.getTrackList().map(track => (
        <MusicCard
          key={track.id}
          id={track.id}
          name={track.name}
          artists={track.artists}
          duration={track.duration}
          imageUrl={track.imageUrl}
          fileUrl={track.fileUrl}
          description={track.description}
          explicit={track.explicit}
          large={false}
          playlist={track.playlist}
          isLiked={track.isLiked}
          isReported={track.isReported}
          isSaved={track.isSaved}
          categoriesId={track.categoriesId}
        />
      ))}
    </Container>
  );
}
