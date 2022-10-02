import { IComment } from './comment';
import { IProfile } from './profile';

export interface IPost {
  identification: string;
  description: string;
  usersHasLiked: IProfile[];
  usersHasSaved: IProfile[];
  usersHasReported: IProfile[];
  comments: IComment[];
  categoriesId: string[];
  createdAt: Date;
}
