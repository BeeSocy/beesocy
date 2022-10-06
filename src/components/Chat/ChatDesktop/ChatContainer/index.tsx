import React, { ReactNode } from 'react';
import { useMobile } from '../../../../hooks/useMobile';
import { ContChatStyled } from './styles';

interface IContChatProps {
  children: ReactNode;
}

export const ChatContainer = ({ children }: IContChatProps) => {
  const { isMobile } = useMobile();

  return <ContChatStyled>{children}</ContChatStyled>;
};
