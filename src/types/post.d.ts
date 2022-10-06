import { ICategory } from './category';
import { IComment } from './comment';
import { IProfile } from './profile';

export interface IPost {
  identification: string;
  description: string;
  usersHasLiked: IProfile[];
  usersHasSaved: IProfile[];
  usersHasReported: IProfile[];
  comments: IComment[];
  categories: ICategory[];
  createdAt: Date;
}
