import { IMusicPost } from '../../../types/musicPost';
import { MusicInfo } from '../MusicInfo';
import { MusicMenu } from '../MusicMenu';
import { Container } from './styles';

interface IMobileMusicMenuProps {
  track: IMusicPost;
}

export function MobileMusicMenu({ track }: IMobileMusicMenuProps) {
  return (
    <Container>
      <MusicInfo
        name={track.name}
        imageUrl={track.imageUrl}
        artists={track.artists}
      />
      <MusicMenu
        track={{
          name: track.name,
          artists: track.artists,
          description: track.description,
          duration: track.duration,
          fileUrl: track.fileUrl,
          identification: track.identification,
          imageUrl: track.imageUrl,
          explicit: track.explicit,
          usersHasLiked: track.usersHasLiked,
          usersHasReported: track.usersHasReported,
          usersHasSaved: track.usersHasSaved,
          playlist: track.playlist,
          categories: track.categories,
          comments: track.comments,
          createdAt: track.createdAt
        }}
        playlist={track.playlist}
        liked={false}
        reported={false}
        saved={false}
      />
    </Container>
  );
}
