import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';

import Sheet from 'react-modal-sheet';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

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
import { useState } from 'react';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
import { MusicInfo } from '../../../MusicFeed/MusicInfo';
import { formatArtists, handleMusicCardClick, IMusicCardProps } from '..';

export function MusicCardLarge({
  name,
  playlist,
  artists,
  explicit,
  playing,
  imageUrl
}: IMusicCardProps) {


  function handleToggleMobileSheetIsOpen() {
    setIsMobileSheetOpen(state => !state);
  }

  const { isMobile } = useMobile();

  const { colors } = useTheme();

  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState<boolean>(false);

  return (
    <>
      <Container>
        <ContextMenuPrimitive.Root onOpenChange={handleToggleMobileSheetIsOpen}>
          <ContextMenuPrimitive.Trigger>
            <Card onClick={handleMusicCardClick}>
              <Wrapper>
                <TopContainer>
                  <Controls>
                    <DropdownMenuPrimitive.Root
                      onOpenChange={handleToggleMobileSheetIsOpen}
                    >
                      <DropdownMenuPrimitive.Trigger style={{ all: 'unset' }}>
                        <DropdownTrigger role={'button'}>
                          <MdMoreVert style={{ fill: dark.colors.text }} />
                        </DropdownTrigger>
                      </DropdownMenuPrimitive.Trigger>

                      <DropdownMenuPrimitive.Content
                        sideOffset={5}
                        style={{ zIndex: 110 }}
                      >
                        {!isMobile && <MusicMenu />}
                      </DropdownMenuPrimitive.Content>
                    </DropdownMenuPrimitive.Root>

                    <PlayButton rounded full={false}>
                      {playing ? (
                        <MdPause size={52} style={{ fill: dark.colors.text }} />
                      ) : (
                        <MdPlayArrow
                          size={52}
                          style={{ fill: dark.colors.text }}
                        />
                      )}
                    </PlayButton>
                  </Controls>

                  <img src={imageUrl} alt={`Capa da música ${name}`} />
                </TopContainer>

                <BottomContainer>
                  <MusicName>{name}</MusicName>
                  <Details title={formatArtists(artists)}>
                    <span>{explicit && <MdExplicit size={20} />}</span>
                    <span>{playlist ? 'Playlist' : 'Single'}</span>
                    <span>&bull;</span>
                    <span>{formatArtists(artists)}</span>
                  </Details>
                </BottomContainer>
              </Wrapper>
            </Card>
          </ContextMenuPrimitive.Trigger>

          <ContextMenuPrimitive.Content style={{ zIndex: 110 }}>
            {!isMobile && <MusicMenu />}
          </ContextMenuPrimitive.Content>
        </ContextMenuPrimitive.Root>
      </Container>

      {isMobile && (
        <Sheet
          isOpen={isMobileSheetOpen}
          onClose={() => setIsMobileSheetOpen(false)}
        >
          <Sheet.Container
            style={{ background: colors.primary, height: 'fit-content' }}
          >
            <Sheet.Header style={{ color: colors.light }} />
            <Sheet.Content>
              <MusicInfo name={name} artists={artists} imageUrl={imageUrl} />
              <MusicMenu />
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
      )}
    </>
  );
}
