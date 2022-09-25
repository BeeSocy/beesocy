import { useAlert } from '../../../context/AlertProvider/useAlert';
import { useModal } from '../../../context/ModalProvider/useModal';
import { IMusicPost } from '../../../types/musicPost';
import { IPlaylist } from '../../../types/playlist';
import { IProfile } from '../../../types/profile';
import { PlaylistCard } from '../../Cards/PlaylistCard';

import { Container } from './styles';

interface IPlaylistListProps {
  track: IMusicPost;
}

export function PlaylistList({ track }: IPlaylistListProps) {
  const { handleCallAlert } = useAlert();

  const { handleSetOpen } = useModal();

  const fetchedPlaylists: IPlaylist[] = [
    {
      id: 1,
      bannerUrl:
        'https://pbs.twimg.com/profile_images/2068072926/julio_400x400.jpg',
      categoriesId: [],
      author: {} as IProfile,
      description: '',
      musics: [{}, {}, {}],
      name: '!É O NINJA',
      isLiked: true,
      isReported: false,
      isSaved: false
    }
  ];

  function handleClickAction(playlistName: string) {
    /* TODO: Send track to playlist (backend) */
    handleCallAlert(
      `**${track.name} adicionado à **${playlistName}**`
    ); /*TODO: Create bold in alert */
    handleSetOpen(false);
  }

  return (
    <Container>
      {fetchedPlaylists.map(playlist => (
        <PlaylistCard
          key={playlist.id}
          name={playlist.name}
          bannerUrl={playlist.bannerUrl}
          musics={playlist.musics}
          author={playlist.author}
          id={playlist.id}
          description={playlist.description}
          categoriesId={playlist.categoriesId}
          onClickAction={() => handleClickAction(playlist.name)}
        />
      ))}
    </Container>
  );
}
