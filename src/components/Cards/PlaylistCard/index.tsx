import { IPlaylist } from '../../../types/playlist';
import { Title } from '../../General/Title';
import { Container, Wrapper, Details } from './styles';

interface IPlaylistProps extends IPlaylist {
  onClickAction?(): void;
}

export function PlaylistCard({
  name,
  musics,
  bannerUrl,
  onClickAction
}: IPlaylistProps) {
  return (
    <Container onClick={onClickAction}>
      <Wrapper>
        <img src={bannerUrl} alt={`Capa da playlist ${name}`} />
        <Details>
          <Title size="small">{name}</Title>
          <span>
            {musics.length} música{musics.length != 1 && 's'}
          </span>
        </Details>
      </Wrapper>
    </Container>
  );
}
