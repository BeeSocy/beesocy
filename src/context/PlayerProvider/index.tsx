import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { IArtist } from '../../types/artist';
import { IMusicPost } from '../../types/musicPost';
import { shuffleArray } from '../../utils/shuffleArray';
import { IPlayerContext, IPlayerProvider, repeatPossibilities } from './types';

export const PlayerContext = createContext({} as IPlayerContext);

export function PlayerProvider({ children }: IPlayerProvider) {
  const initialVolume = 50;

  const [open, setOpen] = useState<boolean>(false);

  const [trackList, setTrackListState] = useLocalStorage<IMusicPost[]>(
    'trackList',
    []
  );

  const [currentTrack, setCurrentTrackState] =
    useLocalStorage<IMusicPost>('currentTrack');

  const [playing, setPlaying] = useState<boolean>(false);

  const [volume, setVolumeState] = useLocalStorage<number>(
    'volume',
    initialVolume
  );
  const [muted, setMutedState] = useLocalStorage<boolean>('muted', false);

  const [repeat, setRepeat] = useState<repeatPossibilities>('off');

  const [currentSeconds, setCurrentSeconds] = useState<number>(0);

  const [large, setLarge] = useState<boolean>(false);

  const [positionOnTrackList, setPositionOnTrackListState] =
    useState<number>(1);

  const [trackIsLoaded, setTrackIsLoaded] = useState<boolean>(false);

  function initPlayer(track: IMusicPost): void {
    handleChangeOpen(true);
    setCurrentTrack(track);
    setCurrentSeconds(0);
  }

  function formatArtists(artists: string[]): string {
    let formattedString = '';

    if (artists) {
      if (artists.length > 1) {
        artists.map((artist, index) => {
          formattedString += artist;
          if (index == artists.length - 2) {
            formattedString += ' e ';
          } else if (index != artists.length - 1) {
            formattedString += ', ';
          }
        });
      } else {
        formattedString = artists[0];
      }
    }
    return formattedString;
  }

  function formatSeconds(seconds: number): string {
    let formattedString = '';

    let hour = Math.floor(seconds / 3600); //seconds to rest hours;
    let minute = Math.floor((seconds % 3600) / 60); //seconds to rest minutes;
    let second = Math.floor((seconds % 3600) % 60); //seconds rest;

    let hourFormatted = `${hour}:`;
    let minuteFormatted = `${
      hour > 0 ? minute.toString().padStart(2, '0') : minute
    }:`;
    let secondFormatted = second.toString().padStart(2, '0');

    formattedString = `${
      hour > 0 ? hourFormatted : ''
    }${minuteFormatted}${secondFormatted}`;

    return formattedString;
  }

  function handleChangeOpen(state: boolean): void {
    setOpen(state);
  }

  function handleChangePlaying(state: boolean): void {
    setPlaying(state);
  }

  function handleChangeVolume(volume: number): void {
    handleChangeMuted(false);

    if (volume <= 0) {
      handleChangeMuted(true);
      return;
    }

    if (volume >= 100) {
      setVolumeState(100);
      return;
    }

    setVolumeState(volume);
  }

  function handleChangeMuted(state: boolean): void {
    setMutedState(state);
    if (state) {
      setVolumeState(0);
    } else {
      setVolumeState(getVolume());
    }
  }

  function handleChangeRepeat(state: repeatPossibilities): void {
    setRepeat(state);
  }

  function handleChangeCurrentSeconds(seconds: number): void {
    return setCurrentSeconds(seconds);
  }

  function handleChangeLarge(state: boolean): void {
    setLarge(state);
  }

  function handleChangeTrackIsLoaded(state: boolean): void {
    setTrackIsLoaded(state);
  }

  function getOpen(): boolean {
    return open;
  }

  function getTrackList(): IMusicPost[] {
    return trackList ?? [];
  }

  function getTrackListLength(): number {
    return trackList?.length ?? 0;
  }

  function getCurrentTrack(): IMusicPost {
    return currentTrack ?? ({} as IMusicPost);
  }

  function getPlaying(): boolean {
    return playing;
  }

  function getVolume(): number {
    return volume ?? initialVolume;
  }

  function getMuted(): boolean {
    return muted ?? false;
  }

  function getRepeat(): repeatPossibilities {
    return repeat;
  }

  function getCurrentSeconds(): number {
    return currentSeconds;
  }

  function getLarge(): boolean {
    return large;
  }

  function getPositionOnTrackList(): number {
    return positionOnTrackList;
  }

  function getTrackIsLoaded(): boolean {
    return trackIsLoaded;
  }

  function setTrackList(trackList: IMusicPost[]): void {
    setTrackListState(trackList);
  }

  function setTrackInSpecificPositionOfTrackList(
    position: number,
    track: IMusicPost
  ): void {
    setTrackListState(state => {
      if (state && state.length > 0) {
        if (position <= 1) {
          return [track, ...state];
        }

        if (position >= getTrackListLength()) {
          return [...state, track];
        }

        const trackListCopy = [...state];

        trackListCopy?.splice(position - 1, 0, track);

        return trackListCopy;
      } else {
        return [track];
      }
    });
  }

  function setTrackInLastPositionOfTrackList(track: IMusicPost): void {
    setTrackListState(state => {
      if (state && state.length > 0) {
        return [...state, track];
      } else {
        return [track];
      }
    });
  }

  function setCurrentTrack(track: IMusicPost): void {
    setCurrentTrackState(track);
  }

  function setPositionOnTrackList(position: number): void {
    setPositionOnTrackListState(() => {
      if (position <= 1) {
        return 1;
      }

      if (position >= getTrackListLength()) {
        return getTrackListLength();
      }

      return position;
    });
  }

  function removeTrackInSpecificPositionOfTrackList(position: number): void {
    setTrackList(getTrackList().filter((value, index) => index != position));
  }

  function shuffleTrackList(): void {
    if (getPositionOnTrackList() <= 1) {
      setTrackInSpecificPositionOfTrackList(1, getCurrentTrack());
      removeTrackInSpecificPositionOfTrackList(getPositionOnTrackList());
      setPositionOnTrackList(1);
    }

    const trackListCopy = shuffleArray(getTrackList(), 2);

    setTrackList(trackListCopy);
  }

  return (
    <PlayerContext.Provider
      value={{
        initPlayer,
        formatArtists,
        formatSeconds,
        /* 
        open,
        trackList,
        currentTrack,
        playing,
        volume: getVolume(),
        muted,
        repeat,
        currentSeconds,
        large,
        positionOnTrackList,
        trackIsLoaded, */

        handleChangeOpen,
        handleChangePlaying,
        handleChangeVolume,
        handleChangeMuted,
        handleChangeRepeat,
        handleChangeCurrentSeconds,
        handleChangeLarge,
        handleChangeTrackIsLoaded,

        getTrackList,
        getTrackListLength,
        getOpen,
        getCurrentTrack,
        getPlaying,
        getVolume,
        getMuted,
        getRepeat,
        getCurrentSeconds,
        getLarge,
        getPositionOnTrackList,
        getTrackIsLoaded,

        setTrackList,
        setTrackInSpecificPositionOfTrackList,
        setTrackInLastPositionOfTrackList,
        setCurrentTrack,
        setPositionOnTrackList,

        removeTrackInSpecificPositionOfTrackList,

        shuffleTrackList
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
