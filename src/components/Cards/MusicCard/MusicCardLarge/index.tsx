import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';

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
import { formatArtists, handleMusicCardClick, IMusicCardProps } from '..';
import { MusicBottomSheet } from '../MusicBottomSheet';
import { IMusicPost } from '../../../../types/musicPost';
import { Button } from '../../../Widgets/Buttons/Button';

export function MusicCardLarge(props: IMusicCardProps) {
  const { isMobile } = useMobile();

  const currentMusic: IMusicPost = props;

  return (
    <>
      {isMobile ? (
        <>
          <Container>
            <Card onClick={handleMusicCardClick}>
              <Wrapper>
                <TopContainer>
                  <Controls>
                    <DropdownTrigger role={'button'}>
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

          {isMobile && <MusicBottomSheet music={currentMusic} />}
        </>
      ) : (
        <Container>
          <ContextMenuPrimitive.Root>
            <ContextMenuPrimitive.Trigger>
              <Card onClick={handleMusicCardClick}>
                <Wrapper>
                  <TopContainer>
                    <Controls>
                      <DropdownMenuPrimitive.Root>
                        <DropdownMenuPrimitive.Trigger style={{ all: 'unset' }}>
                          <DropdownTrigger role={'button'}>
                            <MdMoreVert style={{ fill: dark.colors.text }} />
                          </DropdownTrigger>
                        </DropdownMenuPrimitive.Trigger>

                        <DropdownMenuPrimitive.Content
                          sideOffset={5}
                          style={{ zIndex: 110 }}
                        >
                          <MusicMenu />
                        </DropdownMenuPrimitive.Content>
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
