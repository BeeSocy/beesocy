import { useEffect, useRef, WheelEvent } from 'react';
import {
  MdArrowDropUp,
  MdExplicit,
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
import { useHoverDirty, useLockBodyScroll } from 'react-use';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import {
  handleToggleRepeatMode,
  handlePreviousMusic,
  handlePlayMusic,
  handleNextMusic,
  handleChangeTimeInSlider
} from '../..';

import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
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
  VolumeButton,
  StyledTitle
} from './styles';
import { MusicMenu } from '../../../MusicFeed/MusicMenu';

export function DesktopSmallPlayer() {
  const player = usePlayer();

  const { colors } = useTheme();

  function checkScrollDirection(event: WheelEvent): 'down' | 'up' {
    if (event.deltaY > 0) {
      return 'down';
    }
    return 'up';
  }

  const volumeSliderRef = useRef<HTMLDivElement>(null);
  const isHoverVolumeSlider = useHoverDirty(volumeSliderRef);

  useLockBodyScroll(isHoverVolumeSlider);

  const DetailsContainerRef = useRef<HTMLDivElement>(null);
  const TitleSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (DetailsContainerRef.current && TitleSpanRef.current) {
      if (
        TitleSpanRef.current?.scrollWidth >
        DetailsContainerRef.current?.offsetWidth
      ) {
        let invertScroll = true;

        setInterval(() => {
          if (invertScroll) {
            TitleSpanRef.current?.scrollTo({
              left: (TitleSpanRef.current.scrollLeft -= 1),
              behavior: 'smooth'
            });
          } else {
            TitleSpanRef.current?.scrollTo({
              left: (TitleSpanRef.current.scrollLeft += 1),
              behavior: 'smooth'
            });
          }

          if (TitleSpanRef.current && TitleSpanRef.current.scrollLeft == 0) {
            setTimeout(() => {
              invertScroll = false;
            }, 2000);
          }

          if (
            TitleSpanRef.current &&
            TitleSpanRef.current.offsetWidth +
              Math.round(TitleSpanRef.current.scrollLeft) ==
              TitleSpanRef.current.scrollWidth
          ) {
            setTimeout(() => {
              invertScroll = true;
            }, 1000);
          }
        }, 50);
      }
    }
  }, []);

  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger>
        <Container
          onClick={event => {
            player.handleChangeLarge(!player.getLarge());
            event.stopPropagation();
          }}
        >
          <Wrapper>
            <MusicContainer>
              <img src={player.getCurrentTrack()?.imageUrl} />

              <MusicDetails ref={DetailsContainerRef}>
                <StyledTitle size="small" ref={TitleSpanRef}>
                  {player.getCurrentTrack()?.name}
                </StyledTitle>

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
              <Controls
                onClick={event => {
                  event.stopPropagation();
                }}
              >
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
                    <MdPauseCircleFilled style={{ transform: 'scale(1.5)' }} />
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

              <TimeContainer
                onClick={event => {
                  event.stopPropagation();
                }}
              >
                <TimeSeconds>
                  {player.formatSeconds(player.getCurrentSeconds())}
                </TimeSeconds>

                <TimebarSlider
                  max={player.getCurrentTrack().duration}
                  onValueChange={value => {
                    handleChangeTimeInSlider(value[0]);
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
              <div onClick={event => event.stopPropagation()}>
                <LikeButton />
              </div>

              <VolumeSlider
                value={[player.getVolume()]}
                ref={volumeSliderRef}
                onValueChange={value => {
                  player.handleChangeVolume(value[0]);
                }}
                onClick={event => {
                  event.stopPropagation();
                }}
                onWheel={event => {
                  if (checkScrollDirection(event) === 'up') {
                    player.handleChangeVolume(player.getVolume() + 15);
                  } else {
                    player.handleChangeVolume(player.getVolume() - 15);
                  }
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
        </Container>
      </ContextMenuPrimitive.Trigger>
      <ContextMenuPrimitive.Content style={{ zIndex: 110 }}>
        <ContextMenuPrimitive.Item>
          <MusicMenu
            track={{
              name: player.getCurrentTrack().name,
              artists: player.getCurrentTrack().artists,
              description: player.getCurrentTrack().description,
              duration: player.getCurrentTrack().duration,
              fileUrl: player.getCurrentTrack().fileUrl,
              identification: player.getCurrentTrack().identification,
              imageUrl: player.getCurrentTrack().imageUrl,
              explicit: player.getCurrentTrack().explicit,
              usersHasLiked: player.getCurrentTrack().usersHasLiked,
              usersHasReported: player.getCurrentTrack().usersHasReported,
              usersHasSaved: player.getCurrentTrack().usersHasSaved,
              playlist: player.getCurrentTrack().playlist,
              categories: player.getCurrentTrack().categories,
              comments: player.getCurrentTrack().comments,
              createdAt: player.getCurrentTrack().createdAt
            }}
          />
        </ContextMenuPrimitive.Item>
      </ContextMenuPrimitive.Content>
      s
    </ContextMenuPrimitive.Root>
  );
}
