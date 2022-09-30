export interface IPost {
  identification: string;
  description: string;
  isLiked?: boolean;
  isSaved?: boolean;
  isReported?: boolean;
  categoriesId: string[];
}
