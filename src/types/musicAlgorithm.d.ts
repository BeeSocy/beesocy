import { IArtist } from './artist';
import { ICategory } from './category';
import { IMusicPost } from './musicPost';

export interface IMusicAlgorithm {
  title: string;
  subtitle?: string;
  largeContent: boolean;
  halfContainer: boolean;
  dataType: 'music' | 'artist' | 'category';
  tracks?: IMusicPost[];
  artists?: IArtist[];
  categories?: ICategory[];
}
