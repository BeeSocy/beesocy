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
import { SheetMusicMenu } from '../../../../MusicFeed/SheetMusicMenu';

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
      <Container {...props}>
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

      <SheetMusicMenu
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        track={props}
      />
    </>
  );
}
