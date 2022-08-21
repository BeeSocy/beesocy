import { IPost } from './post';

export interface IMusicPost extends IPost {
  name: string;
  artists: string[];
  playlist?: boolean;
  explicit?: boolean;
  duration: number;
  imageUrl: string;
  fileUrl: string;
}
