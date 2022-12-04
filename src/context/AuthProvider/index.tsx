import { useQuery } from '@tanstack/react-query';
import { createContext, useState } from 'react';
import { useCookie } from 'react-use';
import { api } from '../../utils/api';
import { IAuthContext, IAuthProvider } from './types';

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isAuthError, setIsAuthError] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');

  async function getUserIdByNicknameOrEmailAndPassword(
    input: string,
    password: string
  ) {
    const request = await api.post('/login', {
      input,
      password
    });

    const data: string = await request.data;
    return data as string;
  }

  const [value, updateCookie, deleteCookie] = useCookie('userId');

  async function authenticate(
    input: string,
    password: string
  ): Promise<string | boolean> {
    setIsAuthLoading(true);
    setIsAuthError(false);
    setAuthError('');
    try {
      const data: string = await getUserIdByNicknameOrEmailAndPassword(
        input,
        password
      );
      updateCookie(data);
      return true;
    } catch (error) {
      setIsAuthError(true);
      setAuthError('Erro inesperado');
      if ((error as { response: { data: string } }).response.data) {
        setAuthError(
          (error as { response: { data: { error: string } } }).response.data
            .error
        );
        return (error as { response: { data: { error: string } } }).response
          .data.error;
      }
      return 'Erro inesperado';
    } finally {
      setIsAuthLoading(false);
    }
  }

  async function logout() {
    await api.get('/logout');
    deleteCookie();
  }

  function isLogged(): boolean {
    if (value) {
      return true;
    }

    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        userId: value ?? '',
        authenticate,
        logout,
        isLogged,
        isAuthLoading,
        isAuthError,
        authError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
