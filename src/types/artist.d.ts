import { IProfile } from './profile';

export interface IArtist extends IProfile {
  tracks?: number[];
  categories?: number[];
}
