import { IPost } from './post';

export interface IImagePost extends IPost {
  name: string;
  img: string[];
}
