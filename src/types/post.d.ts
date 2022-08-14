export interface IPost {
  identity: number;
  description: string;
  isLiked?: boolean;
  isSaved?: boolean;
  isReported?: boolean;
}
