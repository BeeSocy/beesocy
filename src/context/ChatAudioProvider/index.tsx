import { createContext, useState } from 'react';
import { IAudioContext, IAudioProvider, PossibleUserids } from './types';
import { useReactMediaRecorder } from 'react-media-recorder';
const { mediaBlobUrl } = useReactMediaRecorder({ audio: true });
export const AudioContext = createContext({} as IAudioContext);

export function CategoryProvider({ children }: IAudioProvider) {
  const [AudioId, setAudioId] = useState<PossibleUserids>('');
}
