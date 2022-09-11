import { MdClose, MdLibraryMusic } from 'react-icons/md';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { MusicCardSmall } from '../../../Cards/MusicCard/MusicCardSmall';
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
          <MusicCardSmall
            name={'Do crime ao funk'}
            artists={['Bielzin', 'Mc Poze']}
            duration={120}
            imageUrl={
              'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj'
            }
            fileUrl={
              'https://audio.jukehost.co.uk/kRgsjbaMBaB7ZDoDm4QZRDuqGx05j8c9'
            }
            id={1}
            description={''}
          />
        </Tracks>
      </TrackListContainer>
    </Container>
  );
}
