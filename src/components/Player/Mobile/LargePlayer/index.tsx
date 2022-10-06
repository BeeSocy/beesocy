import { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';

import {
  MdExpandMore,
  MdMoreVert,
  MdPauseCircleFilled,
  MdPersonAdd,
  MdPlayCircleFilled,
  MdPlaylistAdd,
  MdRepeat,
  MdRepeatOne,
  MdShare,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious
} from 'react-icons/md';

import { useEffectOnce, useHoverDirty } from 'react-use';
import {
  handleChangeTimeInSlider,
  handleNextMusic,
  handlePlayMusic,
  handlePreviousMusic,
  handleToggleRepeatMode
} from '../..';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
import { Title } from '../../../General/Title';
import { SheetMusicMenu } from '../../../MusicFeed/SheetMusicMenu';
import { LikeButton } from '../../../Widgets/Buttons/ActionButtons/LikeButton';
import { Button } from '../../../Widgets/Buttons/Button';
import {
  StyledSheet,
  Header,
  MusicCover,
  MusicCoverActions,
  Specs,
  TimebarRange,
  TimebarSlider,
  TimebarThumb,
  TimebarTrack,
  TimeContainer,
  TimeSeconds,
  Controls,
  ShuffleButton,
  Artists
} from './styles';

export function MobileLargePlayer() {
  const player = usePlayer();

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const [coverActionsIsActive, setCoverActionsIsActive] =
    useState<boolean>(false);

  const { colors } = useTheme();

  const MusicCoverRef = useRef<HTMLDivElement>(null);

  const isHoverMusicCover = useHoverDirty(MusicCoverRef);

  useEffect(() => {
    setCoverActionsIsActive(isHoverMusicCover);
  }, [isHoverMusicCover]);

  useEffectOnce(() => {
    // player.handleChangeVolume(100);
  });

  return (
    <>
      <StyledSheet
        isOpen={player.getLarge()}
        onClose={() => player.handleChangeLarge(false)}
      >
        <StyledSheet.Container>
          <StyledSheet.Content>
            <Header>
              <Button
                onClick={() => player.handleChangeLarge(false)}
                full={false}
                rounded
              >
                <MdExpandMore />
              </Button>

              <Button onClick={() => setMenuIsOpen(true)} full={false} rounded>
                <MdMoreVert />
              </Button>
            </Header>

            <MusicCover
              ref={MusicCoverRef}
              onClick={() => setCoverActionsIsActive(state => !state)}
            >
              {coverActionsIsActive && (
                <MusicCoverActions active={coverActionsIsActive}>
                  <Button
                    full={false}
                    rounded
                    onClick={event => event.stopPropagation()}
                  >
                    <MdShare />
                  </Button>

                  <Button
                    full={false}
                    rounded
                    onClick={event => event.stopPropagation()}
                  >
                    <MdPlaylistAdd />
                  </Button>

                  <LikeButton />

                  <Button
                    full={false}
                    rounded
                    onClick={event => event.stopPropagation()}
                  >
                    <MdPersonAdd />
                  </Button>
                </MusicCoverActions>
              )}

              <img
                src={player.getCurrentTrack().imageUrl}
                alt={`Capa da música ${player.getCurrentTrack().name}`}
                loading={'lazy'}
              />
            </MusicCover>

            <Specs>
              <Title size="medium">{player.getCurrentTrack().name}</Title>
              <Artists>
                {player.formatArtists(player.getCurrentTrack().artists)}
              </Artists>

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

              <Controls
                onClick={event => {
                  event.stopPropagation();
                }}
              >
                <IconContext.Provider value={{ size: '32' }}>
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
                </IconContext.Provider>
              </Controls>
            </Specs>
          </StyledSheet.Content>
        </StyledSheet.Container>

        <StyledSheet.Backdrop onTap={() => player.handleChangeLarge(false)} />
      </StyledSheet>

      <SheetMusicMenu
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        track={player.getCurrentTrack()}
      />
    </>
  );
}
