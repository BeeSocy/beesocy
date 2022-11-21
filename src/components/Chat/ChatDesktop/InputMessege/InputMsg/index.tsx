import React, {
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode
} from 'react';
import react from 'react';
import { InputStyled } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: ReactNode;
}

export const InputMsg: React.FC<InputProps> = ({ children }: InputProps) => {
  return <InputStyled type="text" placeholder="Envie uma mensagem..." />;
};
