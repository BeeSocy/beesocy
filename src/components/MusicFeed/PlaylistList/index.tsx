import { MdAdd } from 'react-icons/md';
import { useAlert } from '../../../context/AlertProvider/useAlert';
import { useModal } from '../../../context/ModalProvider/useModal';
import { IMusicPost } from '../../../types/musicPost';
import { IPlaylist } from '../../../types/playlist';
import { IProfile } from '../../../types/profile';
import { PlaylistCard } from '../../Cards/PlaylistCard';
import { Button } from '../../Widgets/Buttons/Button';

import { Container } from './styles';

interface IPlaylistListProps {
  track: IMusicPost;
}

export function PlaylistList({ track }: IPlaylistListProps) {
  const { handleCallAlert } = useAlert();

  const { handleSetOpen } = useModal();

  const fetchedPlaylists: IPlaylist[] = [
    {
      identification: '7f95bd63-d82c-40ab-a5f6-beb506b1786e',
      bannerUrl:
        'https://pbs.twimg.com/profile_images/2068072926/julio_400x400.jpg',
      categories: [],
      author: {} as IProfile,
      description: '',
      musics: [{}, {}, {}],
      name: '!É O NINJA',
      usersHasLiked: [],
      usersHasReported: [],
      usersHasSaved: [],
      comments: [],
      createdAt: new Date(2022, 10, 1, 20, 0, 0)
    }
  ];

  function handleClickAction(playlistName: string) {
    /* TODO: Send track to playlist (backend) */
    handleCallAlert(`**${track.name}** adicionado à **${playlistName}**`);
    //TODO: Retornar do backend se a música já está na playlist e com isso mandar essa mensagem:
    /* handleCallAlert(`**${track.name}** já está adicionado em **${playlistName}**`);  */
    handleSetOpen(false);
  }

  return (
    <Container>
      {fetchedPlaylists.length > 0 ? (
        fetchedPlaylists.map(playlist => (
          <PlaylistCard
            key={playlist.identification}
            name={playlist.name}
            bannerUrl={playlist.bannerUrl}
            musics={playlist.musics}
            author={playlist.author}
            identification={playlist.identification}
            description={playlist.description}
            categories={playlist.categories}
            onClickAction={() => handleClickAction(playlist.name)}
            comments={playlist.comments}
            createdAt={playlist.createdAt}
            usersHasLiked={playlist.usersHasLiked}
            usersHasReported={playlist.usersHasReported}
            usersHasSaved={playlist.usersHasSaved}
          />
        ))
      ) : (
        <span>Nenhuma playlist encontrada</span>
      )}

      <Button>
        <MdAdd />
        <span>Nova playlist</span>
      </Button>
    </Container>
  );
}
