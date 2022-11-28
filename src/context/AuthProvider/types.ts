import { ReactNode } from 'react';

interface IAuth {
  userId: string;
}

export interface IAuthContext extends IAuth {
  authenticate(
    password: string,
    email?: string,
    nickname?: string
  ): Promise<string>;
  logout(): void;
  handleGetUserIdOnCookie(): string;
}

export interface IAuthProvider {
  children: ReactNode;
}
