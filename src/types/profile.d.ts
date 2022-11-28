export interface IProfile {
  identification: string;
  name: string;
  nickname: string;
  follows: IProfile[];
  followers: IProfile[];
  color: string;
  imageUrl?: string;
  bannerUrl?: string;
  imageFileName?: string;
  bannerFileName?: string;
  description?: string;
  vip?: boolean;
  verified?: boolean;
  socialNetworks?: [{ description: string; url: string }];
}
