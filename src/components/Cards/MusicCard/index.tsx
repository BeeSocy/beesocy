import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';

import { IMusicPost } from '../../../types/musicPost';

import { Title } from '../../General/Title';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import dark from '../../../styles/themes/dark';

import {
  Container,
  TopContainer,
  BottomContainer,
  Details,
  DropdownTrigger,
  Controls,
  PlayButton,
  Wrapper,
  MusicName
} from './styles';
import { MusicMenu } from '../../MusicFeed/MusicMenu';

interface IMusicCardProps extends IMusicPost {
  large?: boolean;
  playing?: boolean;
  showDuration?: boolean;
}

export function MusicCard({
  name,
  playlist,
  artists,
  duration,
  showDuration,
  explicit,
  large,
  playing,
  imageUrl
}: IMusicCardProps) {
  function handleMusicCardClick() {
    //play player
    console.log('alo');
  }

  function formatArtists(artists: string[]): string {
    let formattedString = '';
    if (artists.length > 1) {
      artists.map((value, index) => {
        formattedString += value;
        if (index == artists.length - 2) {
          formattedString += ' e ';
        } else if (index != artists.length - 1) {
          formattedString += ', ';
        }
      });
    } else {
      formattedString = artists[0];
    }

    return formattedString;
  }

  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger>
        <Container onClick={handleMusicCardClick} large={large}>
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
                  {playing ? (
                    <MdPause size={52} style={{ fill: dark.colors.text }} />
                  ) : (
                    <MdPlayArrow size={52} style={{ fill: dark.colors.text }} />
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
        </Container>
      </ContextMenuPrimitive.Trigger>

      <ContextMenuPrimitive.Content hideWhenDetached style={{ zIndex: 110 }}>
        <MusicMenu />
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Root>
  );
}
