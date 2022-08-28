import { IMusicPost } from './musicPost';

export interface IMusicAlgorithm {
  title: string;
  subtitle?: string;
  halfContainer: boolean;
  tracks: IMusicPost[];
}
