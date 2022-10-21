import { useContext } from 'react';
import { SignupContext } from '.';

export function useSignup() {
  const context = useContext(SignupContext);

  return context;
}
