import { ReactNode } from 'react';
import { BoxCardStyled } from './styles';

interface IBoxCardsProps {
  children: ReactNode;
  imgUser: string;
  nick: string;
  identification: string;
  lastMessage: string;
}

export const BoxCards = ({
  children,
  identification,
  imgUser,
  lastMessage,
  nick
}: IBoxCardsProps) => {
  return <BoxCardStyled>{children}</BoxCardStyled>;
};
