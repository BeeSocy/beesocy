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
  MdSkipPrevious,
  MdVolumeOff,
  MdVolumeUp
} from 'react-icons/md';
import { useEffectOnce } from 'react-use';

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
  ShuffleButton,
  TimeContainer,
  TimeSeconds,
  TimebarSlider,
  TimebarTrack,
  TimebarRange,
  TimebarThumb,
  ExtraControls,
  VolumeSlider,
  VolumeTrack,
  VolumeRange,
  ToggleLargeButton,
  VolumeButton
} from './styles';

interface IPlayerProps {}

export function Player({}: IPlayerProps) {
  function handleToggleRepeatMode() {
    if (audioElementRef.current) {
      if (player.getRepeat() == 'off') {
        player.handleChangeRepeat('all');
        audioElementRef.current.loop = false;
      } else if (player.getRepeat() == 'all') {
        player.handleChangeRepeat('single');
        audioElementRef.current.loop = true;
      } else {
        player.handleChangeRepeat('off');
        audioElementRef.current.loop = false;
      }
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

  function handlePlayMusic() {
    player.handleChangePlaying(!player.getPlaying());
    if (audioElementRef.current) {
      if (player.getPlaying()) {
        audioElementRef.current.pause();
      } else {
        audioElementRef.current.play();
      }
    }
  }

  const audioElementRef = useRef<HTMLAudioElement>(null);

  const player = usePlayer();

  const { colors } = useTheme();

  useEffect(() => {
    if (audioElementRef.current) {
      console.log('salve');
    }
  }, [audioElementRef.current?.currentTime]);

  if (player.getOpen()) {
    return (
      <Container onClick={() => player.handleChangeLarge(!player.getLarge())}>
        <ContextMenuPrimitive.Root>
          <ContextMenuPrimitive.Trigger>
            <Wrapper>
              <MusicContainer>
                <img src={player.getCurrentTrack()?.imageUrl} />

                <MusicDetails>
                  <Title size="small">{player.getCurrentTrack()?.name}</Title>

                  <MusicInfo>
                    <span>
                      {player.getCurrentTrack()?.explicit && (
                        <MdExplicit size={20} />
                      )}
                    </span>

                    <span>
                      {player?.getCurrentTrack() &&
                        player.formatArtists(player.getCurrentTrack().artists)}
                    </span>
                  </MusicInfo>
                </MusicDetails>
              </MusicContainer>

              <Specs>
                <Controls>
                  <Button onClick={handleToggleRepeatMode} rounded full={false}>
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

                  <Button onClick={handlePreviousMusic} rounded full={false}>
                    <MdSkipPrevious />
                  </Button>

                  <Button onClick={handlePlayMusic} rounded full={false}>
                    {player.getPlaying() ? (
                      <MdPauseCircleFilled
                        style={{ transform: 'scale(1.5)' }}
                      />
                    ) : (
                      <MdPlayCircleFilled style={{ transform: 'scale(1.5)' }} />
                    )}
                  </Button>

                  <Button onClick={handleNextMusic} rounded full={false}>
                    <MdSkipNext />
                  </Button>

                  <ShuffleButton
                    onClick={player.shuffleTrackList}
                    rounded
                    full={false}
                  >
                    <MdShuffle />
                  </ShuffleButton>
                </Controls>

                <TimeContainer>
                  <TimeSeconds>
                    {player.formatSeconds(player.getCurrentSeconds())}
                  </TimeSeconds>

                  <TimebarSlider
                    max={player.getCurrentTrack().duration}
                    onValueChange={value => {
                      player.handleChangeCurrentSeconds(value[0]);
                    }}
                    value={[player.getCurrentSeconds()]}
                  >
                    <TimebarTrack>
                      <TimebarRange />
                    </TimebarTrack>

                    <TimebarThumb />
                  </TimebarSlider>

                  <TimeSeconds>
                    {player.formatSeconds(
                      player.getCurrentTrack().duration
                        ? player.getCurrentTrack().duration
                        : 0
                    )}
                  </TimeSeconds>
                </TimeContainer>
              </Specs>

              <ExtraControls>
                <LikeButton />

                <VolumeSlider
                  value={[player.getVolume()]}
                  onValueChange={value => {
                    player.handleChangeVolume(value[0]);
                  }}
                >
                  <VolumeButton
                    onClick={() => player.handleChangeMuted(!player.getMuted())}
                  >
                    {player.getMuted() ? <MdVolumeOff /> : <MdVolumeUp />}
                  </VolumeButton>

                  <VolumeTrack>
                    <VolumeRange />
                  </VolumeTrack>
                </VolumeSlider>

                <ToggleLargeButton
                  active={player.getLarge()}
                  rounded
                  full={false}
                >
                  <MdArrowDropUp />
                </ToggleLargeButton>
              </ExtraControls>
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
}
