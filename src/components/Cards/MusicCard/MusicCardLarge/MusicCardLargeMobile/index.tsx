import { useState } from 'react';
import { useLockBodyScroll, useLongPress } from 'react-use';
import { MdMoreVert, MdPause, MdPlayArrow, MdExplicit } from 'react-icons/md';
import Sheet from 'react-modal-sheet';

import { usePlayer } from '../../../../../context/PlayerProvider/usePlayer';
import { useTheme } from '../../../../../context/ThemeProvider/useTheme';
import { IMusicCardProps, longPressOptions } from '../..';
import dark from '../../../../../styles/themes/dark';
import { MusicInfo } from '../../../../MusicFeed/MusicInfo';
import { MusicMenu } from '../../../../MusicFeed/MusicMenu';
import {
  Container,
  Card,
  Wrapper,
  TopContainer,
  Controls,
  DropdownTrigger,
  PlayButton,
  BottomContainer,
  MusicName,
  Details
} from '../styles';

export function MusicCardLargeMobile(props: IMusicCardProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const longPressEvent = useLongPress(onLongPress, longPressOptions);

  const { formatArtists } = usePlayer();

  const { colors } = useTheme();

  function handleSetMusicBottomSheetOpen() {
    setMenuIsOpen(true);
  }

  function onLongPress() {
    handleSetMusicBottomSheetOpen();
  }

  useLockBodyScroll(menuIsOpen);

  return (
    <>
      <Container {...longPressEvent}>
        <Card>
          <Wrapper>
            <TopContainer onClick={props.clickAction}>
              <Controls>
                <DropdownTrigger
                  role={'button'}
                  onClick={event => {
                    handleSetMusicBottomSheetOpen();
                    event.stopPropagation();
                  }}
                >
                  <MdMoreVert style={{ fill: dark.colors.text }} />
                </DropdownTrigger>
                <PlayButton rounded full={false}>
                  {props.playing ? (
                    <MdPause size={52} style={{ fill: dark.colors.text }} />
                  ) : (
                    <MdPlayArrow size={52} style={{ fill: dark.colors.text }} />
                  )}
                </PlayButton>
              </Controls>

              <img src={props.imageUrl} alt={`Capa da música ${props.name}`} />
            </TopContainer>

            <BottomContainer>
              <MusicName>{props.name}</MusicName>
              <Details title={formatArtists(props.artists)}>
                <span>{props.explicit && <MdExplicit size={20} />}</span>
                <span>{props.playlist ? 'Playlist' : 'Single'}</span>
                <span>&bull;</span>
                <span>{formatArtists(props.artists)}</span>
              </Details>
            </BottomContainer>
          </Wrapper>
        </Card>
      </Container>

      <Sheet isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)}>
        <Sheet.Container
          style={{ background: colors.primary, height: 'fit-content' }}
        >
          <Sheet.Header style={{ color: colors.light }} />
          <Sheet.Content onTap={() => setMenuIsOpen(false)}>
            <MusicInfo
              name={props.name}
              imageUrl={props.imageUrl}
              artists={props.artists}
            />
            <MusicMenu
              track={{
                name: props.name,
                artists: props.artists,
                description: props.description,
                duration: props.duration,
                fileUrl: props.fileUrl,
                id: props.id,
                imageUrl: props.imageUrl,
                explicit: props.explicit,
                isLiked: props.isLiked,
                isReported: props.isReported,
                isSaved: props.isSaved,
                playlist: props.playlist,
                categoriesId: []
              }}
              playlist={props.playlist}
              liked={props.isLiked}
              reported={props.isReported}
              saved={props.isSaved}
            />
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={() => setMenuIsOpen(false)} />
      </Sheet>
    </>
  );
}
