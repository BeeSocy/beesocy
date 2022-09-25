export interface IProfile {
  id: string;
  name: string;
  follows: IProfile[];
  followers: IProfile[];
  color: string;
  imageUrl: string;
  description?: string;
  vip?: boolean;
  verified?: boolean;
}
