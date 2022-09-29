import { useState } from 'react';
import { MdPause, MdPlayArrow, MdExplicit, MdMoreVert } from 'react-icons/md';
import { useLongPress, useLockBodyScroll } from 'react-use';
import Sheet from 'react-modal-sheet';

import { IMusicCardProps, longPressOptions } from '../..';
import { usePlayer } from '../../../../../context/PlayerProvider/usePlayer';
import dark from '../../../../../styles/themes/dark';
import { MusicInfo } from '../../../../MusicFeed/MusicInfo';
import { MusicMenu } from '../../../../MusicFeed/MusicMenu';
import {
  Container,
  Card,
  Wrapper,
  TopContainer,
  Controls,
  PlayButton,
  BottomContainer,
  Details,
  MusicName,
  DropdownTrigger
} from '../styles';
import { useTheme } from '../../../../../context/ThemeProvider/useTheme';

export function MusicCardSmallMobile(props: IMusicCardProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const { colors } = useTheme();

  const longPressEvent = useLongPress(onLongPress, longPressOptions);

  const { formatArtists } = usePlayer();

  useLockBodyScroll(menuIsOpen);

  function handleSetMusicBottomSheetOpen() {
    setMenuIsOpen(true);
  }

  function onLongPress() {
    handleSetMusicBottomSheetOpen();
  }

  return (
    <>
      <Container>
        <Card {...longPressEvent}>
          <Wrapper>
            <TopContainer onClick={props.clickAction}>
              <Controls>
                <PlayButton rounded full={false}>
                  {props.playing ? (
                    <MdPause size={28} style={{ fill: dark.colors.text }} />
                  ) : (
                    <MdPlayArrow size={28} style={{ fill: dark.colors.text }} />
                  )}
                </PlayButton>
              </Controls>

              <img src={props.imageUrl} alt={`Capa da música ${props.name}`} />
            </TopContainer>

            <BottomContainer>
              <Details title={formatArtists(props.artists)}>
                <MusicName>{props.name}</MusicName>
                <section>
                  <span>{props.explicit && <MdExplicit size={20} />}</span>
                  <span>{props.playlist ? 'Playlist' : 'Single'}</span>
                  <span>&bull;</span>
                  <span>{formatArtists(props.artists)}</span>
                </section>
              </Details>

              <DropdownTrigger
                role={'button'}
                onClick={event => {
                  handleSetMusicBottomSheetOpen();
                  event.stopPropagation();
                }}
              >
                <MdMoreVert />
              </DropdownTrigger>
            </BottomContainer>
          </Wrapper>
        </Card>
      </Container>

      <Sheet isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)}>
        <Sheet.Container
          style={{ background: colors.primary, height: 'fit-content' }}
          onTap={() => setMenuIsOpen(false)}
        >
          <Sheet.Header style={{ color: colors.light }} />
          <Sheet.Content>
            <MusicInfo
              name={props.name}
              imageUrl={props.imageUrl}
              artists={props.artists}
            />
            <MusicMenu
              playlist={props.playlist}
              liked={props.isLiked}
              reported={props.isReported}
              saved={props.isSaved}
              track={{
                name: props.name,
                artists: props.artists,
                description: props.description,
                duration: props.duration,
                fileUrl: props.fileUrl,
                identification: props.identification,
                imageUrl: props.imageUrl,
                explicit: props.explicit,
                isLiked: props.isLiked,
                isReported: props.isReported,
                isSaved: props.isSaved,
                playlist: props.playlist,
                categoriesId: []
              }}
            />
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={() => setMenuIsOpen(false)} />
      </Sheet>
    </>
  );
}
