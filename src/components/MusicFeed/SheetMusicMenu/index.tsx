import { IMusicPost } from '../../../types/musicPost';
import { MusicInfo } from '../MusicInfo';
import { MusicMenu } from '../MusicMenu';
import { StyledSheet } from './styles';

interface ISheetMusicMenuProps {
  open: boolean;
  onClose: () => void;
  track: IMusicPost;
}

export function SheetMusicMenu({ open, onClose, track }: ISheetMusicMenuProps) {
  return (
    <StyledSheet isOpen={open} onClose={onClose}>
      <StyledSheet.Container>
        <StyledSheet.Header />
        <StyledSheet.Content onTap={onClose}>
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
        </StyledSheet.Content>
      </StyledSheet.Container>

      <StyledSheet.Backdrop onTap={onClose} />
    </StyledSheet>
  );
}
