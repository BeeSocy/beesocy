import { IPost } from './post';
import { IProfile } from './profile';

export interface IPlaylist extends IPost {
  name: string;
  bannerUrl: string;
  musics: IMusicPost[];
  author: IProfile;
}
