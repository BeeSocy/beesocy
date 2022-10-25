import { ReactNode } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
const { mediaBlobUrl } = useReactMediaRecorder({ audio: true });

interface IAudio {
  userId: string;
  blobUrl: string;
}
export type PossibleUserids = string;

export interface IAudioContext extends IAudio {
  userId: string;
}

export interface IAudioProvider {
  children: ReactNode;
}
