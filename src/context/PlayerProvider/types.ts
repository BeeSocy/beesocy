import { ReactNode } from 'react';
import { IMusicPost } from '../../types/musicPost';

export interface IPlayer {
  open?: boolean;
  tracks: IMusicPost[];
  currentTrack: number;
  playing: boolean;
  volume: number;
  shuffle?: boolean;
  repeat: 'all' | 'single' | 'off';
  currentTime: number;
  isLarge?: boolean;
}

export interface IPlayerContext extends IPlayer {
  handleSetOpen(state: boolean): void;
}

export interface IPlayerProvider {
  children: ReactNode;
}
