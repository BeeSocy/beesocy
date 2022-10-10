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
import { useModal } from '../../../../../context/ModalProvider/useModal';
import { MobileMusicMenu } from '../../../../MusicFeed/MobileMusicMenu';

export function MusicCardLargeMobile(props: IMusicCardProps) {
  const longPressEvent = useLongPress(onLongPress, longPressOptions);

  const { formatArtists } = usePlayer();

  function handleSetMusicMenuOpen() {
    handleCallModal(<MobileMusicMenu track={{ ...props }} />, {
      easyClose: true,
      overlay: true
    });
  }

  function onLongPress() {
    handleSetMusicMenuOpen();
  }

  const { handleCallModal, open } = useModal();

  useLockBodyScroll(open);

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
                    handleSetMusicMenuOpen();
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
    </>
  );
}
