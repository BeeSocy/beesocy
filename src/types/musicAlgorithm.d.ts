import { IMusicPost } from './musicPost';

export interface IMusicAlgorithm {
  title: string;
  subtitle?: string;
  largeContent: boolean;
  halfContainer: boolean;
  tracks: IMusicPost[];
}
