import { useEffect, useRef } from 'react';
import MediaSession, { useMediaSession } from '@mebtte/react-media-session';
import { usePlayer } from '../../context/PlayerProvider/usePlayer';
import { useMobile } from '../../hooks/useMobile';
import { DesktopPlayer } from './Desktop';
import { MobilePlayer } from './Mobile';
import { useLockBodyScroll } from 'react-use';

export let handleToggleRepeatMode = () => {};

export let handlePreviousMusic = () => {};

export let handleNextMusic = () => {};

export let handleEndMusic = () => {};

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

      player.setCurrentTrack(
        player.getTrackInSpecificPositionOfTrackList(
          player.getPositionOnTrackList() - 1
        )
      );

      player.setPositionOnTrackList(player.getPositionOnTrackList() - 1);

      if (player.getRepeat() === 'single') {
        player.handleChangeRepeat('all');
      }
    }
  };

  handleNextMusic = () => {
    if (audioElementRef.current) {
      if (player.getRepeat() === 'single') {
        player.handleChangeRepeat('all');
      }

      if (player.getPositionOnTrackList() >= player.getTrackListLength()) {
        player.setCurrentTrack(player.getTrackInSpecificPositionOfTrackList(1));
        player.setPositionOnTrackList(1);
        audioElementRef.current.currentTime = 0;
        player.handleChangePlaying(true);
        audioElementRef.current.play();
        return;
      }

      player.setCurrentTrack(
        player.getTrackInSpecificPositionOfTrackList(
          player.getPositionOnTrackList() + 1
        )
      );
      player.setPositionOnTrackList(player.getPositionOnTrackList() + 1);
    }
  };

  handleEndMusic = () => {
    if (
      player.getRepeat() === 'off' &&
      player.getPositionOnTrackList() >= player.getTrackListLength()
    ) {
      player.handleChangePlaying(false);
      return;
    }

    return handleNextMusic();
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

  useLockBodyScroll(player.getLarge());

  /*   useMediaSession({
    title: player.getCurrentTrack().name,
    artwork: [
      {
        src: player.getCurrentTrack().imageUrl,
        sizes: '256x256,384x384,512x512',
        type: 'image/png'
      },
      {
        src: player.getCurrentTrack().imageUrl,
        sizes: '96x96,128x128,192x192',
        type: 'image/png'
      }
    ],
    artist: player.formatArtists(player.getCurrentTrack().artists),
    onPlay: () => handlePlayMusic,
    onPause: () => handlePlayMusic,
    onNextTrack: () => handleNextMusic,
    onPreviousTrack: () => handlePreviousMusic
  }); */

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

      audioElementRef.current.addEventListener('ended', () => {
        handleEndMusic();
      });

      audioElementRef.current.volume = player.getVolume() / 100;
    }
  }, [audioElementRef.current]);

  if (player.getOpen()) {
    return (
      <>
        {isMobile ? <MobilePlayer /> : <DesktopPlayer />}

        <audio ref={audioElementRef} preload="metadata">
          <source src={player.getCurrentTrack().fileUrl} type="audio/mpeg" />
        </audio>

        <MediaSession
          title={player.getCurrentTrack().name}
          artwork={[
            {
              src: player.getCurrentTrack().imageUrl,
              sizes: '256x256,384x384,512x512',
              type: 'image/png'
            },
            {
              src: player.getCurrentTrack().imageUrl,
              sizes: '96x96,128x128,192x192',
              type: 'image/png'
            }
          ]}
          artist={player.formatArtists(player.getCurrentTrack().artists)}
          onPlay={handlePlayMusic}
          onPause={handlePlayMusic}
          onNextTrack={handleNextMusic}
          onPreviousTrack={handlePreviousMusic}
        ></MediaSession>
      </>
    );
  } else {
    return <></>;
  }
}
