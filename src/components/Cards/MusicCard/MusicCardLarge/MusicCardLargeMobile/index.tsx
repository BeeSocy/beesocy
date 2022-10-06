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
import { SheetMusicMenu } from '../../../../MusicFeed/SheetMusicMenu';

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
      <Container {...longPressEvent} {...props}>
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

      <SheetMusicMenu
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        track={props}
      />
    </>
  );
}
