import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { api } from '../../utils/api';
import { IAuthContext, IAuthProvider } from './types';

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  async function getUserIdByNicknameOrEmailAndPassword(
    password: string,
    email?: string,
    nickname?: string
  ) {
    const requestBody = {
      email: email || null,
      nickname: nickname || null,
      password: password || null
    };

    const formattedRequestBody = Object.fromEntries(
      Object.entries(requestBody).filter(
        ([_, v]) => v != null && v != '' && v != undefined
      )
    );

    const request = await api.get('api/login', {
      data: formattedRequestBody
    });
    const data = request.data;

    return data;
  }

  async function authenticate(
    password: string,
    email?: string,
    nickname?: string
  ): Promise<string> {
    return getUserIdByNicknameOrEmailAndPassword(password, email, nickname)
  }

  return <AuthContext.Provider value={authenticate, }>{children}</AuthContext.Provider>;
}
