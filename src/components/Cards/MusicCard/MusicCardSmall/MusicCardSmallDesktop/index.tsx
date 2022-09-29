import { MdPause, MdPlayArrow, MdExplicit, MdMoreVert } from 'react-icons/md';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import { IMusicCardProps } from '../..';
import { usePlayer } from '../../../../../context/PlayerProvider/usePlayer';
import dark from '../../../../../styles/themes/dark';
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
import { StyledDropdownMenuItem } from '../../MusicCardLarge/styles';

export function MusicCardSmallDesktop(props: IMusicCardProps) {
  const { formatArtists } = usePlayer();

  return (
    <Container>
      <ContextMenuPrimitive.Root>
        <ContextMenuPrimitive.Trigger>
          <Card>
            <Wrapper>
              <TopContainer onClick={props.clickAction}>
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

                <DropdownMenuPrimitive.Root>
                  <DropdownMenuPrimitive.Trigger style={{ all: 'unset' }}>
                    <DropdownTrigger role={'button'}>
                      <MdMoreVert />
                    </DropdownTrigger>
                  </DropdownMenuPrimitive.Trigger>

                  <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.Content
                      style={{ zIndex: 110 }}
                      onClick={event => event.stopPropagation()}
                    >
                      <StyledDropdownMenuItem>
                        <MusicMenu
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
                      </StyledDropdownMenuItem>
                    </DropdownMenuPrimitive.Content>
                  </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Root>
              </BottomContainer>
            </Wrapper>
          </Card>
        </ContextMenuPrimitive.Trigger>

        <ContextMenuPrimitive.Content style={{ zIndex: 110 }}>
          <ContextMenuPrimitive.Item>
            <MusicMenu
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
          </ContextMenuPrimitive.Item>
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Root>
    </Container>
  );
}
