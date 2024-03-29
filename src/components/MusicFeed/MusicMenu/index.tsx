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
import { useModal } from '../../../context/ModalProvider/useModal';
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

  const { handleCallModal, handleSetOpen } = useModal();

  function handleClickAction() {
    handleSetOpen(false);
  }

  return (
    <Container>
      <Button onClick={() => handleClickAction()}>
        <MdGraphicEq />
        <span>Iniciar radio</span>
      </Button>

      <Button
        onClick={() => {
          handleClickAction();
          if (!player.getOpen()) {
            player.initPlayer(track);
            return;
          }

          if (player.getCurrentTrack().fileUrl != track.fileUrl) {
            handleCallAlert(`**${track.name}** será tocado a seguir`);
            if (
              player
                .getTrackList()
                .findIndex(value => value.fileUrl === track.fileUrl) +
                1 <
                player.getPositionOnTrackList() &&
              player
                .getTrackList()
                .filter(value => value.fileUrl === track.fileUrl).length > 0
            ) {
              player.setTrackInSpecificPositionOfTrackList(
                player.getPositionOnTrackList(),
                track
              );
              player.setPositionOnTrackList(
                player.getPositionOnTrackList() - 1
              );
              return;
            }

            player.setTrackInSpecificPositionOfTrackList(
              player.getPositionOnTrackList() + 1,
              track
            );
          }
        }}
      >
        <MdPlaylistPlay />
        <span>Tocar a seguir</span>
      </Button>

      <Button
        onClick={() => {
          handleClickAction();
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

      <Button
        onClick={() => {
          handleClickAction();
          if (!player.getOpen()) {
            player.initPlayer(track);
            return;
          }

          if (player.getCurrentTrack().fileUrl != track.fileUrl) {
            handleCallAlert(`**${track.name}** foi adicionado a fila`);
            player.setTrackInLastPositionOfTrackList(track);
          }
        }}
      >
        <MdQueueMusic />
        <span>Adicionar a fila</span>
      </Button>

      <Button
        onClick={() => {
          handleClickAction();
          handleCallAlert(`**${track.name}** adicionado aos curtidos`);
        }}
      >
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

      <Button
        onClick={() => {
          handleClickAction();
          handleCallAlert(`**${track.name}** adicionado aos salvos`);
        }}
      >
        {saved ? (
          <MdBookmark style={{ fill: dark.colors.bee }} />
        ) : (
          <MdBookmarkBorder />
        )}
        <span>Salvar</span>
      </Button>

      <Button
        onClick={() => {
          handleClickAction();
        }}
      >
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
