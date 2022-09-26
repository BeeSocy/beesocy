import { MdClose, MdLibraryMusic } from 'react-icons/md';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { MusicCard } from '../../../Cards/MusicCard';
import { Title } from '../../../General/Title';
import {
  Container,
  CloseButton,
  TrackListContainer,
  TrackListHeader,
  MusicCover,
  Divider
} from './styles';
import { TracksList } from './TracksList';

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

        <TracksList />
      </TrackListContainer>
    </Container>
  );
}
