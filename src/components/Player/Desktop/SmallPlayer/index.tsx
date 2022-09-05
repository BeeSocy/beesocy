import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { useEffect, useRef } from 'react';
import {
  MdArrowDropUp,
  MdExplicit,
  MdMenuOpen,
  MdPauseCircleFilled,
  MdPlayCircleFilled,
  MdRepeat,
  MdRepeatOne,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious
} from 'react-icons/md';

import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
import { Title } from '../../../General/Title';
import { MusicMenu } from '../../../MusicFeed/MusicMenu';
import { LikeButton } from '../../../Widgets/Buttons/ActionButtons/LikeButton';
import { Button } from '../../../Widgets/Buttons/Button';
import {
  Container,
  MusicContainer,
  MusicDetails,
  MusicInfo,
  Wrapper,
  Specs,
  Controls,
  ShuffleButton
  /* TimeContainer,
  TimeSeconds,
  TimebarSlider,
  TimebarTrack,
  TimebarRange,
  TimebarThumb,
  ExtraControls,
  VolumeSlider,
  VolumeTrack,
  VolumeRange,
  ToggleLargeButton */
} from './styles';

interface IPlayerProps {}

export function Player({}: IPlayerProps) {
  function handleToggleRepeatMode() {
    if (player.getRepeat() == 'off') {
      player.handleChangeRepeat('all');
    } else if (player.getRepeat() == 'all') {
      player.handleChangeRepeat('single');
    } else {
      player.handleChangeRepeat('off');
    }
  }

  function handlePreviousMusic() {
    if (audioElementRef.current) {
      if (
        player.getPositionOnTrackList() <= 1 ||
        player.getCurrentSeconds() > 4
      ) {
        player.handleChangeCurrentSeconds(0);
        return;
      }

      player.setPositionOnTrackList(player.getPositionOnTrackList() - 1);
    }
  }

  function handleNextMusic() {
    if (audioElementRef.current) {
      if (player.getPositionOnTrackList() >= player.getTrackListLength()) {
        player.setPositionOnTrackList(1);
        return;
      }

      player.setPositionOnTrackList(player.getPositionOnTrackList() + 1);
    }
  }

  const audioElementRef = useRef<HTMLAudioElement>(null);

  const player = usePlayer();

  const { colors } = useTheme();

  useEffect(() => {
    if (audioElementRef.current && player.getCurrentSeconds()) {
      audioElementRef.current.currentTime = player.getCurrentSeconds();
    }
  }, [player.getCurrentSeconds()]);

  useEffect(() => {
    if (audioElementRef.current && player.getTrackListLength() > 0) {
      audioElementRef.current.src =
        player.getTrackList()[player.getPositionOnTrackList() - 1].fileUrl;
      audioElementRef.current.currentTime = 0;
    }
  }, [player.getPositionOnTrackList()]);

  useEffect(() => {
    if (audioElementRef.current) {
      if (player.getPlaying()) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [player.getPlaying()]);

  return (
    <Container>
      <ContextMenuPrimitive.Root>
        <ContextMenuPrimitive.Trigger>
          <Wrapper>
            <MusicContainer>
              <img src={player.getCurrentTrack()?.imageUrl} />
              <MusicInfo>
                <Title size="medium">{player.getCurrentTrack()?.name}</Title>
                <MusicDetails>
                  {player.getCurrentTrack()?.explicit && (
                    <MdExplicit size={20} />
                  )}
                  <span>
                    {player?.getCurrentTrack() &&
                      player.formatArtists(player.getCurrentTrack().artists)}
                  </span>
                </MusicDetails>
              </MusicInfo>
            </MusicContainer>

            <Specs>
              <Controls>
                <Button onClick={handleToggleRepeatMode}>
                  {player.getRepeat() != 'single' ? (
                    <MdRepeat
                      style={
                        player.getRepeat() == 'all'
                          ? { fill: colors.bee }
                          : { fill: colors.text }
                      }
                    />
                  ) : (
                    <MdRepeatOne style={{ fill: colors.bee }} />
                  )}
                </Button>

                <Button onClick={handlePreviousMusic}>
                  <MdSkipPrevious />
                </Button>

                <Button
                  onClick={() =>
                    player.handleChangePlaying(!player.getPlaying())
                  }
                >
                  {player.getPlaying() ? (
                    <MdPlayCircleFilled />
                  ) : (
                    <MdPauseCircleFilled />
                  )}
                </Button>

                <Button onClick={handleNextMusic}>
                  <MdSkipNext />
                </Button>

                <ShuffleButton onClick={player.shuffleTrackList}>
                  <MdShuffle />
                </ShuffleButton>
              </Controls>

              {/* <TimeContainer>
                <TimeSeconds>
                  {player.formatSeconds(player.getCurrentSeconds())}
                </TimeSeconds>

                <TimebarSlider>
                  <TimebarTrack>
                    <TimebarRange />
                  </TimebarTrack>

                  <TimebarThumb />
                </TimebarSlider>

                <TimeSeconds>
                  {player.formatSeconds(player.getCurrentTrack().duration)}
                </TimeSeconds>
              </TimeContainer> */}
            </Specs>

            {/* <ExtraControls>
              <LikeButton />

              <VolumeSlider>
                <VolumeTrack>
                  <VolumeRange />
                </VolumeTrack>
              </VolumeSlider>

              <ToggleLargeButton
                onClick={() => player.handleChangeLarge(!player.getLarge())}
              >
                <MdArrowDropUp />
              </ToggleLargeButton>
            </ExtraControls> */}
          </Wrapper>
        </ContextMenuPrimitive.Trigger>

        <ContextMenuPrimitive.Content style={{ zIndex: 110 }}>
          <MusicMenu />
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Root>

      <audio ref={audioElementRef} preload="metadata">
        <source src={player.getCurrentTrack().fileUrl} type="audio/mpeg" />
      </audio>
    </Container>
  );
}
