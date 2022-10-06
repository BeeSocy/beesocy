import { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  MdExpandMore,
  MdMoreVert,
  MdPersonAdd,
  MdPlaylistAdd,
  MdShare
} from 'react-icons/md';
import Sheet from 'react-modal-sheet';
import { useHoverDirty } from 'react-use';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
import { MusicInfo } from '../../../MusicFeed/MusicInfo';
import { MusicMenu } from '../../../MusicFeed/MusicMenu';
import { LikeButton } from '../../../Widgets/Buttons/ActionButtons/LikeButton';
import { Button } from '../../../Widgets/Buttons/Button';
import { StyledSheet, Header, MusicCover, MusicCoverActions } from './styles';

export function MobileLargePlayer() {
  const { getLarge, handleChangeLarge, getCurrentTrack } = usePlayer();

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const { colors } = useTheme();

  const [coverActionsIsActive, setCoverActionsIsActive] =
    useState<boolean>(false);

  const MusicCoverRef = useRef<HTMLDivElement>(null);
  const isHoverMusicCover = useHoverDirty(MusicCoverRef);

  useEffect(() => {
    setCoverActionsIsActive(isHoverMusicCover);
  }, [isHoverMusicCover]);

  return (
    <>
      <StyledSheet isOpen={getLarge()} onClose={() => handleChangeLarge(false)}>
        <StyledSheet.Container>
          <StyledSheet.Content>
            <Header>
              <Button
                onClick={() => handleChangeLarge(false)}
                full={false}
                rounded
              >
                <MdExpandMore />
              </Button>

              <Button onClick={() => setMenuIsOpen(true)} full={false} rounded>
                <MdMoreVert />
              </Button>
            </Header>

            <MusicCover
              ref={MusicCoverRef}
              onClick={() => setCoverActionsIsActive(state => !state)}
            >
              {coverActionsIsActive && (
                <MusicCoverActions
                  active={coverActionsIsActive}
                  onClick={event => event.stopPropagation()}
                >
                  <Button full={false} rounded>
                    <MdShare />
                  </Button>

                  <Button full={false} rounded>
                    <MdPlaylistAdd />
                  </Button>

                  <LikeButton />

                  <Button full={false} rounded>
                    <MdPersonAdd />
                  </Button>
                </MusicCoverActions>
              )}

              <img
                src={getCurrentTrack().imageUrl}
                alt={`Capa da música ${getCurrentTrack().name}`}
                loading={'lazy'}
              />
            </MusicCover>
          </StyledSheet.Content>
        </StyledSheet.Container>

        <StyledSheet.Backdrop onTap={() => handleChangeLarge(false)} />
      </StyledSheet>

      <Sheet isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)}>
        <Sheet.Container
          style={{ background: colors.primary, height: 'fit-content' }}
        >
          <Sheet.Header style={{ color: colors.light }} />
          <Sheet.Content onTap={() => setMenuIsOpen(false)}>
            <MusicInfo
              name={getCurrentTrack().name}
              imageUrl={getCurrentTrack().imageUrl}
              artists={getCurrentTrack().artists}
            />
            <MusicMenu
              track={{
                name: getCurrentTrack().name,
                artists: getCurrentTrack().artists,
                description: getCurrentTrack().description,
                duration: getCurrentTrack().duration,
                fileUrl: getCurrentTrack().fileUrl,
                identification: getCurrentTrack().identification,
                imageUrl: getCurrentTrack().imageUrl,
                explicit: getCurrentTrack().explicit,
                usersHasLiked: getCurrentTrack().usersHasLiked,
                usersHasReported: getCurrentTrack().usersHasReported,
                usersHasSaved: getCurrentTrack().usersHasSaved,
                playlist: getCurrentTrack().playlist,
                categories: getCurrentTrack().categories,
                comments: getCurrentTrack().comments,
                createdAt: getCurrentTrack().createdAt
              }}
              playlist={getCurrentTrack().playlist}
              liked={false}
              reported={false}
              saved={false}
            />
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={() => setMenuIsOpen(false)} />
      </Sheet>
    </>
  );
}
