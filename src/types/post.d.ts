export interface IPost {
  id: number;
  description: string;
  isLiked?: boolean;
  isSaved?: boolean;
  isReported?: boolean;
  categoriesId: number[];
}
