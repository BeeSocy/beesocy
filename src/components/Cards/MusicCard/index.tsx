import { MdPlayArrow, MdPause, MdMoreVert, MdExplicit } from 'react-icons/md';

import { IMusicPost } from '../../../types/musicPost';

import { Title } from '../../General/Title';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import {
  Container,
  TopContainer,
  BottomContainer,
  Details,
  DropdownTrigger,
  Controls,
  PlayButton,
  Wrapper
} from './styles';

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
                      <MdMoreVert />
                    </DropdownTrigger>
                  </DropdownMenuPrimitive.Trigger>

                  <DropdownMenuPrimitive.Content sideOffset={5}>
                    <h1>Olá mundo!</h1>
                  </DropdownMenuPrimitive.Content>
                </DropdownMenuPrimitive.Root>

                <PlayButton rounded full={false}>
                  {playing ? <MdPause size={52} /> : <MdPlayArrow size={52} />}
                </PlayButton>
              </Controls>

              <img src={imageUrl} alt={`Capa da música ${name}`} />
            </TopContainer>

            <BottomContainer>
              <Title>{name}</Title>
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

      <ContextMenuPrimitive.Content>
        <h1>Hello world!</h1>
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Root>
  );
}
