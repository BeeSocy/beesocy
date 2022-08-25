import {
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
import { useEffect, useRef, useState } from 'react';

interface IContextMenuProps {
  playlist?: boolean;
  liked?: boolean;
  saved?: boolean;
  reported?: boolean;
}

export function MusicMenu({
  playlist,
  liked,
  saved,
  reported
}: IContextMenuProps) {
  const musicMenuRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={musicMenuRef}>
      <Button>
        <MdPlaylistPlay />
        <span>Tocar a seguir</span>
      </Button>

      <Button>
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
