import React, { ReactNode } from 'react';
import { ContChatStyled } from './styles';

interface IContChatProps {
  children: ReactNode;
}

export const ChatContainer = ({ children }: IContChatProps) => {
  return <ContChatStyled> {children} </ContChatStyled>;
};
