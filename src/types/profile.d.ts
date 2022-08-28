export interface IProfile {
  id: number;
  name: string;
  follows: number;
  followers: number;
  color: string;
  imageUrl: string;
  description?: string;
  vip?: boolean;
  verified?: boolean;
}
