export interface IPost {
  id: string;
  description: string;
  isLiked?: boolean;
  isSaved?: boolean;
  isReported?: boolean;
  categoriesId: string[];
}
