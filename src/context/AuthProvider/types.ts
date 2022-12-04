import { ReactNode } from 'react';

interface IAuth {
  userId: string;
  isAuthLoading: boolean;
  isAuthError: boolean;
  authError: string;
}

export interface IAuthContext extends IAuth {
  authenticate(input: string, password: string): Promise<boolean | string>;
  logout(): void;
  isLogged(): boolean;
}

export interface IAuthProvider {
  children: ReactNode;
}
