import {
  MdGraphicEq,
  MdPlaylistPlay,
  MdPlaylistAdd,
  MdOutlinePersonAdd,
  MdQueueMusic,
  MdFavoriteBorder,
  MdFavorite,
  MdOutlineShare,
  MdBookmarkBorder,
  MdBookmark,
  MdOutlineFlag,
  MdFlag
} from 'react-icons/md';

import { Button } from '../../Widgets/Buttons/Button';
import { Container } from './styles';

import dark from '../../../styles/themes/dark';
import { IMusicPost } from '../../../types/musicPost';
import { usePlayer } from '../../../context/PlayerProvider/usePlayer';
import { useAlert } from '../../../context/AlertProvider/useAlert';
import { Modal } from '../../General/Modal';
import { useModal } from '../../../context/ModalProvider/useModal';
import { PlaylistCard } from '../../Cards/PlaylistCard';
import { IProfile } from '../../../types/profile';
import { IPlaylist } from '../../../types/playlist';
import { PlaylistList } from '../PlaylistList';

interface IContextMenuProps {
  track: IMusicPost;
  playlist?: boolean;
  liked?: boolean;
  saved?: boolean;
  reported?: boolean;
}

export function MusicMenu({
  playlist,
  liked,
  saved,
  reported,
  track
}: IContextMenuProps) {
  const player = usePlayer();

  const { handleCallAlert } = useAlert();

  const { handleCallModal } = useModal();

  function handleClickAction(message: string) {
    handleCallAlert(message);
  }

  return (
    <Container>
      <Button>
        <MdGraphicEq />
        <span>Iniciar radio</span>
      </Button>

      <Button
        onClick={() => {
          if (!player.getOpen()) {
            player.initPlayer(track);
            return;
          }

          handleClickAction('A música será tocada a seguir.');
          player.setTrackInSpecificPositionOfTrackList(
            player.getPositionOnTrackList() + 1,
            track
          );
        }}
      >
        <MdPlaylistPlay />
        <span>Tocar a seguir</span>
      </Button>

      <Button
        onClick={() => {
          handleCallModal(<PlaylistList track={track} />, {
            title: 'Escolha uma playlist',
            overlay: true,
            easyClose: true,
            center: true
          });
        }}
      >
        <MdPlaylistAdd />
        <span>Adicionar a playlist</span>
      </Button>

      <Button>
        <MdOutlinePersonAdd />
        <span>{playlist ? 'Ir para o criador' : 'Ir para o artista'}</span>
      </Button>

      <Button>
        <MdQueueMusic />
        <span>Adicionar a fila</span>
      </Button>

      <Button>
        {liked ? (
          <MdFavorite style={{ fill: dark.colors.bee }} />
        ) : (
          <MdFavoriteBorder />
        )}
        <span>Curtir</span>
      </Button>

      <Button>
        <MdOutlineShare />
        <span>Compartilhar</span>
      </Button>

      <Button>
        {saved ? (
          <MdBookmark style={{ fill: dark.colors.bee }} />
        ) : (
          <MdBookmarkBorder />
        )}
        <span>Salvar</span>
      </Button>

      <Button>
        {reported ? (
          <MdFlag style={{ fill: dark.colors.bee }} />
        ) : (
          <MdOutlineFlag />
        )}
        <span>Denunciar</span>
      </Button>
    </Container>
  );
}
