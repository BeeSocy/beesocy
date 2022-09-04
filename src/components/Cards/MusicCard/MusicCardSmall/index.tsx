import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import Sheet from 'react-modal-sheet';

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
import { handleMusicCardClick, IMusicCardProps, longPressOptions } from '..';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
import { useState } from 'react';
import { useLongPress } from 'react-use';
import { MusicInfo } from '../../../MusicFeed/MusicInfo';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';

export function MusicCardSmall(props: IMusicCardProps) {
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
          <Container>
            <Card {...longPressEvent} onClick={handleMusicCardClick}>
              <Wrapper>
                <TopContainer>
                  <Controls>
                    <PlayButton rounded full={false}>
                      {props.playing ? (
                        <MdPause size={28} style={{ fill: dark.colors.text }} />
                      ) : (
                        <MdPlayArrow
                          size={28}
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
                    onClick={handleSetMusicBottomSheetOpen}
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
              <Card onClick={handleMusicCardClick}>
                <Wrapper>
                  <TopContainer>
                    <Controls>
                      <PlayButton rounded full={false}>
                        {props.playing ? (
                          <MdPause
                            size={28}
                            style={{ fill: dark.colors.text }}
                          />
                        ) : (
                          <MdPlayArrow
                            size={28}
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
                    <Details title={formatArtists(props.artists)}>
                      <MusicName>{props.name}</MusicName>
                      <section>
                        <span>
                          {props.explicit && <MdExplicit size={20} />}
                        </span>
                        <span>{props.playlist ? 'Playlist' : 'Single'}</span>
                        <span>&bull;</span>
                        <span>{formatArtists(props.artists)}</span>
                      </section>
                    </Details>

                    <DropdownMenuPrimitive.Root>
                      <DropdownMenuPrimitive.Trigger style={{ all: 'unset' }}>
                        <DropdownTrigger role={'button'}>
                          <MdMoreVert />
                        </DropdownTrigger>
                      </DropdownMenuPrimitive.Trigger>

                      <DropdownMenuPrimitive.Content
                        sideOffset={5}
                        style={{ zIndex: 110 }}
                      >
                        {!isMobile && <MusicMenu />}
                      </DropdownMenuPrimitive.Content>
                    </DropdownMenuPrimitive.Root>
                  </BottomContainer>
                </Wrapper>
              </Card>
            </ContextMenuPrimitive.Trigger>

            <ContextMenuPrimitive.Content style={{ zIndex: 110 }}>
              {!isMobile && <MusicMenu />}
            </ContextMenuPrimitive.Content>
          </ContextMenuPrimitive.Root>
        </Container>
      )}
    </>
  );
}
