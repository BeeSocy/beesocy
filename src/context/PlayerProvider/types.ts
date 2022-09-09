import { ReactNode } from 'react';
import { IArtist } from '../../types/artist';
import { IMusicPost } from '../../types/musicPost';

export type repeatPossibilities = 'all' | 'single' | 'off';

export interface IPlayer {
  /*   open?: boolean;
  trackList: IMusicPost[] | undefined;
  currentTrack: IMusicPost | undefined;
  playing: boolean;
  volume: number;
  muted?: boolean;
  repeat: repeatPossibilities;
  currentSeconds: number;
  large?: boolean;
  positionOnTrackList: number;
  trackIsLoaded?: boolean; */
}

export interface IPlayerContext extends IPlayer {
  initPlayer(track: IMusicPost): void;

  formatArtists(artistNames: string[]): string;
  formatSeconds(seconds: number): string;

  handleChangeOpen(state: boolean): void;
  handleChangePlaying(state: boolean): void;
  handleChangeVolume(volume: number): void;
  handleChangeMuted(state: boolean): void;
  handleChangeRepeat(state: repeatPossibilities): void;
  handleChangeCurrentSeconds(seconds: number): void;
  handleChangeLarge(state: boolean): void;
  handleChangeTrackIsLoaded(state: boolean): void;

  getOpen(): boolean;
  getTrackList(): IMusicPost[];
  getTrackListLength(): number;
  getCurrentTrack(): IMusicPost;
  getPlaying(): boolean;
  getVolume(): number;
  getMuted(): boolean;
  getRepeat(): repeatPossibilities;
  getCurrentSeconds(): number;
  getLarge(): boolean;
  getPositionOnTrackList(): number;
  getTrackIsLoaded(): boolean;

  setTrackList(trackList: IMusicPost[]): void;
  setTrackInSpecificPositionOfTrackList(
    position: number,
    track: IMusicPost
  ): void;
  setTrackInLastPositionOfTrackList(track: IMusicPost): void;
  setCurrentTrack(track: IMusicPost): void;
  setPositionOnTrackList(position: number): void;

  removeTrackInSpecificPositionOfTrackList(position: number): void;

  shuffleTrackList(): void;
}

export interface IPlayerProvider {
  children: ReactNode;
}
