import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';

import dark from '../../../../styles/themes/dark';

import {
  Container,
  TopContainer,
  BottomContainer,
  Details,
  DropdownTrigger,
  Controls,
  PlayButton,
  Wrapper,
  MusicName,
  Card
} from './styles';
import { MusicMenu } from '../../../MusicFeed/MusicMenu';
import { useMobile } from '../../../../hooks/useMobile';
import { IMusicCardProps, longPressOptions } from '..';
import { useEffect, useState } from 'react';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';

import Sheet from 'react-modal-sheet';
import { MusicInfo } from '../../../MusicFeed/MusicInfo';
import { useLongPress } from 'react-use';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { ContextMenu } from '../../../General/ContextMenu';

export function MusicCardLarge(props: IMusicCardProps) {
  function handleSetMusicBottomSheetOpen() {
    setMenuIsOpen(true);
  }

  function onLongPress() {
    handleSetMusicBottomSheetOpen();
  }

  const { isMobile } = useMobile();

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const { colors } = useTheme();

  const longPressEvent = useLongPress(onLongPress, longPressOptions);

  const { formatArtists } = usePlayer();


  return (
    <>
      {isMobile ? (
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
                        <MdPlayArrow
                          size={52}
                          style={{ fill: dark.colors.text }}
                        />
                      )}
                    </PlayButton>
                  </Controls>

                  <img
                    src={props.imageUrl}
                    alt={`Capa da música ${props.name}`}
                  />
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
                />
              </Sheet.Content>
            </Sheet.Container>

            <Sheet.Backdrop />
          </Sheet>
        </>
      ) : (
        <ContextMenu content={<MusicMenu />}>
          <Container>
            <Card>
              <Wrapper>
                <TopContainer onClick={props.clickAction}>
                  <Controls>
                    <DropdownTrigger
                      role={'button'}
                      onClick={event => event.stopPropagation()}
                    >
                      <MdMoreVert style={{ fill: dark.colors.text }} />
                    </DropdownTrigger>

                    <PlayButton rounded full={false}>
                      {props.playing ? (
                        <MdPause size={52} style={{ fill: dark.colors.text }} />
                      ) : (
                        <MdPlayArrow
                          size={52}
                          style={{ fill: dark.colors.text }}
                        />
                      )}
                    </PlayButton>
                  </Controls>

                  <img
                    src={props.imageUrl}
                    alt={`Capa da música ${props.name}`}
                  />
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
        </ContextMenu>
      )}
    </>
  );
}
