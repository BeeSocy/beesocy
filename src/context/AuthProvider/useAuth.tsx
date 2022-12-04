import { useContext } from 'react';
import { AuthContext } from '.';

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
