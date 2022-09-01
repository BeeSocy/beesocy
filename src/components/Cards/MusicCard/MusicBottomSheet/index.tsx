import { IMusicPost } from '../../../../types/musicPost';

import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import { MusicInfo } from '../../../MusicFeed/MusicInfo';
import { MusicMenu } from '../../../MusicFeed/MusicMenu';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';

interface IMusicBottomSheetProps {
  music: IMusicPost;
}

export let handleSetMusicBottomSheetOpen = () => {};

export function MusicBottomSheet({ music }: IMusicBottomSheetProps) {
  const [open, setOpen] = useState<boolean>(false);

  const { colors } = useTheme();

  handleSetMusicBottomSheetOpen = () => setOpen(true);

  return (
    <Sheet isOpen={open} onClose={() => setOpen(false)}>
      <Sheet.Container
        style={{ background: colors.primary, height: 'fit-content' }}
      >
        <Sheet.Header style={{ color: colors.light }} />
        <Sheet.Content>
          <MusicInfo
            name={music.name}
            imageUrl={music.imageUrl}
            artists={music.artists}
          />
          <MusicMenu
            playlist={music.playlist}
            liked={music.isLiked}
            reported={music.isReported}
            saved={music.isSaved}
          />
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
}
