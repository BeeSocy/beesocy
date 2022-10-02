interface socialNetworks {
  twitter?: string,
  github?: string,
  instagram?: string,
  soundcloud?: string,
  facebook?: string,
}
/* TODO: ter o @ (@Julio) */
export interface IProfile {
  identification: string;
  name: string;
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
