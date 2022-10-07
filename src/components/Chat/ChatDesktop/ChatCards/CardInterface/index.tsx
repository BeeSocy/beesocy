import { HTMLAttributes, ReactNode } from 'react';
import { ChatCardStyled } from './styles';
import { CardInfo } from '../CardInfo/InfoGeneral';
import { ChatSection } from '../../ChatSection/ChatSectionGeneral';

interface ICardProps extends HTMLAttributes <HTMLButtonElement> {}

export const ChatCards = ({...props}:ICardProps) => {
  return (
    <ChatCardStyled {...props}>
      <CardInfo />
    </ChatCardStyled>
  );
};

function handleOpenSection() {
  return <ChatSection> </ChatSection>;
}
