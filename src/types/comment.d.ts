import { IProfile } from "./profile";

export interface IComment {
    identification: string;
    user: IProfile;
    commentedAt: Date;
    commentText: string;
}