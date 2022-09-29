import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import dark from '../../../../../styles/themes/dark';
import { MusicMenu } from '../../../../MusicFeed/MusicMenu';
import { IMusicCardProps } from '../..';
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
  Card,
  StyledDropdownMenuItem
} from '../styles';
import { usePlayer } from '../../../../../context/PlayerProvider/usePlayer';

export function MusicCardLargeDesktop(props: IMusicCardProps) {
  const { formatArtists } = usePlayer();

  return (
    <Container {...props}>
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
                        style={{
                          zIndex: 110
                        }}
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
