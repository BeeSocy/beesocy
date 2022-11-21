import { HTMLAttributes, ReactNode } from 'react';
import { ChatCardStyled } from './styles';
import { CardInfo, CardInfoSecondary } from '../CardInfo/InfoGeneral';

interface ICardProps extends HTMLAttributes<HTMLButtonElement> {}

export const ChatCards = ({ ...props }: ICardProps) => {
  return (
    <ChatCardStyled {...props}>
      <CardInfo />
    </ChatCardStyled>
  );
};

export const ChatCardsSecondary = ({ ...props }: ICardProps) => {
  return (
    <ChatCardStyled {...props}>
      <CardInfoSecondary />
    </ChatCardStyled>
  );
};
