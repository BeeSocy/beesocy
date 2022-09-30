/* TODO: ter o @ (@Julio) */
export interface IProfile {
  identification: string;
  name: string;
  follows: IProfile[];
  followers: IProfile[];
  color: string;
  imageUrl: string;
  description?: string;
  vip?: boolean;
  verified?: boolean;
}
