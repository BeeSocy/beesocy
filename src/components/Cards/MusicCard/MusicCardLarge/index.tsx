import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';
import Sheet from 'react-modal-sheet';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { useLongPress } from 'react-use';

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
import dark from '../../../../styles/themes/dark';
import { MusicMenu } from '../../../MusicFeed/MusicMenu';
import { useMobile } from '../../../../hooks/useMobile';
import { IMusicCardProps, longPressOptions } from '..';
import { useEffect, useState } from 'react';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';

import { MusicInfo } from '../../../MusicFeed/MusicInfo';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';

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
        <Container>
          <ContextMenuPrimitive.Root>
            <ContextMenuPrimitive.Trigger>
              <Card>
                <Wrapper>
                  <TopContainer onClick={props.clickAction}>
                    <Controls>
                      <DropdownMenuPrimitive.Root>
                        <DropdownMenuPrimitive.Trigger style={{ all: 'unset' }}>
                          <DropdownTrigger role={'button'}>
                            <MdMoreVert style={{ fill: dark.colors.text }} />
                          </DropdownTrigger>
                        </DropdownMenuPrimitive.Trigger>

                        <DropdownMenuPrimitive.Portal>
                          <DropdownMenuPrimitive.Content
                            sideOffset={5}
                            style={{ zIndex: 110 }}
                            onClick={event => event.stopPropagation()}
                          >
                            <MusicMenu />
                          </DropdownMenuPrimitive.Content>
                        </DropdownMenuPrimitive.Portal>
                      </DropdownMenuPrimitive.Root>

                      <PlayButton rounded full={false}>
                        {props.playing ? (
                          <MdPause
                            size={52}
                            style={{ fill: dark.colors.text }}
                          />
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
            </ContextMenuPrimitive.Trigger>

            <ContextMenuPrimitive.Content style={{ zIndex: 110 }}>
              <MusicMenu />
            </ContextMenuPrimitive.Content>
          </ContextMenuPrimitive.Root>
        </Container>
      )}
    </>
  );
}
