import { IArtist } from './artist';
import { IMusicPost } from './musicPost';

export interface IMusicAlgorithm {
  title: string;
  subtitle?: string;
  largeContent: boolean;
  halfContainer: boolean;
  dataType: 'music' | 'artists' | 'category';
  tracks?: IMusicPost[];
  artists?: IArtist[];
}
