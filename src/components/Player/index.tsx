import { useEffect, useRef } from 'react';
import { usePlayer } from '../../context/PlayerProvider/usePlayer';
import { useMobile } from '../../hooks/useMobile';
import { DesktopPlayer } from './Desktop/Player';
import { DesktopSmallPlayer } from './Desktop/SmallPlayer';

export let handleToggleRepeatMode = () => {};

export let handlePreviousMusic = () => {};

export let handleNextMusic = () => {};

export let handlePlayMusic = () => {};

export let handleChangeTimeInSlider = (seconds: number) => {};

export function Player() {
  const player = usePlayer();
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const { isMobile } = useMobile();

  handleToggleRepeatMode = () => {
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
  };

  handlePreviousMusic = () => {
    if (audioElementRef.current) {
      if (
        player.getPositionOnTrackList() <= 1 ||
        player.getCurrentSeconds() > 4
      ) {
        player.handleChangeCurrentSeconds(0);
        audioElementRef.current.currentTime = 0;
        player.handleChangePlaying(true);
        audioElementRef.current.play();
        return;
      }

      player.setPositionOnTrackList(player.getPositionOnTrackList() - 1);
    }
  };

  handleNextMusic = () => {
    if (audioElementRef.current) {
      if (player.getPositionOnTrackList() >= player.getTrackListLength()) {
        player.setPositionOnTrackList(1);
        return;
      }

      player.setPositionOnTrackList(player.getPositionOnTrackList() + 1);
    }
  };

  handlePlayMusic = () => {
    player.handleChangePlaying(!player.getPlaying());
  };

  handleChangeTimeInSlider = (seconds: number) => {
    if (audioElementRef.current) {
      player.handleChangeCurrentSeconds(seconds);
      audioElementRef.current.currentTime = seconds;
    }
  };

  useEffect(() => {
    if (audioElementRef.current) {
      if (
        player.getCurrentTrack().fileUrl !== audioElementRef.current.currentSrc
      ) {
        audioElementRef.current.src = player.getCurrentTrack().fileUrl;
        audioElementRef.current.load();
        audioElementRef.current.play();
      } else if (player.getPlaying()) {
        player.handleChangePlaying(false);
        return;
      }
      player.handleChangePlaying(true);
    }
  }, [player.getCurrentTrack()]);

  useEffect(() => {
    if (audioElementRef.current) {
      if (player.getPlaying()) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [player.getPlaying()]);

  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = player.getVolume() / 100;
    }
  }, [player.getVolume()]);

  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.addEventListener('timeupdate', () => {
        player.handleChangeCurrentSeconds(
          audioElementRef.current?.currentTime ?? 0
        );
      });
      audioElementRef.current.volume = player.getVolume() / 100;
    }
  }, [audioElementRef.current]);

  if (player.getOpen()) {
    return (
      <>
        {isMobile ? <></> : <DesktopPlayer />}
        <audio ref={audioElementRef} preload="metadata">
          <source src={player.getCurrentTrack().fileUrl} type="audio/mpeg" />
        </audio>
      </>
    );
  } else {
    return <></>;
  }
}
