interface socialNetworks {
  twitter?: string,
  github?: string,
  instagram?: string,
  soundcloud?: string,
  facebook?: string,
}

export interface IProfile {
  identification: string;
  name: string;
  nickname: string;
  follows: IProfile[];
  followers: IProfile[];
  color: string;
  imageUrl: string;
  bannerUrl?: string;
  description?: string;
  vip?: boolean;
  verified?: boolean;
  socialNetworks?: socialNetworks;
}
