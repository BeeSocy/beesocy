import { MdClose, MdLibraryMusic } from 'react-icons/md';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { MusicCard } from '../../../Cards/MusicCard';
import { Title } from '../../../General/Title';
import {
  Container,
  CloseButton,
  TrackListContainer,
  TrackListHeader,
  Tracks,
  MusicCover,
  Divider
} from './styles';

interface IDesktopLargePlayer {
  active?: boolean;
}

export function DesktopLargePlayer({ active }: IDesktopLargePlayer) {
  const player = usePlayer();

  return (
    <Container $active={active}>
      <CloseButton
        full={false}
        rounded
        onClick={() => player.handleChangeLarge(false)}
      >
        <MdClose />
      </CloseButton>

      <MusicCover
        src={player.getCurrentTrack().imageUrl}
        alt={`Capa da música ${player.getCurrentTrack().name}`}
        onClick={() => player.handleChangePlaying(!player.getPlaying())}
      />

      <Divider />

      <TrackListContainer>
        <TrackListHeader>
          <MdLibraryMusic />
          <Title size="small">Próximas músicas</Title>
        </TrackListHeader>

        <Tracks>
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
        </Tracks>
      </TrackListContainer>
    </Container>
  );
}
