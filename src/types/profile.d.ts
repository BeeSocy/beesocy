export interface IProfile {
  identification: string;
  name: string;
  nickname: string;
  follows: IProfile[];
  followers: IProfile[];
  color: string;
  imageUrl: string;
  description?: string;
  vip?: boolean;
  verified?: boolean;
}
